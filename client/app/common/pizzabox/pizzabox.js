import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pizzaboxComponent from './pizzabox.component';

let pizzaboxModule = angular.module('pizzabox', [
  uiRouter
])

.component('pizzabox', pizzaboxComponent)

.name;

export default pizzaboxModule;
