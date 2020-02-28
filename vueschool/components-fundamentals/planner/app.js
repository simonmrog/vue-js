let PlanComponent = {
  template: `
    <div @click="select" class="plan" :class="{'active-plan': isSelected}">
      <div>
        <span class="title">{{title}}</span>
      </div>
    </div>
  `,
  props: {
    title: String,
    selectedPlan: String
  },
  computed: {
    isSelected: function () {
      return(this.title == this.selectedPlan);
    }
  },
  methods: {
    select: function () {
      this.$emit("select", this.title);
    }
  }
};

let PlanPicker = {
  template: `
    <div class="plan-picker">
      <plan-component :key="index" v-for="(plan, index) in plans" :title="plan" @select="selectPlan" :selectedPlan="selectedPlan"></plan-component>
    </div>
  `,
  components: {
    PlanComponent: PlanComponent
  },
  data: function () {
    return({
      plans: ["The Single", "The Curious", "The Addict"],
      selectedPlan: null
    });
  },
  methods: {
    selectPlan: function (plan) {
      this.selectedPlan = plan;
    }
  }
};

new Vue({
  el: "#app",
  components: {
    PlanPicker: PlanPicker
  }
});