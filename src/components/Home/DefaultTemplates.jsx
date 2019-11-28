import React, { Component } from 'react';

class DefaultTemplates extends Component {
    
    renderCVTemplates = () => {
        const arrTemp = [...Array(4).keys()];

        return(
            <div className="d-flex flex-wrap justify-content-around">
                {
                    arrTemp.map((item) => {
                        return (
                            <div className="Repeat_Grid mb-3" 
                                key={item}>
                                <div className="image-cv">
                                  <img alt="template" src="/img/Image_4_A11_Rectangle_21_pattern.png"/> 
                                  <div className="template-hover">
                                      <button type="button" className="btn btn-select">
                                          <span>Select</span>
                                      </button>
                                  </div>
                                </div>                                
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() { 
        return (  
            <div className="default-template">
                <div className="default-template--header">
                  <div id="Default_Templates">
                      <span>Default Templates</span>
                  </div>
                  <a  href="script:0" className="btn p-1 mb-2">
                        <div className="d-flex flex-column">
                            <div id="All">
                                <span>All</span>
                            </div>
                            <svg className="ic_trending_flat_24px" viewBox="3 8 45.206 10.896">
                                <path fill="rgba(90,189,255,1)" id="ic_trending_flat_24px" d="M 48.2059326171875 13.4481201171875 L 38.68889236450195 8 L 38.68889236450195 12.08609008789063 L 2.999999523162842 12.08609008789063 L 2.999999523162842 14.81015014648438 L 38.68889236450195 14.81015014648438 L 38.68889236450195 18.896240234375 L 48.2059326171875 13.4481201171875 Z"/>
                            </svg>
                        </div>
                  </a>
                </div>
                { this.renderCVTemplates() }
            </div>
        );
    }
}
 
export default DefaultTemplates;