import angular from 'angular';
import Home from './home/home';
import Payment from './payment/payment';
import Builder from './builder/builder';

let componentModule = angular.module('app.components', [
  Home,
  Payment,
  Builder
  ])
  
.name;

export default componentModule;
