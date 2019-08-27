
import { isServiceTaskAndAlreadyFullOfLine } from '../../utility'


class Context {
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
    
      // non crea un task se il padre che lo genera è un ServiceTask
      if(isServiceTaskAndAlreadyFullOfLine(element)) {

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
        title: "Service Task",
        action: {
          click: appendServiceTask,
          dragstart: appendServiceTaskStart
        }
      }
    };



  }
}

Context.$inject = [
  "config",
  "contextPad",
  "create",
  "elementFactory",
  "injector"
];






class Palette {
  constructor(create, elementFactory, palette) {
    this.create = create;
    this.elementFactory = elementFactory;
    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const { create, elementFactory } = this;
    function createServiceTask(event) {
      const shape = elementFactory.createShape({ type: "bpmn:ServiceTask" });
      create.start(event, shape);
    }

    return {
      "create.service-task": {
        group: "activity",
        className: "bpmn-icon-service-task",
        title: "Service Task",
        action: {
          dragstart: createServiceTask,
          click: createServiceTask
        }
      }
    };
  }
}

Palette.$inject = ["create", "elementFactory", "palette"];





export default {
  __init__: ["ContextServiceTask", "PaletteServiceTask"],
  ContextServiceTask: ["type", Context],
  PaletteServiceTask: ["type", Palette]
};
