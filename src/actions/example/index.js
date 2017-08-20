export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

export const updateItem = (updatedItem, index) => {
  return {
    type: 'UPDATE_ITEM',
    updatedItem,
    index
  }
}

export const listItems = (items) => {
  return {
    type: 'LIST_ITEMS',
    items
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    // dispatch(loading(true))
    try {
      const response = await fetch('http://api.lvh.me:3000/v1/example', { method: 'GET' })
      // dispatch(loading(false))
      return dispatch(listItems(response.items))
    } catch (error) {
      // handle error
      // dispatch(loading(false))
    }
  }
}

