export default class CustomContextPad {
  constructor(config, contextPad, create, elementFactory, injector) {
    this.create = create;
    this.elementFactory = elementFactory;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get("autoPlace", false);
    }
    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    const { autoPlace, create, elementFactory } = this;

    

    function appendServiceTask(event, element) {
    
      console.log(element)
      if(element && element.type === "bpmn:Task" && element.businessObject && element.businessObject.outgoing && element.businessObject.outgoing.length > 0) {

        console.log("da bloccare")
        return
      }
     
      autoPlace
        ? autoPlace.append(element, elementFactory.createShape({ type: "bpmn:ServiceTask" }))
        : appendServiceTaskStart(event, element)

    }

    function appendServiceTaskStart(event) {
      const shape = elementFactory.createShape({ type: "bpmn:ServiceTask" });
      create.start(event, shape, element);
    }

    return {
      "append.service-task": {
        group: "model",
        className: "bpmn-icon-service-task",
        title: "cacca",
        action: {
          click: appendServiceTask,
          dragstart: appendServiceTaskStart
        }
      }
    };
  }
}

CustomContextPad.$inject = [
  "config",
  "contextPad",
  "create",
  "elementFactory",
  "injector"
];
