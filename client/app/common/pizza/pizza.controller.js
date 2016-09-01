class PizzaController {
  constructor() {
    this.name = 'pizza';

    this.slices = [1, 2, 3];
    var ctrl = this;
    ctrl.active = false
    ctrl.size = 'm';

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
      };
    }
  }
  
}

export default PizzaController;
