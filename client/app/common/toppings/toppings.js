import angular from 'angular';
import uiRouter from 'angular-ui-router';
import toppingsComponent from './toppings.component';

let toppingsModule = angular.module('toppings', [
  uiRouter
])

.component('toppings', toppingsComponent)

.name;

export default toppingsModule;
