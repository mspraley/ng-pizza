import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pizzaComponent from './pizza.component';

let pizzaModule = angular.module('pizza', [
  uiRouter
])

.component('pizza', pizzaComponent)

.name;

export default pizzaModule;
