import template from './extras.html';
import controller from './extras.controller';
import './extras.styl';

let extrasComponent = {
  restrict: 'E',
  bindings: {
    extras : "<"
  },
  template,
  controller
};

export default extrasComponent;
