import angular from 'angular';
import uiRouter from 'angular-ui-router';
import extrasComponent from './extras.component';

let extrasModule = angular.module('extras', [
  uiRouter
])

.component('extras', extrasComponent)

.name;

export default extrasModule;
