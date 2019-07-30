import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import downloadjs from "downloadjs";
import axios from "axios";
import BpmnModeler from "bpmn-js/lib/Modeler";
import minimapModule from "diagram-js-minimap";
import ZoomScrollModule from "diagram-js/lib/navigation/zoomscroll";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import customControlsModule from "./customControlsModule";




function download(content, fileName, mimeType) {
  return downloadjs(
    "data:" + mimeType + ";charset=UTF-8," + encodeURIComponent(content),
    fileName,
    mimeType
  );
}




function App() {
  const [modelerIstance, setModelerIstance] = useState(null);

  const myBpmn = useRef();
  const myPalette = useRef();

  function handleDownload() {
    modelerIstance.saveXML({ format: true }, function(err, xml) {
      if (xml) {
        download(xml, "diagram.bpmn", "application/xml");
      }
    });
  }

  function handleSaveSvg() {
    modelerIstance.saveSVG({}, function(err, svg) {
      download(svg, "diagram.svg", "application/xml");
    });
  }

  useEffect(() => {
    if (!myBpmn || !myBpmn.current || !myPalette || !myPalette.current) return;

    const modeler = new BpmnModeler({
      container: myBpmn.current,
      additionalModules: [
        customControlsModule,
        minimapModule,
        ZoomScrollModule
      ],

      // bpmnRenderer: {
      //    defaultFillColor: "#333",
      //     defaultStrokeColor: "#fff"
      //    },
      propertiesPanel: {
        parent: myPalette.current
      }
    });

    var eventBus = modeler.get("eventBus");

    // you may hook into any of the following events
    var events = [
      "element.hover",
      "element.out",
      "element.click",
      "element.dblclick",
      "element.mousedown",
      "element.mouseup"
    ];

    events.forEach(function(event) {
      eventBus.on(event, function(e) {
        // e.element = the model element
        // e.gfx = the graphical element
        // console.log(event, "on", e.element.id);
      });
    });
    var elements = document.getElementsByClassName("entry");
    Array.from(elements).map((e, index) => {
      if (
        index !== 3 &&
        index !== 4 &&
        index !== 5 &&
        index !== 6 &&
        index !== 7 &&
        index !== 8 &&
        index !== 10 &&
        index !== 13
      ) {
        e.parentNode.removeChild(e);
      }
    });
    axios
      .get(
        "https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn"
      )
      .then(data => {
        modeler.importXML(data.data, function(err) {
          if (err) {
            console.log("error rendering", err);
          }
        });
        setModelerIstance(modeler);
      });

    return () => modeler.destroy();
  }, [myBpmn, myPalette]);

  return (
    <React.Fragment>
      <Modeler>
        <Bpmn ref={myBpmn} />
        <Palette ref={myPalette} />
      </Modeler>
      <Button onClick={handleDownload}>download</Button>
      <Link onClick={handleSaveSvg}>crea svg</Link>
    </React.Fragment>
  );
}

const Modeler = styled.div`
  border: 5px solid black;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Palette = styled.div`
  border: 1px solid violet;
`;
const Bpmn = styled.div`
  border: 1px solid red;
  width: 100vw;
`;

const Button = styled.button`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  height: 4rem;
  font-size: 2rem;
`;

const Link = styled.a`
  position: absolute;
  bottom: 10rem;
  right: 5rem;
  height: 4rem;
  font-size: 2rem;
`;

export default App