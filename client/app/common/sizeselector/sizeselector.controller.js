class SizeselectorController {
  constructor() {
    "ngInject";
    this.name = 'sizeselector';

    var ctrl = this;
    ctrl.size = 'm';
    
    this.selectSize = function(size) {
      ctrl.size = size;
      ctrl.sizeSelected(size);
    }
  }
}

export default SizeselectorController;
