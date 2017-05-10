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
 .controller("InstagramNewController",[
   "InstagramFactory",
   InstagramNewControllerFunction
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
  })
  .state("InstagramShow",{
    url: "/instagrams/id",
    controller: "InstagramShowController",
    controlleras: "vm"
  })
  .state("InstagramNew",{
    url: "/instagrams/new"
    controller: "InstagramNewController"
    controlleras: "vm"
  })

  }

   function InstagramIndexControllerFunction(InstagramFactory){
   	this.instagrams= InstagramFactory.query()
   }

   function InstagramShowControllerFunction(){
    this.instagram= InstagramFactory.get({id: $stateParams.id})
  }

  function InstagramNewControllerFunction(InstagramFactory, $stateParams) {
    this.intagram = new InstagramFactory();
    this.create = function() {
      this.instagram.$save()
   }
 }
