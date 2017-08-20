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
