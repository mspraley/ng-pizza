class SizepickerController {
  constructor() {
    this.name = 'sizepicker';

    var ctrl = this;
    ctrl.servings = 2;
    ctrl.state = 'size';

    ctrl.toppings = [
      {
        name : 'pepperoni',
        selected : true
      },
      {
        name : 'bacon',
        selected : false
      },
      {
        name : 'onion',
        selected : false
      },
      {
        name : 'mushroom',
        selected : false
      },
      {
        name : 'olive',
        selected : false
      },
      {
        name : 'pepper',
        selected : false
      }
    ]
    ctrl.selectedToppings = ctrl.toppings;
    
    ctrl.sizeSelected = function(size) {
      ctrl.size = size;
      switch(size) {
        case 's':
          ctrl.servings = 1;
          break;
        case 'm' :
          ctrl.servings = 2;
          break;
        case 'l' :
          ctrl.servings = 4;
          break;
      }
    }

    ctrl.selectTopping = function(topping) {
      ctrl.selectedToppings.push(topping);
    }

    ctrl.next = function() {
      ctrl.state = "toppings";
    }
  }
}

export default SizepickerController;
