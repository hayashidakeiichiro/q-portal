<template>
  <section class="Dining">
    <div>
      <a
        href="http://www.coop.kyushu-u.ac.jp/shokudoubu.html"
        target="_brank"
        rel="noopener noreferrer"
      >
        <img src="../assets/dining.png" alt="" class="Dining__topImg" />
      </a>
    </div>
    <h1 class="Dining__header">
      <span class="Dining__headerIcon"></span>
      &nbsp;今日の定食メニュー
    </h1>
    <div class="Dining__setMeal">
      <div class="Dining__date">{{ setMeal.date }}</div>
      <table class="Dining__setMealTable">
        <tr>
          <th class="Dining__setMealTitle">昼食</th>
          <th class="Dining__setMealTitle">夕食</th>
        </tr>
        <tr>
          <td class="Dining__setMealMenu">
            <div v-html="setMeal.lunch"></div>
          </td>
          <td class="Dining__setMealMenu">
            <div v-html="setMeal.dinner"></div>
          </td>
        </tr>
      </table>
    </div>
    <h1 class="Dining__header">
      <span class="Dining__headerIcon"></span>
      &nbsp;今月のメニュー
    </h1>
    <div class="Dining__btnContainer">
      <button @click="selectMenu(1)" class="Dining__menuBtn">
        メインダイニング
      </button>
      <button @click="selectMenu(2)" class="Dining__menuBtn">
        ビッグダイニング
      </button>
      <button @click="selectMenu(3)" class="Dining__menuBtn">クアシス</button>
      <button @click="selectMenu(4)" class="Dining__menuBtn">
        ビッグオレンジ
      </button>
      <button @click="selectMenu(5)" class="Dining__menuBtn">
        あかでみっくらんたん
      </button>
      <button @click="selectMenu(6)" class="Dining__menuBtn">医系食堂</button>
      <button @click="selectMenu(7)" class="Dining__menuBtn">E-Cafe</button>
      <button @click="selectMenu(8)" class="Dining__menuBtn">
        アグリダイニング
      </button>
      <button @click="selectMenu(9)" class="Dining__menuBtn">
        ビッグスカイ
      </button>
      <button @click="selectMenu(10)" class="Dining__menuBtn">
        ビッグどら
      </button>
    </div>

    <div v-html="showMenu" class="Dining__menu"></div>
  </section>
</template>
<script>
import io from "socket.io-client";
export default {
  data: function () {
    return {
      showMenu: "",
      setMeal: { date: "", lunch: "<p>お休み</p>", dinner: "<p>お休み</p>" },
      menuDoc: {},
      dayInfo: {},
    };
  },
  methods: {
    selectMenu: function (i) {
      this.showMenu = this.menuDoc[`menu${i}`];
    },
  },
  mounted() {
    const parser = new DOMParser();
    const socket = io();
    const vm = this;
    const decodeAsText = (arrayBuffer, encoding = null) =>
      new TextDecoder(encoding).decode(arrayBuffer);
    socket.emit("reqMenu");

    //今月のメニュー取得
    socket.on("resMenu", (blob) => {
      const text = decodeAsText(blob, "shift-jis");
      const doc = parser.parseFromString(text, "text/html");
      for (let i = 1; i <= 10; i++) {
        if (i < 10) {
          vm.menuDoc[`menu${i}`] = doc.getElementById(`menu0${i}`).outerHTML;
        } else {
          vm.menuDoc[`menu${i}`] = doc.getElementById(`menu${i}`).outerHTML;
        }
      }
      vm.showMenu = vm.menuDoc.menu1;
    });

    //今日の定食取得
    socket.on("resSetMeal", (blob) => {
      const text = decodeAsText(blob, "shift-jis");
      const doc = parser.parseFromString(text, "text/html");
      const docList = doc.getElementsByClassName("menu");
      const today = new Date();
      const dayOfWeak = ["日", "月", "火", "水", "木", "金", "土"];
      vm.setMeal.date =
        String(today.getMonth() + 1) +
        "/" +
        String(today.getDate()) +
        "(" +
        dayOfWeak[today.getDay()] +
        ")";

      Array.prototype.forEach.call(docList, (item) => {
        //これだけじゃバグるかも
        console.log(item);
        if (item.outerHTML.indexOf(String(today.getDate()) + "日") != -1) {
          const tags = item.getElementsByTagName("td");
          Array.prototype.forEach.call(tags, (td, i) => {
            if (i == 2) {
              vm.setMeal.lunch = td.innerHTML;
            }
            if (i == 5) {
              vm.setMeal.dinner = td.innerHTML;
            }
          });
        }
      });
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
.Dining {
  padding: 20px 0;

  &__topImg {
    width: 100%;
  }
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
    grid-template-columns: repeat(5, 1fr);
  }
  &__menuBtn {
    border: none;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    background-color: #f0f0f0;
    color: #666666;
    @include sm {
      height: 50px;
      font-size: 10px;
    }
  }
  &__menu {
    ::v-deep(table) {
      border: 2px solid;
      width: 100%;
    }
    ::v-deep(th) {
      background-color: rgb(241, 241, 241);
      font-size: 18px;
      border: 1px solid #999999;
      @include sm {
        font-size: 8px;
      }
    }
    ::v-deep(tr) {
      border: 1px solid #999999;
      font-size: 16px;
      @include md {
        font-size: 12px;
      }
      @include sm {
        font-size: 8px;
      }
    }
    ::v-deep(td) {
      background-color: #ffffff;
      border: 1px solid #999999;
      width: 40px;
    }
    ::v-deep(.style11) {
      background-color: #87003c;
      height: 50px;
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
      @include sm {
        height: 30px;
        font-size: 16px;
      }
    }
  }

  &__setMeal {
    padding: 20px 0;
    text-align: left;
  }
  &__setMealTable {
    width: 100%;
    border: 2px solid;
  }
  &__setMealTitle {
    font-size: 25px;
    background-color: #87003c;
    color: #ffffff;
    width: 50%;
    @include sm {
      font-size: 15px;
    }
  }
  &__setMealMenu {
    font-size: 18px;
    border: 1px solid #999999;
    height: 100px;
    font-weight: bold;
    @include sm {
      height: 70px;
      font-size: 12px;
    }
  }
  &__date {
    font-size: 20px;
    font-weight: bold;
    @include sm {
      font-size: 15px;
    }
  }
}
</style>
