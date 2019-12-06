import React from "react";
import {Link} from 'react-router-dom';
import './TemplateCategories.scss';
import history from '../../util/history';

const TemplateCategories = () => {

  function renderListTemplate() {
    const list = new Array(12);
    list.fill(1);
    return (
      <div className="container">
        <div className="row  ml-3 mb-4">
          {
            list.map((_, index) => {
              return (
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="containerCV" style={{ width: "220px", backgroundColor: "black" }}>
                    <img src="/img/Image_4_A11_Rectangle_21_pattern.png" alt="" className="image" />
                    <div className="middle">
                      <div>
                        <button type="button" className="btn btn-outline-secondary mybtn" data-toggle="modal" data-target=".bd-example-modal-lg">Preview</button>
                      </div>
                      <Link to='/cv'>
                        <button type="button" className="btn btn-outline-secondary mybtn">Select</button>
                      </Link>
                      <Link to='/template'>
                        <button type="button" className="btn btn-outline-secondary mybtn">Duplicate</button>
                      </Link>

                    </div>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>
    )
  }


  return (
    <div className="TemplateCategories pt-5" >
      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Template Name</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/CVpreview.png" alt="alt" />
              </div>

            </div>
            <div className="modal-footer">
              
              <button onClick={() => history.push('/cv')} data-dismiss="modal" type="button" className="btn btn-primary">Use this template</button>
              
              <button onClick={() => history.push('/template')} data-dismiss="modal" type="button" className="btn btn-secondary">Duplicate template</button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", marginLeft: "3%", marginRight: "3%" }}>
            <span style={{ display: "inline-flex" }}>
              <h5 style={{ fontWeight: "normal", fontStyle: "italic" }}>1-9 of over 23 results for</h5>
              <h5>&quot;IT - Software&quot;</h5>
            </span>
            <span style={{ display: "inline-flex" }}>
              <h5 style={{ fontWeight: "normal", fontStyle: "italic", marginRight: "20px" }}>Sort by</h5>
              <h5>&quot;IT - Software&quot;</h5>
              <div className="btn-group">
                <button type="button" data-toggle="dropdown" style={{ background: "transparent", border: "none", outline: "none" }} className="needHover">
                  <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">Name</button>
                  <button className="dropdown-item" type="button">Publication date</button>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-3">
            <div className="container-fluid">
              <div className="list-group">
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>All (63)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none", fontWeight: "bold" }}>IT - Software (23)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>Marketing (5)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>Sales (5)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>Education (10)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>Banking (10)</a>
                <a href="script:0" className="list-group-item list-group-item-action" style={{ border: "none" }}>Design (10)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-9 border-left">
            {renderListTemplate()}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="script:0" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="script:0">1</a></li>
                <li className="page-item"><a className="page-link" href="script:0">2</a></li>
                <li className="page-item"><a className="page-link" href="script:0">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="script:0">Next</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TemplateCategories;