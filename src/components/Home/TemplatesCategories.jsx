import React, { Component } from 'react';

class TemplatesCategories extends Component {
    test = {  }

    renderCategories = () => {
        const row = [...Array(2).keys()];
        const col = [...Array(3).keys()];
        const text = [
            [ 'IT - Software', 'Marketing', 'Sales'],
            [ 'Education', 'Banking', 'Design']
        ];

        return (
            <>
                {
                    row.map((item1) => {
                        return col.map((item2) => {
                            const svgStyle = {
                                left: `${165 + 350 * (+item2)}px`,
                                top: `${1312 + 127 * item1}px`
                            }
                            const textStyle = {
                                left: `${165 + 350 * (+item2)}px`,
                                top: `${1334 + 127 * item1}px`
                            }
                            return (
                                <a href="/" key={item2 + item1}>
                                    <svg className="Rectangle_1098" style={svgStyle}>
                                        <rect fill="rgba(222,222,222,1)" 
                                            id="Rectangle_1098" 
                                            rx="8" 
                                            ry="8" 
                                            x="0" y="0" 
                                            width="250" 
                                            height="70"/>
                                           
                                    </svg>
                                    <div id="IT___Software" style={textStyle}>
                                        <span>{text[item1][item2]}</span>
                                    </div> 
                                </a>
                            );
                        })
                    })
                }
            </>
        );
    }

    render() { 
        return (  
            <>
                <div id="Templates_Categories">
                    <span>Templates Categories</span>
                </div>
                <svg className="Line_11" 
                    viewBox="0 0 383 2">
                    <path fill="transparent" 
                        stroke="rgba(112,112,112,1)" 
                        strokeWidth="1px" 
                        strokeLinejoin="miter" 
                        strokeLinecap="butt" 
                        strokeMiterlimit="4" 
                        shapeRendering="auto" 
                        id="Line_11" 
                        d="M 0 0 L 383 2"/>
                </svg>
                <div id="Component_19___2" 
                    className="Component_19___2">
                    <a href="/">
                        <svg className="ic_trending_flat_24px_A11_Path_4" 
                            viewBox="3 8 45.206 10.896">
                            <path fill="rgba(90,189,255,1)" 
                                id="ic_trending_flat_24px_A11_Path_4" 
                                d="M 48.2059326171875 13.4481201171875 L 38.68889236450195 8 L 38.68889236450195 12.08609008789063 L 2.999999523162842 12.08609008789063 L 2.999999523162842 14.81015014648438 L 38.68889236450195 14.81015014648438 L 38.68889236450195 18.896240234375 L 48.2059326171875 13.4481201171875 Z"/>
                        </svg>
                        <div id="All_A11_Text_19">
                            <span>All</span>
                        </div>
                    </a>
                </div>
                { this.renderCategories() }
            </>
        );
    }
}
 
export default TemplatesCategories;