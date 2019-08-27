import { isServiceTaskAndAlreadyFullOfLine, getListOfElements, isSequenceFlow, isLabel } from '../utility'

class MyBehavior {
  constructor(eventBus,modeling ) {


    eventBus.on("element.click", function(e) {

      // al click sul service task gli cambio la struttura della palette
      if(isLabel(e.element) || isSequenceFlow(e.element) || isServiceTaskAndAlreadyFullOfLine(e.element)){
        getListOfElements(".djs-context-pad .entry:not(.bpmn-icon-trash):not(.bpmn-icon-screw-wrench)").forEach((elem, index) => {
          elem.parentNode.removeChild(elem);
        })
      }
    })

    // example of events
    // "element.hover",
    // "element.out",
    // "element.click",
    // "element.dblclick",
    // "element.mousedown",
    // "element.mouseup"
    eventBus.on("element.dblclick", function(e) {
      console.log(e.element)
    })

  }
}

MyBehavior.$inject = [ 'eventBus', 'modeling' ];

export default {
  __init__: [ 'myBehavior'],
  myBehavior: [ 'type', MyBehavior ]
};

