import template from './pizza.html';
import controller from './pizza.controller';
import './pizza.styl';

let pizzaComponent = {
  restrict: 'E',
  bindings: {
    "size" : "<",
    "toppings" : "<"
  },
  template,
  controller
};

export default pizzaComponent;
