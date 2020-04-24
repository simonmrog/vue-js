Vue.component("click-counter", {
  template: `
    <div id="click-counter">
      <p>The count is:</p>
      <button @click="count++">{{count}}</button>
    </div>`,
  data: function () {
    return({
      count: 0
    });
  }
});

new Vue({
  el: "#app"
});