import React from "react";

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-left'>Logo</div>
      <div className='header-right'>
        <div className='header-active'>Template</div>
        <div>Other CV&#39;s</div>
        <div>My CV&#39;s</div>
        <div className='sepreate' />
        <div className='header-logout'>Logout</div>
      </div>
    </div>
  );
};

export default Header;
