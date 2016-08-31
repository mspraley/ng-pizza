import angular from 'angular';
import Home from './home/home';
import Payment from './payment/payment';
import SizePicker from './sizepicker/sizepicker';

let componentModule = angular.module('app.components', [
  Home,
  Payment,
  SizePicker
  ])
  
.name;

export default componentModule;
