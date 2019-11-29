import { connect } from 'react-redux';
import CVInCategory from '../../components/OtherCVCategories/CVInCategory';
import CVInCategoryAction from '../../action/CVInCategoryAction';

const mapStateToProps = (state) => {
    
    return {
        selectedPageNumber: state.CVInCategory.selectedPageNumber,
        numberOfCV: state.CVInCategory.numberOfCV
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedPageNumber: (selectedPageNumber) => dispatch(CVInCategoryAction.setSelectedPageNember(selectedPageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVInCategory);