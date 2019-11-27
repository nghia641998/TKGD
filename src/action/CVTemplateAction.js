const CVTemplateAcion = {
    invertIsMouseOverDT: (index) => ({
        type: 'INVERT_IS_MOUSE_OVER_DT',
        payload: {
            index
        }
    }),
    invertIsMouseOverMT: (index) => ({
        type: 'INVERT_IS_MOUSE_OVER_MT',
        payload: {
            index
        }
    })
}

export default CVTemplateAcion;