class BuilderController {
  constructor() {
    this.name = 'builder';

    var ctrl = this;
    ctrl.servings = '2 (12 in.)';
    ctrl.states = ['size', 'toppings', 'extras'];
    ctrl.state = 0;
    ctrl.stateClass = ctrl.states[0];

    ctrl.toppings = [
      {
        name : 'pepperoni',
        selected : false
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

    ctrl.extras = {
      drinks : [
        {
          name : 'coke',
          selected : false
        },
        {
          name : 'sprite',
          selected : false
        },
        {
          name : 'fanta',
          selected : false
        }
      ],
      sides : [
        {
          name : 'wings',
          selected : false
        },
        {
          name : 'breadsticks',
          selected : false
        },
        {
          name : 'pasta',
          selected : false
        },
        {
          name : 'salad',
          selected : false
        }
      ]
    }
    
    ctrl.sizeSelected = function(size) {
      ctrl.size = size;
      switch(size) {
        case 's':
          ctrl.servings = '1 (8 in)';
          break;
        case 'm' :
          ctrl.servings = '2 (12 in)';
          break;
        case 'l' :
          ctrl.servings = '4 (16 in.)';
          break;
      }
    }

    ctrl.selectTopping = function(topping) {
      ctrl.selectedToppings.push(topping);
    }

    ctrl.next = function() {
      ctrl.state += 1;
      ctrl.stateClass = ctrl.states[ctrl.state];
    }

    ctrl.prev = function() {
      ctrl.state -= 1;
      ctrl.stateClass = ctrl.states[ctrl.state];
    }
  }
}

export default BuilderController;
