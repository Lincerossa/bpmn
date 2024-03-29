import React, { useRef, useEffect, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "diagram-js-minimap/assets/diagram-js-minimap.css";



import * as S from './styles'
import serviceTask from "./additionalModules/modules/serviceTask";
import customRender from "./additionalModules/customRender";
import customEvents from "./additionalModules/customEvents";
import customRules from "./additionalModules/customRules"
import { getListOfElements } from './utility'
import Button from '../Button'
import Draggable from '../Draggable'
import download from '../../utility/download'
import FormFieldsGenerator from "../FormFieldsGenerator"


const defaultBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" targetNamespace="" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <collaboration id="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
  </collaboration>
  <bpmndi:BPMNDiagram id="sid-74620812-92c4-44e5-949c-aa47393d3830">
    <bpmndi:BPMNPlane id="sid-cdcae759-2af7-4a6d-bd02-53f3352a731d" bpmnElement="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
      <bpmndi:BPMNShape id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui" bpmnElement="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" isHorizontal="true">
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`


export default ({ data, createModel, editModel }) => {
  const [modelerIstance, setModelerIstance] = useState();
  const [ additionalInfo, setSetAdditionalInfo ] = useState(data && data.additionalInfo)
  const [ activeElementID, setActiveElementID ] = useState(null)
  const [ isSidebarOpen, openSidebar ] = useState(null)

  const myBpmn = useRef();
  const myPalette = useRef();

  function handleDownload() {
    modelerIstance.saveXML({ format: true }, function(err, xml) {
      if (xml) {
        download(xml, "diagram.bpmn", "application/xml");
      }
    });
  }

  function handleDownloadSvg() {
    modelerIstance.saveSVG({}, function(err, svg) {
      if(svg){
        download(svg, "diagram.svg", "application/xml");
      }
    });
  }

  function handleInstantiateBpmn(){
    const bpmnData = ( data && data.bpmn) || defaultBpmn
    
    const modeler = new BpmnModeler({
      container: myBpmn.current,
      additionalModules: [
        serviceTask,
        //minimapModule,
        customRender,
        customEvents,
        customRules,
      ],
      bpmnRenderer: {
      defaultFillColor: "#f9f9f9",
        defaultStrokeColor: "black"
      },
      propertiesPanel: {
        parent: myPalette.current
      }
    });

    if(bpmnData){
      modeler.importXML(bpmnData, function(err) {
        if (err) {
          console.log("error rendering", err);
        }
      });
    }
    
    
    getListOfElements(".djs-palette-entries .entry:not(.bpmn-icon-hand-tool):not(.bpmn-icon-space-tool):not(.bpmn-icon-connection-multi):not(.bpmn-icon-start-event-none):not(.bpmn-icon-intermediate-event-none):not(.bpmn-icon-end-event-none):not(.bpmn-icon-gateway-none):not(.bpmn-icon-task):not(.bpmn-icon-serviec-task):not(.bpmn-icon-participant):not(.bpmn-icon-service-task)").forEach((elem, index) => {
       elem.parentNode.removeChild(elem);
    })

    var eventBus = modeler.get('eventBus');

    eventBus.on('element.click', () => {

      const activeElements = modeler.get('selection').get()
      const newActiveElementID = activeElements[0] && activeElements[0].id
      if(activeElementID !== newActiveElementID){
        openSidebar(false)
      }
      setActiveElementID(newActiveElementID)
    })
  
    setModelerIstance(modeler)
  }

  useEffect(() => {
    if (myBpmn && myBpmn.current && myPalette && myPalette.current){
      handleInstantiateBpmn()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myBpmn, myPalette]);

  function handleZoom(zoom){
    modelerIstance && modelerIstance.get('zoomScroll').stepZoom(zoom)
  }

  function handleResetData(){
    modelerIstance.destroy()
    handleInstantiateBpmn()
  }

  function handleCreateModel(){
    modelerIstance.saveXML({ format: true }, function(err, xml) {
      if (xml) {
        createModel({bpmn: xml, additionalInfo})
      }
    });
  }
  function handleEditModel(){
    modelerIstance.saveXML({ format: true }, function(err, xml) {
      if (xml) {
        editModel({bpmn: xml, additionalInfo})
      }
    });
  }


  function handleSubmit(inputs) {

    const newAdditionalInfo = {
      ...additionalInfo,
      [activeElementID]: inputs
    }
    setSetAdditionalInfo(newAdditionalInfo)
    openSidebar(false)
  }

  return (
    <React.Fragment>
      <S.Modeler>
        <S.Bpmn ref={myBpmn} />
        <S.Palette ref={myPalette} />
      </S.Modeler>
      <S.CtaWrapper>
        <Button icon="MdZoomIn" onClick={() => handleZoom(1)}>Zoom In</Button>
        <Button icon="MdZoomOut" onClick={() => handleZoom(-1)}>Zoom Out</Button>
        <Button full icon="MdImage" onClick={handleDownloadSvg}>Download Svg</Button>
        <Button full icon="MdArchive" onClick={handleDownload}>Download Bmpn</Button>
      </S.CtaWrapper>
      <S.CtaWrapperBottom>
        <Button  icon="MdClear" onClick={handleResetData}>Reset</Button>
        {createModel && <Button full icon="MdAdd" onClick={handleCreateModel}>Create Model</Button>}
        {editModel && <Button full icon="MdEdit"  onClick={handleEditModel}>Edit Model</Button>}
      </S.CtaWrapperBottom>
      {activeElementID && <S.CtaWrapperTop>
        <Button full icon="MdBlurOn" onClick={() => openSidebar(true)}>{activeElementID}</Button>
      </S.CtaWrapperTop>}
    
      <Draggable mask footer={[]} onCancel={() => openSidebar(false)} visible={isSidebarOpen} title={activeElementID} onClose={() => openSidebar(false)}>
          <S.SidebarContent>
          
          <FormFieldsGenerator
            onSubmit={handleSubmit}
            initialInputs={(additionalInfo && additionalInfo[activeElementID]) || []}
          />
          </S.SidebarContent>
        </Draggable>
      )}

    </React.Fragment>
  );
}


