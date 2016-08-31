class SizepickerController {
  constructor() {
    this.name = 'sizepicker';

    var ctrl = this;
    ctrl.servings = 2;
    
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
  }
}

export default SizepickerController;
