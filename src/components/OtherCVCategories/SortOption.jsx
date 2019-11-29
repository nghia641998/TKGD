import React from 'react';

const customStyle = {
    width: '150px',
    textAlign: 'left'
} 

const SortOption = (props) => {
    const { selectedSortOption, arrSortOption, setSortOption } = props;

    return (
        <div className="btn-group float-right">
            <button type="button" 
                className="btn btn-sm btn-outline-secondary dropdown-toggle m-1 btn-toggle-custom" 
                data-toggle="dropdown" 
                style={customStyle}>
                Sort by&nbsp;
                <b>{arrSortOption[selectedSortOption]}</b>
                <i className="fas fa-chevron-down float-right rotate-focus"/>
            </button>
            <div className="dropdown-menu" 
                id="sort">
                {
                    arrSortOption.map((item, index) => {
                        return (
                            <button className="dropdown-item"
                                key={index}
                                type="button"
                                onClick={(e) => { setSortOption(index); console.log(e);}}>
                                {item}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SortOption;