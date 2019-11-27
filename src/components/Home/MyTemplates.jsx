import React, { Component } from 'react';

class MyTemplates extends Component {

    renderTemplates = () => {
        const { arrMyTemplates, invertIsMouseOver } = this.props;
        const templates = [...Array(8).keys()]
        return (
            <>
            <div id="Repeat_Grid_5">
                {
                    templates.map(item => {
                        return (
                            <div id={`Repeat_Grid_5_${item}`} 
                                key={item}
                                onMouseEnter={() => invertIsMouseOver(item)}
                                onMouseLeave={() => invertIsMouseOver(item)}>
                                <svg className="Image-CV">
                                    <pattern elementId={`Image_5_A11_Rectangle_${item}`} 
                                        id={`Image_5_A11_Rectangle_${item}_pattern`} 
                                        x="0" y="0"
                                        width="100%" height="100%">
                                        <image x="0" y="0" 
                                            width="100%" height="100%" 
                                            href="/img/Image_4_A11_Rectangle_21_pattern.png" 
                                            xlinkHref="/img/Image_4_A11_Rectangle_21_pattern.png"/>
                                    </pattern>
                                    <rect fill={`url(#Image_5_A11_Rectangle_${item}_pattern)`} 
                                        stroke="rgba(209,209,209,1)" 
                                        strokeWidth="1px" 
                                        strokeLinejoin="miter" 
                                        strokeLinecap="butt" 
                                        strokeMiterlimit="4" 
                                        shapeRendering="auto" 
                                        id="Image_5" 
                                        rx="0" ry="0" 
                                        x="0" y="0" 
                                        width="219" height="287"/>
                                </svg>
                                {
                                    arrMyTemplates[item] === true
                                    &&
                                    (
                                        <div id="Component_3___18" 
                                            className="Component_3___18">
                                            <svg className="Rectangle_115_A11_Rectangle_46">
                                                <rect fill="rgba(48,48,48,1)" 
                                                    id="Rectangle_115_A11_Rectangle_46" 
                                                    rx="0" ry="0" 
                                                    x="0" y="0" 
                                                    width="220" height="286"/>
                                            </svg>
                                            <a href="script:0">
                                                <svg className="Rectangle_116_A11_Rectangle_47">
                                                    <rect fill="rgba(251,251,251,1)" 
                                                        id="Rectangle_116_A11_Rectangle_47" 
                                                        rx="8" ry="8" 
                                                        x="0" y="0" 
                                                        width="117" height="42"/>
                                                </svg>
                                                <div id="Select_A11_Text_41">
                                                    <span>Select</span>
                                                </div>
                                            </a>
                                            <a href="script:0">
                                                <svg className="Rectangle_1152">
                                                    <rect fill="rgba(251,251,251,1)" 
                                                        id="Rectangle_1152" 
                                                        rx="8" ry="8" 
                                                        x="0" y="0" 
                                                        width="117" height="42"/>
                                                </svg>
                                                <div id="Edit">
                                                    <span>Edit</span>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        );
                    })
                }
            </div>
            </>
        );
    }



    renderPageNumerNav = () => {
        const { selectedPage } = this.props;
        console.log(selectedPage);
        const arrPageNumber = [...Array(4).keys()];
        return (
            <>
                {
                    arrPageNumber.map((item) => {
                        return (
                            <a key={item}
                                href="cript:0">
                                <svg className={`Rectangle_114${item}`} 
                                    viewBox="0 0 40 40">
                                    <path fill="rgba(255,255,255,1)" 
                                        stroke="rgba(212,212,212,1)" 
                                        strokeWidth="1px" 
                                        strokeLinejoin="miter" 
                                        strokeLinecap="butt" 
                                        strokeMiterlimit="4" 
                                        shapeRendering="auto" 
                                        id="Path_46" 
                                        d="M 0 0 L 40 0 L 40 40 L 0 40 L 0 20.625 L 0 0 Z"/>
                                </svg>
                                {
                                    selectedPage === item 
                                    &&
                                    (
                                        <svg className={`Rectangle_114${item}`}>
                                            <rect fill="rgba(74,71,71,1)" 
                                                id={`Rectangle_114${item}`} 
                                                rx="0" ry="0" 
                                                x="0" y="0" 
                                                width="40" height="40"/>
                                        </svg>
                                    )
                                }
                                <div id={`ID${item + 1}`}>
                                    <span>{item + 1}</span>
                                </div>
                            </a>
                        );
                    })
                }
                <a href="script:0">
                    <svg className="Path_46" 
                        viewBox="0 0 40 40">
                        <path fill="rgba(255,255,255,1)" 
                            stroke="rgba(212,212,212,1)" 
                            strokeWidth="1px" 
                            strokeLinejoin="miter" 
                            strokeLinecap="butt" 
                            strokeMiterlimit="4" 
                            shapeRendering="auto" 
                            id="Path_46" 
                            d="M 0 0 L 40 0 L 40 40 L 0 40 L 0 20.625 L 0 0 Z"/>
                    </svg>
                    <div id="_">
                        <span>&gt;</span>
                    </div>
                </a>
            </>
        );
    }

    render() {
        return (
            <>
                <div id="My_template_s">
                    <span>My templates</span>
                </div>
                <svg className="Line_11_A11_Line_2" 
                    viewBox="0 0 331 2">
                    <path fill="transparent" 
                        stroke="rgba(112,112,112,1)" 
                        strokeWidth="1px" 
                        strokeLinejoin="miter" 
                        strokeLinecap="butt" 
                        strokeMiterlimit="4" 
                        shapeRendering="auto" 
                        id="Line_11_A11_Line_2" d="M 0 2 L 331 0"/>
                </svg>
                
                <a href="script:0">
                    <svg className="Rectangle_1148">
                        <rect fill="rgba(90,189,255,1)" 
                            id="Rectangle_1148" 
                            rx="8" ry="8" 
                            x="0" y="0" width="91" height="55"/>
                    </svg>
                    <div id="Add_">
                        <span>Add </span>
                    </div>
                </a>

                { 
                    this.renderTemplates()
                }
                {
                    this.renderPageNumerNav()
                }
            </>
        );
    }
    
}

export default MyTemplates;