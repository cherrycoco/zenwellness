const commentSelector = (state = {comment: 'first'}, action) => {
  switch (action.type) {
    case 'CHANGE_COMMENT':
      return {
        comment: action.comment,
      }
    default:
      return state;
  }
}

export default commentSelector;