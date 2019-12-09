import React, { Component } from 'react';
import {Link} from "react-router-dom";

import CV from '../data';

class DefaultTemplates extends Component {
    
    renderCVTemplates = () => {

        return(
            <div className="row">
                {
                    CV.slice(0,4).map((item) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" 
                                key={item}>
                                <div className="image-cv">
                                  <img alt="template" src={item}/> 
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