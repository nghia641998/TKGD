import { connect } from 'react-redux';
import DefaultTemplates from '../../components/Home/DefaultTemplates';
import CVTemplateAction from '../../action/CVTemplateAction';

const mapStateToProps = (state) => {
    
    return {
        arrDefaultTemplates: state.CVTemplate.arrDefaultTemplates
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsMouseOver: (index) => dispatch(CVTemplateAction.invertIsMouseOverDT(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTemplates);