import React from "react";

const Modal = () => {
  return (
    <div>
      <button
        type='button'
        className='btn btn-info btn-lg'
        data-toggle='modal'
        data-target='#addWidget'
      >
        Add new widget
      </button>
      <div className='modal fade' id='addWidget' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
              <h4 className='modal-title'>ADD NEW WIDGET</h4>
            </div>
            <div className='modal-body'>
              <div className='modal-body-title'>Basic</div>
              <div className='modal-body-content'>
                <button type="button" className='btn'>Date</button>
                <button type="button" className='btn'>Image</button>
                <button type="button" className='btn'>Profile</button>
                <button type="button" className='btn'>Name</button>
                <button type="button" className='btn'>List</button>
                <button type="button" className='btn'>Contact</button>
              </div>
              <div className='modal-body-title'>Advance</div>
              <div className='modal-body-content'>
                <button type="button" className='btn'>Education</button>
                <button type="button" className='btn'>Archievements</button>
                <button type="button" className='btn'>Interests</button>
                <button type="button" className='btn'>Projects</button>
                <button type="button" className='btn'>Skills</button>
                <button type="button" className='btn'>Timeline</button>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type="button"
                className='btn btn-default'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type='button'
        className='btn btn-info btn-lg'
        data-toggle='modal'
        data-target='#userContact'
      >
        User Contact
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
            <div className='modal-footer'>
              <button
                type="button"
                className='btn btn-default'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type='button'
        className='btn btn-info btn-lg'
        data-toggle='modal'
        data-target='#addTitle'
      >
        Add Title
      </button>
      <div className='modal fade' id='addTitle' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body add-title-modal'>
              <div className='modal-icon-wrapper'>
                <i className='fas fa-desktop' />
              </div>
              <div>
                <div>Software Developer</div>
                <div>
                  <b>Web Developer</b>
                </div>
                <div>
                  Front-end <b>Web Developer</b>
                </div>
                <div>
                  Angular <b>Web Developer</b>
                </div>
                <div>
                  React <b>Web Developer</b>
                </div>
                <div>
                  VueJS <b>Web Developer</b>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type="button"
                className='btn btn-default'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
