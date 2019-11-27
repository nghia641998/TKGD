import { connect } from 'react-redux';
import MyTemplates from '../../components/Home/MyTemplates';
import CVTemplateAction from '../../action/CVTemplateAction';

const mapStateToProps = (state) => {
    
    return {
        arrMyTemplates: state.CVTemplate.arrMyTemplates,
        selectedPage: state.CVTemplate.selectedPageMT
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsMouseOver: (index) => dispatch(CVTemplateAction.invertIsMouseOverMT(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTemplates);