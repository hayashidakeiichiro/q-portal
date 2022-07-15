import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faNewspaper,
  faUtensils,
  faTrainSubway,
  faBook,
  faChalkboardUser,
  faGavel,
  faMoneyBill,
  faFlask,
  faBriefcaseMedical,
  faTooth,
  faPills,
  faGears,
  faCompassDrafting,
  faWheatAwn,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faNewspaper, faUtensils, faTrainSubway);
library.add(
  faHandshake,
  faBook,
  faChalkboardUser,
  faGavel,
  faMoneyBill,
  faFlask,
  faBriefcaseMedical,
  faTooth,
  faPills,
  faGears,
  faCompassDrafting,
  faWheatAwn,
  faRightToBracket,
  faUser
);

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAS3vOFrrraas680kYLCTbw26k4qYIzB_k",
//   authDomain: "q-portal-e6413.firebaseapp.com",
//   projectId: "q-portal-e6413",
//   storageBucket: "q-portal-e6413.appspot.com",
//   messagingSenderId: "330702328500",
//   appId: "1:330702328500:web:57a82a20f46600192fbde1",
//   measurementId: "G-K94L0L00LM",
// };

// const app = initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
