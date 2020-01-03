import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import '../../css/cv-in-category.css';
import SortOption from '../../container/OtherCVCategories/SortOption';
import CV from '../data';

class CVInCategory extends Component {

    renderHeader = () => {
        const text = [ 'IT - Software', 'Marketing', 'Sales', 'Education', 'Banking', 'Design', 'Teacher'];

        return (
            <div className="d-flex flex-wrap justify-content-between header">
                <div className="d-flex">
                {
                    text.map((item) => {
                        return (
                            <a className="header-menu-item ml-3 mr-5" 
                                href={`/category/${item}/all`}
                                key={item}>
                                <h5><b>{item}</b></h5>
                            </a>
                        );
                    })
                }
                </div>
                <a className="header-menu-item ml-3 mr-3 text-primary" 
                                href="/category/all">
                                <h5><b>All categories</b></h5>
                            </a>
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
                <div className="my-auto">
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
            <div className="d-flex flex-wrap mb-3">
                {
                    arrFilterOption.map(item => {
                        return (
                            <div className="btn-group mr-3"
                                key={item}>
                                <button ref="test" type="button" 
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle m-1 btn-toggle-custom" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false">
                                    {item}<i className="fas fa-chevron-down ml-2 rotate-focus"/>
                                </button>
                                <div className="dropdown-menu custom-dropdown-menu" >
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`${item}_PHP`}/>
                                        <label className="custom-control-label" htmlFor={`${item}_PHP`}>PHP</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`${item}_JavaScipt`}/>
                                        <label className="custom-control-label" htmlFor={`${item}_JavaScipt`}>JavaScipt</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`${item}_React`}/>
                                        <label className="custom-control-label" htmlFor={`${item}_React`}>React</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`${item}_Angular`}/>
                                        <label className="custom-control-label" htmlFor={`${item}_Angular`}>Angular</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`${item}_VueJS`}/>
                                        <label className="custom-control-label" htmlFor={`${item}_VueJS`}>VueJS</label>
                                    </div>
                                    <div className="dropdown-divider"/>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <button className="btn btn-link custom-btn-link" 
                                            type="button">
                                            Clear All
                                        </button>
                                        <button className="btn btn-link custom-btn-link" 
                                            type="button"
                                            id="Close">
                                            Close
                                        </button>
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

        return (
            <div className="categories-body">
                <div className="mt-3 mb-3 ml-2">
                    <h4>{`Result for "${sub}" in "${category}"`}</h4>
                </div>
                { this.renderFilterOption() }
                <div className="d-flex flex-column align-items-center pdr-5">
                    <div className="w-100 pl-3 pr-3 mb-2 d-flex align-items-center justify-content-between">
                        <div className="float-left result">{numberOfCV} results</div>
                        <SortOption/>
                    </div>
                    
                    <div className="row">
                        {
                            CV.map((item) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                        key={item}>
                                        <div className="image-cv">
                                        <img alt="template" src={item}/> 
                                        <div className="template-hover">
                                            <div className="d-flex flex-column x-index-5">
                                                <Link to="/cv-detail">
                                                <button type="button" className="btn btn-select">View</button>
                                                </Link>            
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
                
            </div>
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