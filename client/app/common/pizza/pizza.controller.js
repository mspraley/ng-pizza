class PizzaController {
  constructor() {
    this.name = 'pizza';

    this.slices = [1, 2, 3];
    this.toppings = [1,2,3,4,5,6,7,8,9,10,11,12];
    var ctrl = this;
    ctrl.size = 'm';

    ctrl.randomRotation = function(max) {
        transform: 'rotate(' + Math.floor((Math.random()*360)+1) + 'deg)';
    };

    this.$onChanges = function(changes) {
      switch(changes.size.currentValue) {
        case 's':
          ctrl.slices = [1,2];
          break;
        case 'm' :
          ctrl.slices = [1,2,3];
          break;
        case 'l' :
          ctrl.slices = [1,2,3,4];
          break;
      }
    }
  }
  
}

export default PizzaController;
