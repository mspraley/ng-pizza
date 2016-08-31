import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import Pizzabox from './pizzabox/pizzabox';

let commonModule = angular.module('app.common', [
  Sidebar,
  Pizzabox
])
  
.name;

export default commonModule;
