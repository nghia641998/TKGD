import React, { Component } from 'react';

class DefaultTemplates extends Component {
    
    renderCVTemplates = () => {
        const arrTemp = [...Array(4).keys()];
        const { arrDefaultTemplates, invertIsMouseOver } = this.props;

        return(
            <div id="Repeat_Grid_4">
                {
                    arrTemp.map((item) => {
                        const leftStyle = {
                            left : `${243 * (+item)}px`
                        };

                        return (
                            <div className="Repeat_Grid" 
                                style={leftStyle} 
                                key={item}
                                onMouseEnter={() => invertIsMouseOver(item)}
                                onMouseLeave={() => invertIsMouseOver(item)}>
                                <svg className="Image-CV">
                                    <pattern elementId={`Image_4_A11_Rectangle_${item}`} 
                                        id={`Image_4_A11_Rectangle_${item}_pattern`} 
                                        x="0" y="0" 
                                        width="100%" 
                                        height="100%">
                                        <image x="0" y="0" 
                                            width="100%" 
                                            height="100%" 
                                            href="/img/Image_4_A11_Rectangle_21_pattern.png" 
                                            xlinkHref="/img/Image_4_A11_Rectangle_21_pattern.png"/>
                                    </pattern>
                                    <rect fill={`url(#Image_4_A11_Rectangle_${item}_pattern)`} 
                                        stroke="rgba(209,209,209,1)" 
                                        strokeWidth="1px" 
                                        strokeLinejoin="miter" 
                                        strokeLinecap="butt" 
                                        strokeMiterlimit="4" 
                                        shapeRendering="auto" 
                                        id="Image_4" 
                                        rx="0" 
                                        ry="0" 
                                        x="0" y="0" 
                                        width="219" 
                                        height="287"/>
                                </svg>
                                {
                                    arrDefaultTemplates[(+item)] === true
                                    &&
                                    (
                                        <div>
                                            <svg className="Rectangle_115">
                                                <rect fill="rgba(48,48,48,1)" id="Rectangle_115" rx="0" ry="0" x="0" y="0" width="220" height="287"/>
                                            </svg>
                                            <svg className="Rectangle_116">
                                                <rect fill="rgba(251,251,251,1)" id="Rectangle_116" rx="8" ry="8" x="0" y="0" width="117" height="42"/>
                                            </svg>
                                            <div id="Select">
                                                <span>Select</span>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() { 
        return (  
            <>
                <svg className="Rectangle_3">
                    <rect fill="transparent" id="Rectangle_3" rx="0" ry="0" x="0" y="0" width="1187" height="419"/>
                </svg>
                <div id="Component_19___1" className="Component_19___1">
                    <a href="/">
                        <svg className="ic_trending_flat_24px" viewBox="3 8 45.206 10.896">
                            <path fill="rgba(90,189,255,1)" id="ic_trending_flat_24px" d="M 48.2059326171875 13.4481201171875 L 38.68889236450195 8 L 38.68889236450195 12.08609008789063 L 2.999999523162842 12.08609008789063 L 2.999999523162842 14.81015014648438 L 38.68889236450195 14.81015014648438 L 38.68889236450195 18.896240234375 L 48.2059326171875 13.4481201171875 Z"/>
                        </svg>
                        <div id="All">
                            <span>All</span>
                        </div>
                    </a>
                </div>
                <div id="Default_Templates">
                    <span>Default Templates</span>
                </div>
                { this.renderCVTemplates() }
            </>
        );
    }
}
 
export default DefaultTemplates;