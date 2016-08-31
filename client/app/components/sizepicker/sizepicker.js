import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sizepickerComponent from './sizepicker.component';

let sizepickerModule = angular.module('sizepicker', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('sizepicker', {
      url: '/sizepicker',
      component: 'sizepicker'
    });
})

.component('sizepicker', sizepickerComponent)

.name;

export default sizepickerModule;
