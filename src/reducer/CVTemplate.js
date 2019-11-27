const initialState = {
    arrDefaultTemplates: Array(4).fill(false),
    arrMyTemplates: Array(8).fill(false),
    selectedPageMT: 0
}

const CVTemplate = (state = initialState, action) => {
    switch (action.type){
        case 'INVERT_IS_MOUSE_OVER_DT': {
            const temp = state.arrDefaultTemplates.slice();
            temp[action.payload.index] = !temp[action.payload.index];
            return {
                ...state,
                arrDefaultTemplates: temp
            }
        }
        case 'INVERT_IS_MOUSE_OVER_MT': {
            const temp = state.arrMyTemplates.slice();
            temp[action.payload.index] = !temp[action.payload.index];
            return {
                ...state,
                arrMyTemplates: temp
            }
        }
        default:
            return state;
    }
}

export default CVTemplate;