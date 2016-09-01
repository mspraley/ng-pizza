import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import Pizzabox from './pizzabox/pizzabox';
import Pizza from './pizza/pizza';
import SizeSelector from './sizeselector/sizeselector';
import Toppings from './toppings/toppings';

let commonModule = angular.module('app.common', [
  Sidebar,
  Pizzabox,
  Pizza,
  SizeSelector,
  Toppings
])
  
.name;

export default commonModule;
