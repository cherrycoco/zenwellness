const treatmentSelector = (state = {treatment: 'massage'}, action) => {
  switch (action.type) {
    case 'CHANGE_TREATMENT':
      return {
        treatment: action.treatment,
      }
    default:
      return state;
  }
}

export default treatmentSelector;