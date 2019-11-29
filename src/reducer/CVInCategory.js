const initialState = {
    selectedPageNumber: 0,
    numberOfCV: 62,
    selectedSortOption: 0,
    arrSortOption: ['Most view', 'Most vote', 'Test 1', 'Test 2'],
}

const CVInCategory = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_PAGE_NUMBER':
            return {
                ...state,
                selectedPageNumber: action.payload.selectedPageNumber
            };
        case 'SET_SORT_OPTION':
            return{
                ...state,
                selectedSortOption: action.payload.selectedSortOption
            }
        default: 
            return state;
    }
}

export default CVInCategory;