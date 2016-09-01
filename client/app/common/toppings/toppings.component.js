import template from './toppings.html';
import controller from './toppings.controller';
import './toppings.styl';

let toppingsComponent = {
  restrict: 'E',
  bindings: {
    toppings : '<',
    selectTopping : '='
  },
  template,
  controller
};

export default toppingsComponent;
