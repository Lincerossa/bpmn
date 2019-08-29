import inherits from 'inherits';

import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import { isServiceTaskAndAlreadyFullOfLine, isServiceTaskAndAlreadyFullOfOutgoingLine, isEventStartAndAlreadyOneIsPlaced } from '../utility'

function CustomRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(CustomRules, RuleProvider);

CustomRules.$inject = [ 'eventBus' ];

var HIGH_PRIORITY = 1500;

CustomRules.prototype.init = function() {
 



  this.addRule('shape.create',HIGH_PRIORITY, function(context) {
    const { source, target, hints = {},   } = context
    const { targetAttach } = hints



    console.log(context)
    if(isEventStartAndAlreadyOneIsPlaced(context) 
      || (context.shape.type !== 'bpmn:Participant' && context.target.type === 'bpmn:Collaboration')
      || (context.shape.type === 'bpmn:Participant' && context.target.type === 'bpmn:Participant')
      
      ){
      return false
    }
    return true
  });


  // this.addRule('elements.move',HIGH_PRIORITY, function(context) {
 
  //   return true
  // });

 
  this.addRule('connection.create', HIGH_PRIORITY, function(context) {

    const { source, target, hints = {},   } = context
    const { targetAttach } = hints
    
    
    if(isServiceTaskAndAlreadyFullOfLine(source) || (target && isServiceTaskAndAlreadyFullOfOutgoingLine(target)) ){
      return false
    }

    if (targetAttach) {
      return false;
    }
  });

  this.addRule('connection.reconnectStart', HIGH_PRIORITY, function(context) {
    return false
  });

  this.addRule('connection.updateWaypoints',HIGH_PRIORITY, function(context) {

    return {
      type: context.connection.type
    };
  });

};

export default {
  __init__: [ 'customRules' ],
  customRules: [ 'type', CustomRules ]
};