import angular from 'angular';
import Home from './home/home';
import Payment from './payment/payment';

let componentModule = angular.module('app.components', [
  Home,
  Payment
  ])
  
.name;

export default componentModule;
