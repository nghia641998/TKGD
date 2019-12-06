import React from "react";
import { Link } from 'react-router-dom';

const ViewCV = () => {
  return (
    <div className="container-fluid create-cv" style={{ backgroundImage: "url('/images/bk.png')", backgroundSize: "cover" }}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-1' />
          <div className='col-sm-8 mt-4'>
            <div className='row id_1 border-bottom' style={{ height: "250px" }}>
              <div className='col-sm-4'>
                <img alt="" src="/images/user_logo.png" className='center' />
              </div>
              <div className='col-sm-8' id='id_4'>
                <input
                  type='text'
                  className='form-control'
                  id='usr'
                  readOnly
                  placeholder='Your name'
                />
                <input
                  type='text' readOnly
                  className='form-control'
                  style={{ background: "transparent", width: "300px", borderStyle: "none" }}
                  placeholder='Job title'
                />
                <input
                  type='text' readOnly
                  className='form-control'
                  style={{ background: "transparent", width: "200px", borderStyle: "none" }}
                  placeholder='Birthday'
                />
              </div>
            </div>
            <div className='row id_1'>
              <div className='col-sm-4 border-right'>
                <div className='container  border-left mt-4'>
                  <div className='skill_1'>
                    <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Skills
                    </label>
                    
                  </div>
                  <div>
                    <label>Skill 1</label>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      style={{ width: "70%" }}
                    >
                      <span className='sr-only'>70% Complete</span>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <label>Skill 2</label>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      style={{ width: "70%" }}
                    >
                      <span className='sr-only'>70% Complete</span>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <label>Skill 3</label>
                  </div>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      style={{ width: "70%" }}
                    >
                      <span className='sr-only'>70% Complete</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='container mt-4'>
                  <div className='form-group'>
                    <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Profile
                    </label>
                    <textarea
                      readOnly
                      className='form-control'
                      rows='3'
                      placeholder='About yourself...'
                      style={{ background: "transparent", border: "none" }}
                    />
                  </div>
                  <div className='form-group'>
                    <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Experience
                    </label>
                    <div>
                      <i className='fa fa-circle mr-2' aria-hidden='true' />
                      <label>Company</label>
                    </div>
                    <textarea
                      className='form-control'
                      rows='3' readOnly
                      placeholder='Description of the job...'
                      style={{ background: "transparent", border: "none" }}
                    />
                  </div>
                  <div className='form-group'>
                    <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Education
                    </label>
                    <div>
                      <i className='fa fa-circle mr-2' aria-hidden='true' />
                      <label>Education name</label>
                    </div>
                    <textarea
                      className='form-control'
                      rows='3' readOnly
                      placeholder='Description of the education...'
                      style={{ background: "transparent", border: "none" }}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='row id_1'>
              <div className='col-sm-4 border-right'>
                <div className='container mt-4 mb-4'>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {" "}
                    Contact{" "}
                  </label>
                  <div className='row skill_1'>
                    <div className='col'>
                      <div
                        style={{ height: "20px", fontSize: "13px" }}
                        className='skill_1'
                      >
                        <i
                          className='fa fa-home ml-3 mr-3'
                          aria-hidden='true'
                        />
                        Quan 6, TP. HCM
                      </div>
                      <div
                        style={{ height: "20px", fontSize: "13px" }}
                        className='skill_1'
                      >
                        <i
                          className='fa fa-phone ml-3 mr-3'
                          aria-hidden='true'
                        />
                        0969123456
                      </div>
                      <div
                        style={{ height: "20px", fontSize: "13px" }}
                        className='skill_1'
                      >
                        <i
                          className='fa fa-mobile ml-3 mr-3'
                          aria-hidden='true'
                        />
                        0969123456
                      </div>
                      <div
                        style={{ height: "20px", fontSize: "13px" }}
                        className='skill_1'
                      >
                        <i
                          className='fa fa-envelope ml-3 mr-3'
                          aria-hidden='true'
                        />
                        admin@gmail.com
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='row' style={{ marginBottom: "150px" }}/>
          </div>
          <div className='col-sm-3'>
            <div
              className='container-fluid ml-3 rounded mt-4'
              style={{ background: "white", width: "60%" }}
            >
              <label style={{ height: "20px" }} />
              <input
                className='form-control form-control-lg mb-4'
                type='text' readOnly
                value="CV name"
              />
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
                data-toggle='modal'
        data-target='#userContact'
              >
                Contact
              </button>
              <div className='modal fade' id='userContact' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='modal-center'>User Contact</div>
              <div className='modal-content-flex'>
                <div className='modal-content-icon'>
                  <i className='fas fa-user' />
                </div>
                <div className='user-contact-info'>
                  <div className='user-contact-title'>Phone:</div>
                  <div className='user-contact-value'>hidden</div>
                  <div className='user-contact-title'>Email:</div>
                  <div className='user-contact-value'>a@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


              <Link to='/cv'>
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
              >
                Make a copy
              </button>
              </Link>
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
              >
                Download PDF
              </button>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCV;
