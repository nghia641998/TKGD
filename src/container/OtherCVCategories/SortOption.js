import { connect } from 'react-redux';
import SortOption from '../../components/OtherCVCategories/SortOption';
import CVInCategoryAction from '../../action/CVInCategoryAction';

const mapStateToProps = (state) => {
    
    return {
        selectedSortOption: state.CVInCategory.selectedSortOption,
        arrSortOption: state.CVInCategory.arrSortOption
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSortOption: (selectedSortOption) => dispatch(CVInCategoryAction.setSortOption(selectedSortOption))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortOption);