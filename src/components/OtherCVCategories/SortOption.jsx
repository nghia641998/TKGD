import React from "react";

const SortOption = props => {
  const { selectedSortOption, arrSortOption, setSortOption } = props;

  return (
    <div className='btn-group float-right'>
      <div className="dropdown" data-toggle='dropdown'>
        Sort by&nbsp;
        <b>{arrSortOption[selectedSortOption]}</b>
        <i className='ml-3 mt-1 fas fa-chevron-down float-right rotate-focus' />
      </div>
      <div className='dropdown-menu' id='sort'>
        {arrSortOption.map((item, index) => {
          return (
            <button
              className='dropdown-item'
              key={index}
              type='button'
              onClick={e => {
                setSortOption(index);
                console.log(e);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SortOption;
