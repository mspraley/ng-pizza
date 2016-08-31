import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paymentComponent from './payment.component';

let paymentModule = angular.module('payment', [
  uiRouter
])

.component('payment', paymentComponent)

.name;

export default paymentModule;
