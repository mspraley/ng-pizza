class SizeselectorController {
  constructor() {
    "ngInject";
    this.name = 'sizeselector';

    var ctrl = this;

    this.selectSize = function(size) {
      ctrl.size = size;
      ctrl.sizeSelected(size);
    }
  }
}

export default SizeselectorController;
