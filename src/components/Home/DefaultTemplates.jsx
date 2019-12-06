import React, { Component } from 'react';
import {Link} from "react-router-dom";

class DefaultTemplates extends Component {
    
    renderCVTemplates = () => {
        const arrTemp = [...Array(4).keys()];

        return(
            <div className="d-flex flex-wrap justify-content-start">
                {
                    arrTemp.map((item) => {
                        return (
                            <div className="Repeat_Grid mb-3" 
                                key={item}>
                                <div className="image-cv">
                                  <img alt="template" src="/img/Image_4_A11_Rectangle_21_pattern.png"/> 
                                  <div className="template-hover">
                                      
                                          <Link to="/cv">
                                          <button type="button" className="btn btn-select"><span>Select</span> </button>
                                          </Link>
                                          
                                     
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
            <div className="header--underline">
                    <span>Default Templates</span>
                    </div>
                <div className="default-template--header flex-end">
                  <Link to="template-category"  href="script:0" className="btn see-more">
                       See More &gt;
                  </Link>
                </div>
                { this.renderCVTemplates() }
            </div>
        );
    }
}
 
export default DefaultTemplates;