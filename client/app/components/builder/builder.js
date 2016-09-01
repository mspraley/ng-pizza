import angular from 'angular';
import uiRouter from 'angular-ui-router';
import builderComponent from './builder.component';

let builderModule = angular.module('builder', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('builder', {
      url: '/builder',
      component: 'builder'
    });
})

.component('builder', builderComponent)

.name;

export default builderModule;
