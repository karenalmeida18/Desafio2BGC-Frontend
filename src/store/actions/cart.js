export function addItem(data) {
  return {
    type: "ADD_PRODUCT",
    data
  }
}

export function removeItem(id) {
  return {
    type: "REMOVE_PRODUCT",
    id
  }
}

export function clear() {
  return {
    type: "CLEAR"
  }
}