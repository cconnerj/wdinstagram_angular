"use strict";


angular
 .module("instagram", [
   "ui.router",
   "ngResource"
 ])
 .config([
   "$stateProvider",
   Router])
 .controller("InstagramIndexController", [
   "InstagramFactory",
   InstagramIndexControllerFunction
 ])
 .controller("InstagramShowController",[
   "InstagramFactory",
   InstagramShowControllerFunction
 ])
 .factory("InstagramFactory",[
   "$resource",
   FactoryFunction
 ])

 function Router($stateProvider){
   $stateProvider
   .state("InstagramIndex", {
     url: "/instagrams",
     controller: "InstagramIndexController",
   	controllerAs: "vm"
  });
  }

   function InstagramIndexControllerFunction(InstagramFactory){
   	this.instagrams= InstagramFactory.query()
   }

   function InstagramShowControllerFunction(){
    this.instagram= InstagramFactory.get({id: $stateParams.id})
   }
