import API from '../../api'

// ACTION TYPES
const SET_ITEMS = 'SET_ITEMS'
const SET_IS_READY = 'SET_IS_READY'

const initialState = {
  isReady: false,
  items: null,
}

// REDUCER
const transactions = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
        isReady: true,
      }
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.isReady,
      }      
    default:
      return state
  }
}
export default transactions

// ACTION CREATORS
const setItems = (items) => ({type: SET_ITEMS, items})
const setIsReady = (isReady) => ({type: SET_IS_READY, isReady})

// THUNK CREATOR
export const getItems = () => async (dispatch) => {
  dispatch(setIsReady(false))
  const {data} = await API.getItems()  
    if (!data.error) {
      dispatch(setItems(data))      
    }
  dispatch(setIsReady(true))
}