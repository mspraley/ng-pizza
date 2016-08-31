class SizepickerController {
  constructor() {
    this.name = 'sizepicker';

    var ctrl = this;
    ctrl.sizeSelected = function(size) {
      ctrl.size = size;
    }
  }
}

export default SizepickerController;
