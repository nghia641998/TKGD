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
            <div className="d-flex flex-wrap justify-content-around">
                {
                    row.map((item1) => {
                        return col.map((item2) => {
                            return (
                                <a className="btn btn-secondary category-item mb-3" href="/" key={item2 + item1}>
                                {text[item1][item2]}
                                </a>
                            );
                        })
                    })
                }
            </div>
        );
    }

    render() { 
        return (  
            <div className="default-template mt-3">
            <div className="header--underline">
                        <span>Templates Categories</span>
                    </div>
                <div className="default-template--header flex-end">
                    
                    <a role="button" href="script:0" className="btn p-1 mb-2">
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
                { this.renderCategories() } 
            </div>
        );
    }
}
 
export default TemplatesCategories;