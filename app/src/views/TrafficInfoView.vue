<template>
  <div class="Traffic">
    <secton class="Traffic__train">
      <h1 class="Traffic__header">
        <span class="Traffic__headerIcon"></span>
        &nbsp;電車時刻表
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
          class="Traffic__upBtn"
          :class="{ Traffic__selectedBtn: UpDownToggle == 'Up' }"
          @click="changeUp()"
        >
          {{ showStation.up }}
        </button>
        <button
          class="Traffic__downBtn"
          :class="{ Traffic__selectedBtn: UpDownToggle == 'Down' }"
          @click="changeDown()"
        >
          {{ showStation.down }}
        </button>
      </div>
      <div>
        <!-- {{ showStation.recentTimeTbleUp }} -->
        <div v-if="UpDownToggle == 'Up'">
          <!-- {{ showStation.recentTimeTbleUp.min }}
          {{ showStation.recentTimeTbleUp.sec }} -->
          <ul class="Traffic__recentTimeTableList">
            <li
              v-for="(item, index) in showStation.recentTimeTbleUp.else"
              :key="index"
              class="Traffic__recentTimeTableListItem"
            >
              {{ item.time }}
              {{ item.info }}
            </li>
          </ul>
        </div>
        <div v-if="UpDownToggle == 'Down'">
          <!-- {{ showStation.recentTimeTbleDown.min }}
          {{ showStation.recentTimeTbleDown.sec }} -->
          <ul class="Traffic__recentTimeTableList">
            <li
              v-for="(item, index) in showStation.recentTimeTbleDown.else"
              :key="index"
              class="Traffic__recentTimeTableListItem"
            >
              {{ item.time }}
              {{ item.info }}
            </li>
          </ul>
        </div>
      </div>
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
        <!-- {{ showAllTimeTable }} -->
        <div v-if="UpDownToggle == 'Up'">
          <ul class="Traffic__TimeTableList">
            <li
              v-for="(item, key, index) in showAllTimeTable.timeTableUp"
              :key="index"
              class="Traffic__TimeTableListItem"
            >
              {{ key }}
              {{ item }}
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
              {{ key }}
              {{ item }}
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
        recentTimeTbleUp: { min: 0, sec: 0, else: [] },
        recentTimeTbleDown: { min: 0, sec: 0, else: [] },
      },
      showAllTimeTable: {
        timeTableUp: {},
        timeTableDown: {},
      },
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
        this.showStation.recentTimeTbleDown.else = elseList;
      }
      console.log(111);
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

  &__upBtn {
    border: none;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    background-color: #fd9297;
    color: #191919;
    @include sm {
      height: 50px;
      font-size: 12px;
    }
  }
  &__downBtn {
    border: none;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    background-color: #7cb6fd;
    color: #191919;
    @include sm {
      height: 50px;
      font-size: 12px;
    }
  }
  &__selectedBtn {
    border-bottom: #87003c 3px solid;
  }
  &__recentTimeTableListItem {
    height: 50px;
    text-align: left;
  }
  &__TimeTableListItem {
    height: 50px;
    text-align: left;
  }
}
</style>
