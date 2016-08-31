import template from './sizeselector.html';
import controller from './sizeselector.controller';
import './sizeselector.styl';

let sizeselectorComponent = {
  restrict: 'E',
  bindings: {
    sizeSelected : '='
  },
  template,
  controller
};

export default sizeselectorComponent;
