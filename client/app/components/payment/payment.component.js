import template from './payment.html';
import controller from './payment.controller';
import './payment.styl';

let paymentComponent = {
  restrict: 'E',
  bindings: {
    open : '=',
    cards: '=',
    selectCard : '=',
    status: '='
  },
  template,
  controller
};

export default paymentComponent;
