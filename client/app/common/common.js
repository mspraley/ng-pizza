import angular from 'angular';
import Pizzabox from './pizzabox/pizzabox';
import Pizza from './pizza/pizza';
import SizeSelector from './sizeselector/sizeselector';
import Toppings from './toppings/toppings';
import Extras from './extras/extras';

let commonModule = angular.module('app.common', [
  Pizzabox,
  Pizza,
  SizeSelector,
  Toppings,
  Extras
])
  
.name;

export default commonModule;
