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
      <div className="other-cv pt-5">
        <div className="d-flex">
          <div className="header-banner">
            <div className="header-title">Find The Perfect</div>
            <div className="header-title">Employee For Your Business</div>
            <div className="search-wrapper">
              <div id='Component_2___1' className='Component_2___1'>
                <svg className='ic_search_24px' viewBox='3 3 28.582 29.475'>
                  <path
                    fill='rgba(164,164,164,1)'
                    id='ic_search_24px'
                    d='M 23.42772483825684 21.53753662109375 L 22.13669586181641 21.53753662109375 L 21.67911338806152 21.08252334594727 C 23.28064727783203 19.1613597869873 24.24483489990234 16.6672191619873 24.24483489990234 13.95399856567383 C 24.24483489990234 7.904021263122559 19.48926162719727 3.000000238418579 13.6224193572998 3.000000238418579 C 7.755575180053711 3.000000238418579 3.000000238418579 7.904021263122559 3.000000238418579 13.95399856567383 C 3.000000238418579 20.00397491455078 7.755575180053711 24.90799903869629 13.6224193572998 24.90799903869629 C 16.25350952148438 24.90799903869629 18.67215347290039 23.91371154785156 20.53516006469727 22.26218795776367 L 20.97640037536621 22.73405265808105 L 20.97640037536621 24.06538200378418 L 29.14748764038086 32.47468566894531 L 31.58247375488281 29.96368789672852 L 23.42772483825684 21.53753662109375 Z M 13.6224193572998 21.53753662109375 C 9.553215980529785 21.53753662109375 6.268435955047607 18.15022277832031 6.268435955047607 13.95399856567383 C 6.268435955047607 9.75777530670166 9.553215980529785 6.370460510253906 13.6224193572998 6.370460510253906 C 17.69162178039551 6.370460510253906 20.97640037536621 9.75777530670166 20.97640037536621 13.95399856567383 C 20.97640037536621 18.15022277832031 17.69162178039551 21.53753662109375 13.6224193572998 21.53753662109375 Z'
                  />
                </svg>
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
              <Link to="/category/all/all" className="btn btn-search">
              Search
              </Link>
              
            </div>
            <div className="hash-tag">
              <div>Popular: </div>
              <Link to="/category/all/all" className="btn btn-outline-secondary">
                Developer
              </Link>
              <Link to="/category/all/all" className="btn btn-outline-secondary">
              React
              </Link>
              <Link to="/category/all/all" className="btn btn-outline-secondary">
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
          <div className="header-banner-right">
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
                <div className="image-cv">
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