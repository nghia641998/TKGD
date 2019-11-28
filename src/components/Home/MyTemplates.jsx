import React, { Component } from 'react';

class MyTemplates extends Component {

    renderTemplates = () => {
        const templates = [...Array(8).keys()]
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {
                    templates.map((item) => {
                        return (
                            <div className="Repeat_Grid mb-3"
                                key={item}>
                                <div className="image-cv">
                                  <img alt="template" src="/img/Image_4_A11_Rectangle_21_pattern.png"/> 
                                  <div className="template-hover">
                                      <div className="d-flex flex-column x-index-5">
                                        <button type="button" className="btn btn-select">Select</button>
                                        <button type="button" className="btn btn-select mt-3">Edit</button>
                                      </div>
                                  </div>
                                </div>   
                            </div>
                        );
                    })
                }
            </div>
        );
    }



    renderPageNumerNav = () => {
        const { selectedPage } = this.props;
        const arrPageNumber = [...Array(4).keys()];
        return (
            <div className="d-flex justify-content-end mb-3">
                {
                    arrPageNumber.map((item) => {
                        return (
                            <a className={`btn-page-number ${item === selectedPage && 'btn-page-number-selected'}`} 
                                href="script:0">
                                    {item + 1}
                            </a>
                        );
                    })
                }
                <a className="btn-page-number btn-page-number-end" 
                    href="script:0">
                        >
                </a>
            </div>
        );
    }
    

    render() {
        return (
            <div className="default-template mt-3">
                <div className="default-template--header">
                    <div id="Default_Templates">
                        <span>My Templates</span>
                    </div>
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
                { this.renderTemplates() }
                { this.renderPageNumerNav() }
            </div>
        );
    }
    
}

export default MyTemplates;