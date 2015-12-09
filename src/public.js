'use strict';

function publishExternalAPI() {
  angular.module('ui.drop', [], ['$provide', function($provide) {
    $provide.provider({
      $dnd: $dndProvider,
      $drag: $dragProvider,
      $drop: $dropProvider
    });
  }]).directive({
    draggable: draggableDirective,
    droppable: droppableDirective
  })
  .directive("ondrag", function(){
      return function(scope, element, attrs) {
      element.bind("mousedown", function(){
        scope.$apply(attrs.ondrag);
      })
    }
  })
  .directive("ondrop", function(){
      return function(scope, element, attrs) {
      element.bind("mouseup", function(){
        scope.$apply(attrs.ondrop);
      })
    }
  }).factory({
    $dndDOM: $dndDOMFactory
  });
}
