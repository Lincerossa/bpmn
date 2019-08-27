
export const isServiceTaskAndAlreadyFullOfLine = e => e.type === "bpmn:ServiceTask" &&
  e.businessObject &&
  e.businessObject.outgoing &&
  e.businessObject.outgoing.length > 0

export const isServiceTaskAndAlreadyFullOfOutgoingLine = e => e.type === "bpmn:ServiceTask" &&
  e.businessObject &&
  e.businessObject.incoming &&
  e.businessObject.incoming.length > 0

export const isEventStartAndAlreadyOneIsPlaced = e => {
  if(!e.target) return false
  return e.shape.type === "bpmn:StartEvent" && e.target.children.find(e => e.type === "bpmn:StartEvent")
}

export const isSequenceFlow = e => e.type === "bpmn:SequenceFlow"
export const isLabel = e => e.type === "label"



export const getListOfElements = e => Array.from(document.querySelectorAll(e))
