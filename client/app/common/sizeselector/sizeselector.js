import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sizeselectorComponent from './sizeselector.component';

let sizeselectorModule = angular.module('sizeselector', [
  uiRouter
])

.component('sizeselector', sizeselectorComponent)

.name;

export default sizeselectorModule;
