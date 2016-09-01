class ToppingsController {
  constructor() {
    this.name = 'toppings';

    var ctrl = this;

    this.addTopping = function(topping) {
      var found = false
      for (var i = 0; i < ctrl.toppings.length; i++) {
        if (ctrl.toppings[i].name == topping.name) {
          found = true
          ctrl.toppings[i].selected = !ctrl.toppings[i].selected;
        }
      }

      //prevent double toppings for now
      if (!found) {
        this.selectTopping(topping);
      }
    }
  }
}

export default ToppingsController;
