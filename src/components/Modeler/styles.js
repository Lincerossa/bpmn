import styled from 'styled-components'



export const SidebarTitle = styled.div`
  color: #6200ee;
  margin-bottom: 1rem;
  border-bottom: 1px solid;
  padding-bottom: .5rem;
  font-size: 1.5rem;
  letter-spacing: .04rem;
  text-align: center;
`


export const Sidebar = styled.div`
      position: absolute;
    top: 10rem;
    right: 1.25rem;
    min-height: 500px;
    overflow-y: scroll;
    width: 300px;
    background: #FAFAFA;
    border: solid 1px #CCC;
    border-radius: 2px;
    padding: 1rem;
`
export const Modeler = styled.div`
  height: 100vh;
  display: flex;

  .djs-minimap {
    z-index: 1 !important;
  }

  .bpp-properties-panel {
    position: absolute;
    top: 10rem;
    right: 0;
    bottom: 5rem;
    overflow: scroll;
    border: 2px solid black;
    padding: 1rem;
    background: #f9f9f9;
  }

  .bjs-powered-by{


    right: auto !important;
 
    left: 50%;
    transform: translate(50%, 0);
    bottom: 4rem !important;
  }
`;

export const Palette = styled.div``;

export const Bpmn = styled.div`
  width: 100%;
`;


export const CtaWrapperBottom = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr 1fr;
`
export const CtaWrapperTop = styled.div`
  position: absolute;
  top: 5rem;
  right: 1.25rem;
`
export const SidebarContent = styled.div`
`



export const CtaWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-gap: .5rem;
  bottom: 1.25rem;
  left: 1.25rem;
  grid-template-columns: 1fr 1fr;
`;