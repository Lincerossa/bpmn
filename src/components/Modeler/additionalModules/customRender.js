import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate,
  remove as svgRemove
} from 'tiny-svg';


import { is } from 'bpmn-js/lib/util/ModelUtil';


const HIGH_PRIORITY = 1300,
      TASK_BORDER_RADIUS = 2;


class CC extends BaseRenderer {
  constructor(eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY);

    this.bpmnRenderer = bpmnRenderer;
  }

  canRender(element) {
    if (is(element, 'bpmn:SequenceFlow')){
      return false
    }
    return true
  }

  drawShape(parentNode, element) {
    const shape = this.bpmnRenderer.drawShape(parentNode, element)

    if (is(element, 'bpmn:Event')) {

    }

    if (is(element, 'bpmn:ServiceTask')) {
      const rect = drawRect(parentNode, 100, 80, TASK_BORDER_RADIUS, '#e4e');
      prependTo(rect, parentNode);
      svgRemove(shape);
      return shape;
    }

    if (is(element, 'bpmn:Task')) {
      const rect = drawRect(parentNode, 100, 80, TASK_BORDER_RADIUS, '#52B415');
      prependTo(rect, parentNode);
      svgRemove(shape);
      return shape;
    }
  }
}

CC.$inject = [ 'eventBus', 'bpmnRenderer' ];

function drawRect(parentNode, width, height, borderRadius, strokeColor) {
  const rect = svgCreate('rect');

  svgAttr(rect, {
    width: width,
    height: height,
    rx: borderRadius,
    ry: borderRadius,
    stroke: strokeColor || '#000',
    strokeWidth: 2,
    fill: '#fff'
  });

  svgAppend(parentNode, rect);

  return rect;
}


function prependTo(newNode, parentNode, siblingNode) {
  parentNode.insertBefore(newNode, siblingNode || parentNode.firstChild);
}

export default {
  __init__: [ 'customRenderer' ],
  customRenderer: [ 'type', CC ]
};