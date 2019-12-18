import React from 'react';
import {Link} from 'react-router-dom';
import './OtherCV.scss';
import CV from '../data';

class OtherCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowModal: false
    }
  }

  showModal() {
    this.setState({
      isShowModal: true
    });
  }

  hideModal() {
    this.setState({
      isShowModal: false
    });
  }



  renderHeader() {

    const { isShowModal } = this.state;

    return (
      <div className="other-cv pt-5 col-12">
        <div className="d-flex">
          <div className="header-banner">
            <div className="header-title">Find The Perfect</div>
            <div className="header-title">Employee For Your Business</div>
            <div className="row col-12 mt-2">
              <div className='search-control min-width col-8'>
                <i className="fas fa-search ml-2"/>
                <div id='Type_name_template_here____'>
                  <input
                    className='custom-input-text'
                    type='text'
                    placeholder='Try "Web developer"'
                    onChange={() => { this.showModal() }}
                    onBlur={() => { this.hideModal() }}
                  />
                </div>
              </div>
              <Link to="/category/all/all" className="btn btn-search col-2">
                Search
              </Link>
              
            </div>
            <div className="d-flex flex-wrap align-items-center mt-sm-2 hash-tag">
              <div className='mr-2'>Popular: </div>
              <Link to="/category/all/all" className="btn btn-outline-secondary mr-1 mt-1">
                Developer
              </Link>
              <Link to="/category/all/all" className="btn btn-outline-secondary mr-1 mt-1">
              React
              </Link>
              <Link to="/category/all/all" className="btn btn-outline-secondary mr-1 mt-1">
              Angular
              </Link>
            </div>
            <div className={isShowModal ? 'search-cv active' : 'search-cv'}>
              <div className='modal-body add-title-modal'>
                <div className='modal-icon-wrapper'>
                  <i className='fas fa-desktop' />
                </div>
                <div className="list-title-cv">
                  <div>Software Developer</div>
                  <div><b>Web Developer</b></div>
                  <div>Front-end <b>Web Developer</b></div>
                  <div>Angular <b>Web Developer</b></div>
                  <div>React <b>Web Developer</b></div>
                  <div>VueJS <b>Web Developer</b></div>
                </div>
              </div>
              <div>
                Search for <b>&quot;Web devloper&quot;</b>
              </div>
            </div>
          </div>
          <div className="header-banner-right d-none  d-lg-block col-lg-3">
            <img src="/images/exampleCV.png" alt="example cv" />
            <div className="d-flex stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p>Jason Martin, <b>Graphic Designer</b></p>
          </div>
        </div>
      </div>
    );
  }

  renderListCV() {

    return (
      <div className="list-cv">
        <div className="list-cv-header">
          <div className="list-cv-title">Most popular
                    </div>
          <Link to="/category/all/all" className="list-cv-more">See More &gt;
                    </Link>
        </div>
        <div className="row">
          {CV.map((item, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                <div className="image-cv mx-auto  my-auto">
                  <img alt="template" src={item} />
                  <div className="template-hover">
                    <div className="d-flex flex-column x-index-5">
                      <Link to="cv-detail">
                      <button type="button" className="btn btn-select">View</button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.renderPageNumerNav()}
      </div>
    );

  }

  renderPageNumerNav = () => {
    const selectedPage = 0;
    const arrPageNumber = new Array(4).fill(1);
    return (
      <div className="d-flex justify-content-end mb-5 mt-4">
        {
          arrPageNumber.map((item, index) => {
            return (
              <a key={index} className={`btn-page-number ${index === selectedPage && 'btn-page-number-selected'}`}
                href="script:0">
                {index + 1}
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
      <div className="OtherCV">
        {this.renderHeader()}
        {this.renderListCV()}
      </div>
    );
  }
}

export default OtherCV;