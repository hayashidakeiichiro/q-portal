<template>
  <div class="Traffic">
    <secton class="Traffic__train">
      <h1 class="Traffic__header">
        <span class="Traffic__headerIcon"></span>
        &nbsp;次の電車
      </h1>
      <div class="Traffic__btnContainer">
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: stationToggle == '九大学研都市駅' }"
          @click="selectStation('九大学研都市駅')"
        >
          九大学研都市駅
        </button>
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: stationToggle == '周船寺駅' }"
          @click="selectStation('周船寺駅')"
        >
          周船寺駅
        </button>
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: stationToggle == '今宿駅' }"
          @click="selectStation('今宿駅')"
        >
          今宿駅
        </button>
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: stationToggle == '波多江駅' }"
          @click="selectStation('波多江駅')"
        >
          波多江駅
        </button>
      </div>
      <div class="Traffic__btnContainer">
        <button
          class="Traffic__updownBtn"
          :class="{ Traffic__selectedUpDownBtn: UpDownToggle == 'Up' }"
          @click="changeUp()"
        >
          {{ showStation.up }}
        </button>
        <button
          class="Traffic__updownBtn"
          :class="{ Traffic__selectedUpDownBtn: UpDownToggle == 'Down' }"
          @click="changeDown()"
        >
          {{ showStation.down }}
        </button>
      </div>
      <div>
        <div v-if="UpDownToggle == 'Up'" class="Traffic__recentContainer">
          <div class="Traffic__nextTrain">
            次の電車まで
            <p class="Traffic__nextTrainTitle">
              {{ showTime.min }}分 {{ showTime.sec }}秒
            </p>
            {{ showStation.recentTimeTbleUp.else[0].info }}
            <br />
            {{ showStation.recentTimeTbleUp.else[0].time }}発
          </div>
          <ul class="Traffic__recentTimeTableList">
            <li
              v-for="(item, index) in showStation.recentTimeTbleUp.else.slice(
                1
              )"
              :key="index"
              class="Traffic__recentTimeTableListItem"
            >
              {{ item.time }}
              {{ item.info }}
            </li>
          </ul>
        </div>
        <div v-if="UpDownToggle == 'Down'" class="Traffic__recentContainer">
          <div class="Traffic__nextTrain">
            次の電車まで
            <p class="Traffic__nextTrainTitle">
              {{ showTime.min }}分 {{ showTime.sec }}秒
            </p>
            {{ showStation.recentTimeTbleDown.else[0].info }}
            <br />
            {{ showStation.recentTimeTbleDown.else[0].time }}発
          </div>
          <ul class="Traffic__recentTimeTableList">
            <li
              v-for="(item, index) in showStation.recentTimeTbleDown.else.slice(
                1
              )"
              :key="index"
              class="Traffic__recentTimeTableListItem"
            >
              {{ item.time }}
              {{ item.info }}
            </li>
          </ul>
        </div>
      </div>
      <h1 class="Traffic__header">
        <span class="Traffic__headerIcon"></span>
        &nbsp;{{ stationToggle }}の時刻表
      </h1>
      <div class="Traffic__btnContainer">
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: dayToggle == 'weekDay' }"
          @click="changeDay('weekDay')"
        >
          平日
        </button>
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: dayToggle == 'saturDay' }"
          @click="changeDay('saturDay')"
        >
          土曜日
        </button>
        <button
          class="Traffic__btn"
          :class="{ Traffic__selectedBtn: dayToggle == 'holiDay' }"
          @click="changeDay('holiDay')"
        >
          休日
        </button>
      </div>
      <div>
        <div v-if="UpDownToggle == 'Up'">
          <ul class="Traffic__TimeTableList">
            <li
              v-for="(item, key, index) in showAllTimeTable.timeTableUp"
              :key="index"
              class="Traffic__TimeTableListItem"
            >
              <p>
                &emsp;
                {{ key }}
              </p>
              <p>
                {{ item.split("・")[0] }}
              </p>
              <p>
                {{ item.split("・")[1] }}
              </p>
            </li>
          </ul>
        </div>
        <div v-if="UpDownToggle == 'Down'">
          <ul class="Traffic__TimeTableList">
            <li
              v-for="(item, key, index) in showAllTimeTable.timeTableDown"
              :key="index"
              class="Traffic__TimeTableListItem"
            >
              <p>
                &emsp;
                {{ key }}
              </p>
              <p>
                {{ item.split("・")[0] }}
              </p>
              <p>
                {{ item.split("・")[1] }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </secton>
  </div>
</template>
<script>
import JapaneseHolidays from "japanese-holidays";
import io from "socket.io-client";

export default {
  data: function () {
    return {
      dateInfo: {
        month: "",
        date: "",
        day: "",
        weekDay: "",
        hour: 0,
        min: 0,
        sec: 0,
      },
      UpDownToggle: "Up",
      dayToggle: "weekDay",
      stationToggle: "九大学研都市駅",
      stationInfo: {
        九大学研都市駅: {},
        周船寺駅: {},
        今宿駅: {},
        波多江駅: {},
      },
      showStation: {
        up: "姪浜・博多方面",
        down: "西唐津方面",
        timeTableUp: {},
        timeTableDown: {},
        recentTimeTbleUp: { else: [{ time: "00:00", info: "" }] },
        recentTimeTbleDown: { else: [{ time: "00:00", info: "" }] },
      },
      showAllTimeTable: {
        timeTableUp: {},
        timeTableDown: {},
      },
      showTime: {
        min: 0,
        sec: 0,
      },
      invalidID: undefined,
    };
  },
  methods: {
    selectStation: function (station) {
      this.stationToggle = station;
      this.showStation.up = this.stationInfo[station].up;
      this.showStation.down = this.stationInfo[station].down;
      this.showStation.recentTimeTbleUp = { min: 0, sec: 0, else: [] };
      this.showStation.recentTimeTbleDown = { min: 0, sec: 0, else: [] };
      if (this.dateInfo.weekDay == "holiDay") {
        this.showStation.timeTableUp = this.stationInfo[station].holiDayUp;
        this.showStation.timeTableDown = this.stationInfo[station].holiDayDown;
      } else if (this.dateInfo.weekDay == "saturDay") {
        this.showStation.timeTableUp = this.stationInfo[station].saturDayUp;
        this.showStation.timeTableDown = this.stationInfo[station].saturDayDown;
      } else {
        this.showStation.timeTableUp = this.stationInfo[station].weekDayUp;
        this.showStation.timeTableDown = this.stationInfo[station].weekDayDown;
      }
      this.setRecentTimeTable();
      this.changeDay(this.dateInfo.weekDay);
    },
    changeUp: function () {
      this.UpDownToggle = "Up";
      this.setRecentTimeTable();
    },
    changeDown: function () {
      this.UpDownToggle = "Down";
      this.setRecentTimeTable();
    },
    changeDay: function (day) {
      this.dayToggle = day;
      if (day == "holiDay") {
        this.showAllTimeTable = {
          timeTableUp: this.stationInfo[this.stationToggle].holiDayUp,
          timeTableDown: this.stationInfo[this.stationToggle].holiDayDown,
        };
      } else if (day == "saturDay") {
        this.showAllTimeTable = {
          timeTableUp: this.stationInfo[this.stationToggle].saturDayUp,
          timeTableDown: this.stationInfo[this.stationToggle].saturDayDown,
        };
      } else if (day == "weekDay") {
        this.showAllTimeTable = {
          timeTableUp: this.stationInfo[this.stationToggle].weekDayUp,
          timeTableDown: this.stationInfo[this.stationToggle].weekDayDown,
        };
      }
    },
    setRecentTimeTable: function () {
      const today = new Date();
      const nowhour = today.getHours();
      const nowmin = today.getMinutes();

      const elseList = [];
      if (this.UpDownToggle == "Up") {
        Object.keys(this.showStation.timeTableUp).forEach((item) => {
          const [hour, min] = item.split(":");
          if (
            nowhour < Number(hour) ||
            (nowhour == Number(hour) && nowmin < Number(min))
          ) {
            if (elseList.length <= 5) {
              elseList.push({
                time: item,
                info: this.showStation.timeTableUp[item],
              });
            }
          }
        });
        if (elseList.length == 0) {
          elseList.push({
            time: "24:00",
            info: "今日の営業は終了しました",
          });
        }
        this.showStation.recentTimeTbleUp.else = elseList;
      }
      if (this.UpDownToggle == "Down") {
        Object.keys(this.showStation.timeTableDown).forEach((item) => {
          const [hour, min] = item.split(":");
          if (
            nowhour < Number(hour) ||
            (nowhour == Number(hour) && nowmin < Number(min))
          ) {
            if (elseList.length <= 5) {
              elseList.push({
                time: item,
                info: this.showStation.timeTableDown[item],
              });
            }
          }
        });
        if (elseList.length == 0) {
          elseList.push({
            time: "24:00",
            info: "今日の営業は終了しました",
          });
        }
        this.showStation.recentTimeTbleDown.else = elseList;
      }
    },
  },
  mounted: function () {
    const socket = io();
    let today = new Date();
    const dayOfWeak = ["日", "月", "火", "水", "木", "金", "土"];
    this.dateInfo.month = today.getMonth() + 1;
    this.dateInfo.date = today.getDate();
    this.dateInfo.day = dayOfWeak[today.getDay()];
    if (JapaneseHolidays.isHoliday(today) || today.getDay() == 0) {
      this.dateInfo.weekDay = "holiDay";
    } else if (today.getDay() == 6) {
      this.dateInfo.weekDay = "saturDay";
    } else {
      this.dateInfo.weekDay = "weekDay";
    }
    const vm = this;
    socket.emit("reqTimeTable");
    socket.on("resTimeTable", (json) => {
      vm.stationInfo = json;
      vm.changeDay(vm.dateInfo.weekDay);
      vm.selectStation("九大学研都市駅");
      vm.setRecentTimeTable();
    });
    this.invalidID = setInterval(() => {
      const today = new Date();
      const nowhour = today.getHours();
      const nowmin = today.getMinutes();
      const nowsec = today.getSeconds();
      if (vm.UpDownToggle == "Up") {
        const [hour, min] =
          vm.showStation.recentTimeTbleUp.else[0].time.split(":");
        if (60 * (Number(hour) - nowhour) + Number(min) - nowmin - 1 >= 0) {
          vm.showTime.min =
            60 * (Number(hour) - nowhour) + Number(min) - nowmin - 1;
          vm.showTime.sec = 59 - nowsec;
        } else {
          vm.setRecentTimeTable();
        }
      } else {
        const [hour, min] =
          vm.showStation.recentTimeTbleDown.else[0].time.split(":");
        if (60 * (Number(hour) - nowhour) + Number(min) - nowmin - 1 >= 0) {
          vm.showTime.min =
            60 * (Number(hour) - nowhour) + Number(min) - nowmin - 1;
          vm.showTime.sec = 59 - nowsec;
        } else {
          vm.setRecentTimeTable();
        }
      }
      console.log(222);
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.invalidID);
  },
};
</script>
<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

@mixin sm {
  @media screen and (max-width: $sm) {
    @content;
  }
}
@mixin md {
  @media screen and (max-width: $md) {
    @content;
  }
}
@mixin lg {
  @media screen and (max-width: $lg) {
    @content;
  }
}
@mixin xl {
  @media screen and (max-width: $xl) {
    @content;
  }
}

ul {
  list-style: none;
  padding: 0;
}
.Traffic {
  padding: 20px 0;
  &__header {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    border-bottom: dotted 2px #333333;
    display: flex;
    @include sm {
      font-size: 18px;
    }
  }
  &__headerIcon {
    display: block;
    background-color: #87003c;
    width: 12px;
    height: 22px;
    border-radius: 2px;
    @include sm {
      width: 10px;
      height: 18px;
    }
  }
  &__btnContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 30px 0 0 0;
  }
  &__btn {
    border: none;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    // text-decoration: underline;
    background-color: #f0f0f0;
    color: #666666;
    border-bottom: transparent 3px solid;
    @include sm {
      height: 50px;
      font-size: 12px;
    }
  }

  &__updownBtn {
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    background-color: #ffffff;
    color: #191919;
    border: #666666 1px solid;
    @include sm {
      height: 40px;
      font-size: 12px;
    }
  }
  &__selectedUpDownBtn {
    border: #87003c 1px solid;
    background-color: #87003c;
    font-weight: bold;
    color: #ffffff;
  }
  &__selectedBtn {
    border-bottom: #87003c 3px solid;
  }
  &__recentContainer {
    display: flex;
    border-top: #87003c 2px solid;
    padding: 20px;
    font-weight: bold;
  }
  &__nextTrain {
    font-size: 25px;
    width: 50%;
    @include sm {
      font-size: 15px;
    }
  }
  &__nextTrainTitle {
    font-size: 30px;
    @include sm {
      font-size: 20px;
    }
  }

  &__recentTimeTableList {
    list-style: square;
    font-weight: bold;
    padding-left: 20px;
  }
  &__recentTimeTableListItem {
    height: 40px;
    font-size: 20px;
    text-align: left;
    @include sm {
      font-size: 12px;
      height: 30px;
    }
  }
  &__TimeTableList {
    padding: 20px 0;
  }
  &__TimeTableListItem {
    display: grid;
    grid-template-columns: 30% 30% 40%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: left;
    border: #d3d3d3 1px solid;
    @include sm {
      font-size: 15px;
    }
  }
  &__TimeTableListItem:nth-child(even) {
    background-color: #ebebeb;
  }
}
</style>
