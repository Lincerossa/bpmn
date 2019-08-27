import React, { useEffect, useRef } from 'react'
import {MDCTabBar} from '@material/tab-bar';
import Wrapper from '../Wrapper'
import "@material/tab-bar/dist/mdc.tab-bar.css"
import "@material/tab-scroller/dist/mdc.tab-scroller.css"
import "@material/tab-indicator/dist/mdc.tab-indicator.css"
import "@material/tab/dist/mdc.tab.css"


export default ({children, items, activeTab, history}) => {

  const myTabBar = useRef()
  
  useEffect(() => {
    if(myTabBar){
      const c = new MDCTabBar(myTabBar.current);
      c.foundation_.adapter_.setActiveTab(activeTab)
    }
  }, [activeTab, myTabBar])


  return(
    <React.Fragment>
      <Wrapper size="big">
        <div className="mdc-tab-bar" role="tablist" ref={myTabBar}>
          <div className="mdc-tab-scroller">
            <div className="mdc-tab-scroller__scroll-area">
              <div className="mdc-tab-scroller__scroll-content">
                {

                  items &&
                  items.map((item, index) => (
                    <button key={item.pathname} className="mdc-tab" role="tab" aria-selected="true" tabIndex={index} onClick={() => history.push(item.pathname)}>
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__icon material-icons" aria-hidden="true">{item.label}</span>
                      </span>
                      <span className={`mdc-tab-indicator`}>
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                      <span className="mdc-tab__ripple"></span>
                  </button>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    
      {children}
    </React.Fragment>
  )
}