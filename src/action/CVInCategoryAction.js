const CVInCategoryAction = {
    setSortOption: (selectedSortOption) => ({
        type: 'SET_SORT_OPTION',
        payload: {
            selectedSortOption
        }
    }),
    setSelectedPageNember: (selectedPageNumber) => ({
        type: 'SET_SELECTED_PAGE_NUMBER',
        payload: {
            selectedPageNumber
        }
    })
}

export default CVInCategoryAction;