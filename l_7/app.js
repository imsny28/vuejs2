new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 7 (Event Modifiers - once, prevent, stop, capture)',
    counter: 0
  },
  methods: {
    incrementby1: function() {
      this.counter++
    },
    submitClick: function() {
      console.log("click .....");
    },
    parentClass: function() {
      console.log("Parent Class .....");
    },
    btnClick: function() {
      console.log("Button Click .....");
    }
  }
});
