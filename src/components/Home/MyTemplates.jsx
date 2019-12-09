import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CV from '../data';

class MyTemplates extends Component {

  renderTemplates = () => {

    return (
      <div className="row">
        {
          CV.slice(4,12).map((item) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={item}>
                <div className="image-cv">
                  <img alt="template" src={item} />
                  <div className="template-hover">
                    <div className="d-flex flex-column x-index-5">

                      <Link to="/cv">
                        <button type="button" className="btn btn-select"> Select </button>
                      </Link>
                      <Link to="/template">
                        <button type="button" className="btn btn-select mt-3"> Edit </button>
                      </Link>

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
      <div className="d-flex justify-content-end mb-5 mt-4">
        {
          arrPageNumber.map((item) => {
            return (
              <a key={item} className={`btn-page-number ${item === selectedPage && 'btn-page-number-selected'}`}
                href="script:0">
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


  render() {
    return (
      <div className="default-template mt-3">
        <div className="header--underline">
          <span>My Templates</span>
        </div>
        <div className="default-template--header flex-end">
          <Link to="/cv">
          <button type="button" className="btn btn--add">Add</button>
          </Link>
          
        </div>
        {this.renderTemplates()}
        {this.renderPageNumerNav()}
      </div>
    );
  }

}

export default MyTemplates;