export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [ ...state, {
        item: action.item
      }]
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case 'UPDATE_ITEM':
      return [
        ...state.slice(0, action.index),
        {...state[action.index], ...action.updatedItem},
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
