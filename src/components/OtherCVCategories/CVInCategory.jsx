import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import ScriptTag from 'react-script-tag';

import '../../css/cv-in-category.css';
import SortOption from '../../container/OtherCVCategories/SortOption';

class CVInCategory extends Component {

    renderHeader = () => {
        const text = [ 'IT - Software', 'Marketing', 'Sales', 'Education', 'Banking', 'Design'];

        return (
            <div className="d-flex flex-wrap justify-content-center header">
                {
                    text.map((item) => {
                        return (
                            <a className="header-menu-item ml-3 mr-3" 
                                href={`/category/${item}/all`}
                                key={item}>
                                <h5><b>{item}</b></h5>
                            </a>
                        );
                    })
                }
            </div>
        );
    }

    renderPositionTags = () => {
        const { match } = this.props;
        const { category, sub } = match.params;
        const arrPosition = [
            'all', 'web developer', 'app developer', 'mobile devoloper',
            'php developer', 'react developer', 'developer'
        ]

        return (
            <div className="d-flex position-tags pt-2 pb-2">
                <div className="my-auto ml-5">
                    <h6>Suggested</h6>
                </div>
                <div className="col d-flex flex-wrap">
                    {
                        arrPosition.map((item) => {
                            return (
                                <a className={`btn btn-sm btn-outline-dark position-tag m-1 ${item === sub && 'tag-selected'}`} 
                                    href={`/category/${category}/${item}`}
                                    key={item}>
                                    {item}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    renderFilterOption = () => {
        const arrFilterOption = [ 'Education', 'Experience', 'Programming Language', '+3 More Filters']

        return(
            <div className="d-flex flex-wrap ml-5 mb-3">
                {
                    arrFilterOption.map(item => {
                        return (
                            <div className="btn-group"
                                key={item}>
                                <button type="button" 
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle m-1 btn-toggle-custom" 
                                    data-toggle="dropdown" >
                                    {item}<i className="fas fa-chevron-down ml-2 rotate-focus"/>
                                </button>
                                <div className="dropdown-menu" 
                                    role="button"
                                    onClick={(event) => event.stopPropagation()}>
                                    <form >
                                        <div className="pl-1">
                                            <input className="" type="checkbox" id={item}/>
                                            <label htmlFor={item}>test test</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderPageNumerNav = () => {
        const { selectedPageNumber, setSelectedPageNumber }  = this.props;
        const arrPageNumber = [...Array(4).keys()];
        return (
            <div className="d-flex justify-content-end mb-5 mt-4 w-100">
                {
                    arrPageNumber.map((item) => {
                        return (
                            <a className={`btn-page-number ${item === selectedPageNumber && 'btn-page-number-selected'}`} 
                                href="script:0"
                                role="button"
                                onClick={() => setSelectedPageNumber(item)}
                                key={item}>
                                    {item + 1}
                            </a>
                        );
                    })
                }
                <a className="btn-page-number btn-page-number-end" 
                    href="script:0">
                        &gt;
                </a>
            </div>
        );
    }

    renderListCV = () => {
        const { match, numberOfCV } = this.props;
        const { category, sub }= match.params;
        const templates = [...Array(10).keys()];
        return (
            <>
                <div className="ml-5 mt-3">
                    <h4>{`Result for "${sub}" in "${category}"`}</h4>
                </div>
                { this.renderFilterOption() }
                <div className="d-flex flex-column align-items-center pl-5 pr-5">
                    <div className="w-100">
                        <div className="float-left result">{numberOfCV} results</div>
                        <SortOption/>
                    </div>
                    
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            templates.map((item) => {
                                return (
                                    <div className="Repeat_Grid m-2"
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
                    { this.renderPageNumerNav() }
                </div>
                
            </>
        );
    }

    render() {
        return (
            <>
                <div className="Other_CV_s___Categories">
                    { this.renderHeader() }
                    { this.renderPositionTags() }
                    { this.renderListCV() }
                </div>
                {/* <ScriptTag src="/js/cv-in-category.js" type="text/javascript"/> */}
            </>
        );
    }
}

export default withRouter(CVInCategory);