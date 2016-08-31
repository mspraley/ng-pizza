import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sizepickerComponent from './sizepicker.component';

let sizepickerModule = angular.module('sizepicker', [
  uiRouter
])

.component('sizepicker', sizepickerComponent)

.name;

export default sizepickerModule;
