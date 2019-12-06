import React from "react";
import {Link} from 'react-router-dom';

const Template = () => {
  return (
    <div className="container-fluid create-cv" style={{ backgroundImage: "url('/images/bk.png')", backgroundSize: "cover" }}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-1' />
          <div className='col-sm-8 mt-4'>
            <div className='row id_1'>
              <div id='cvo-toolbar'>
                <div className='toolbar-global-controls'>
                  <Link to="/template-category"
                    className='item button'
                    id='btn-change-template'
                    data-toggle='tooltip'
                    data-original-title='Đổi Mẫu CV khác'
                    style={{ width: "15%" }}
                  >
                    <div className='title'>Change template</div>
                    <i className='fa fa-sy fa-recycle' />
                  </Link>
                  <div
                    id='toolbar-color'
                    data-toggle='tooltip'
                    data-original-title='Màu sắc'
                    style={{ border: "none" }}
                  >
                    <ul className='options'>
                      <li
                        className='color'
                        style={{ backgroundColor: "#002a73" }}
                        data-color='002a73'
                      >
                        <i className='fa fa-check' />
                      </li>

                      <li
                        className='color'
                        style={{ backgroundColor: "#17a598" }}
                        data-color='17a598'
                      >
                        <i className='fa fa-check' />
                      </li>
                      <li
                        className='color'
                        style={{ backgroundColor: "#5432ff" }}
                        data-color='5432ff'
                      >
                        <i className='fa fa-check' />
                      </li>
                      <li
                        className='color'
                        style={{ backgroundColor: "#143141" }}
                        data-color='143141'
                      >
                        <i className='fa fa-check' />
                      </li>
                      <li
                        className='color'
                        style={{ backgroundColor: "#147066" }}
                        data-color='147066'
                      >
                        <i className='fa fa-check' />
                      </li>
                      <li
                        className='color'
                        style={{ backgroundColor: "#592741" }}
                        data-color='592741'
                      >
                        <i className='fa fa-check' />
                      </li>
                      <li
                        className='color active'
                        style={{ backgroundColor: "#ed6a5a" }}
                        data-color='ed6a5a'
                      >
                        <i className='fa fa-check' />
                      </li>
                    </ul>
                  </div>
                  <div
                    className='toolbar-left'
                    aria-expanded='true'
                    style={{ border: "none" }}
                  >
                    <div>
                      <div
                        className='item'
                        id='toolbar-font'
                        data-toggle='tooltip'
                        data-original-title='Kiểu chữ'
                      >
                        <div className='options'>
                          <select
                            name='font'
                            id='font-selector'
                            style={{ width: "120px", height: "20px" }}
                            tabIndex='-1'
                            className='select2-hidden-accessible'
                            aria-hidden='true'
                          >
                            <option value='default'>
                              Roboto
                            </option>
                            <option value='arial'>Arial</option>
                            <option value='tahoma'>Tahoma</option>
                          </select>
                          <span
                            className='select2 select2-container select2-container--default'
                            dir='ltr'
                            style={{ width: "120px" }}
                          >
                            <span className='selection'>
                              <span
                                className='select2-selection select2-selection--single'
                                type='combobox'
                                aria-haspopup='true'
                                aria-expanded='false'
                                aria-labelledby='select2-font-selector-container'
                              >
                                <span
                                  className='select2-selection__rendered'
                                  id='select2-font-selector-container'
                                  title='Roboto'
                                >
                                  Roboto
                                </span>
                                <span
                                  className='select2-selection__arrow'
                                  role='presentation'
                                >
                                  <b role='presentation' />
                                </span>
                              </span>
                            </span>
                            <span
                              className='dropdown-wrapper'
                              aria-hidden='true'
                            />
                          </span>
                        </div>
                      </div>
                      <div
                        className='item'
                        data-toggle='tooltip'
                        data-original-title='Cỡ chữ'
                      >
                        <div className='options'>
                          <span className='fontsize' data-size='small'>
                            <i className='fa fa-font' />
                          </span>
                          <span className='fontsize active' data-size='normal'>
                            <i className='fa fa-font' />
                          </span>
                          <span className='fontsize' data-size='large'>
                            <i className='fa fa-font' />
                          </span>
                        </div>
                      </div>
                      <div
                        className='item'
                        data-toggle='tooltip'
                        data-original-title='Giãn dòng'
                      >
                        <div className='options'>
                          <span className='line-height' data-spacing='small'>
                            <i className='fa fa-arrows-v icon' />
                          </span>
                          <span
                            className='line-height active'
                            data-spacing='normal'
                          >
                            <i className='fa fa-arrows-v' />
                          </span>
                          <span className='line-height' data-spacing='large'>
                            <i className='fa fa-arrows-v' />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div id='cv-text-editor' style={{ display: "block" }}>
                        <div className='x_container'>
                          <div className='editor-controls-wraper'>
                            <div className='editor-controls'>
                              <div className='editor-control-group'>
                                <span
                                  className='editor-control control-bold'
                                  title='In đậm'
                                  command='bold'
                                >
                                  <i
                                    className='fa fa-bold'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-italic'
                                  title='In nghiêng'
                                  command='italic'
                                >
                                  <i
                                    className='fa fa-italic'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-underline'
                                  title='Gạch chân'
                                  command='underline'
                                >
                                  <i
                                    className='fa fa-underline'
                                    aria-hidden='true'
                                  />
                                </span>
                              </div>
                              <div className='editor-control-group'>
                                <span
                                  className='editor-control control-align-left'
                                  title='Căn trái'
                                  command='align-left'
                                >
                                  <i
                                    className='fa fa-align-left'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-align-right'
                                  title='Căn phải'
                                  command='align-right'
                                >
                                  <i
                                    className='fa fa-align-right'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-align-center'
                                  title='Căn giữa'
                                  command='align-center'
                                >
                                  <i
                                    className='fa fa-align-center'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-align-justify'
                                  title='Căn đều hai lề'
                                  command='align-justify'
                                >
                                  <i
                                    className='fa fa-align-justify'
                                    aria-hidden='true'
                                  />
                                </span>
                              </div>

                              <div className='editor-control-group'>
                                <span
                                  className='editor-control control-undo'
                                  title='Hoàn tác'
                                  command='undo'
                                >
                                  <i
                                    className='fa fa-undo'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-redo'
                                  title='Làm lại'
                                  command='redo'
                                >
                                  <i
                                    className='fa fa-repeat'
                                    aria-hidden='true'
                                  />
                                </span>
                                <span
                                  className='editor-control control-remove-format'
                                  title='Xoá hết định dạng'
                                  command='remove-format'
                                >
                                  <i
                                    className='fa fa-eraser'
                                    aria-hidden='true'
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='item button border-left'
                    style={{ width: "15%" }}
                    id='btn-edit-layout'
                    data-toggle='modal'
        data-target='#addWidget'
                  >
                    <div className='title'>Add widget</div>
                    <i className='fa fa-plus-square' />
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
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  placeholder='Your name'
                />
                <input
                  type='text'
                  className='form-control'
                  style={{ background: "transparent", width: "300px", borderStyle: "none" }}
                  placeholder='Job title'
                />
                <input
                  type='text'
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
                    <button type="button" style={{ background: "transparent", border: "none", outline: "none" }}>
                      <i
                        className='fa fa-pencil-square-o ml-6'
                        aria-hidden='true'
                      />
                    </button>
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
                  <button
                    type='button'
                    className='button mt-4 mybtn'
                    style={{ width: "100%", borderStyle: "dashed", borderColor: "gray" }}
                  >
                    Add skill{" "}
                    <i className='fa fa-plus ml-3' aria-hidden='true' />
                  </button>
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='container mt-4'>
                  <div className='form-group'>
                    <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Profile
                    </label>
                    <textarea
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
                      rows='3'
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
                      rows='3'
                      placeholder='Description of the education...'
                      style={{ background: "transparent", border: "none" }}
                    />
                  </div>
                  <button
                    type='button'
                    className='button mt-4 mybtn'
                    style={{ width: "100%", borderStyle: "dashed", borderColor: "gray" }}
                  >
                    Add Element{" "}
                    <i className='fa fa-plus ml-5' aria-hidden='true' />
                  </button>
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
                  <button
                    type='button'
                    className='button mt-4 mybtn'
                    style={{ width: "100%", borderStyle: "dashed", borderColor: "gray" }}
                  >
                    Add contact file
                    <i className='fa fa-plus ml-3' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginBottom: "150px" }}>
              <button
                type='button'
                className='button mt-4 mb-4 addpagebtn'
                style={{ width: "100%", borderStyle: "dashed", borderColor: "gray" }}
              >
                Add page <i className='fa fa-plus ml-5' aria-hidden='true' />
              </button>
            </div>
          </div>
          <div className='col-sm-3'>
            <div
              className='container-fluid ml-3 rounded mt-4'
              style={{ background: "white", width: "60%" }}
            >
              <label style={{ height: "20px" }} />
              <input
                className='form-control form-control-lg mb-4'
                type='text'
                placeholder='Template name'
              />
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
              >
                Save
              </button>
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
              >
                Download PDF
              </button>
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-3'
                style={{ color: "white", width: "100%" }}
              >
                Export
              </button>
              <button
                type='button'
                className='btn btn-secondary mt-3 mb-5'
                style={{ color: "white", width: "100%" }}
              >
                Import
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
