<template>
  <div class="dining">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>
<script>
import io from "socket.io-client";
export default {
  data: function () {
    return {
      data: "",
    };
  },
  mounted() {
    const parser = new DOMParser();
    // const dom = "<h1 id='aa'>aaa</h1>";

    const socket = io();
    const vm = this;
    socket.emit("reqMenu");
    const decodeAsText = (arrayBuffer, encoding = null) =>
      new TextDecoder(encoding).decode(arrayBuffer);
    socket.on("resMenu", (blob) => {
      const text = decodeAsText(blob, "shift-jis");
      vm.data = text;
      const doc = parser.parseFromString(text, "text/html");
      console.log(doc);
    });
  },
};
</script>
