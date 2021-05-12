const initialState = {
  data: null,
  loading: false,
  isAddingReview: false,
  isReviewAdded: false,
  error: null
}

const reviews = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_REVIEW_PENDING':
      return {
        ...state,
        loading: true,
        isAddingReview: true,
      }
    case 'ADD_REVIEW_FULFILLED': 
      return{
        ...state,
        loading: false,
        isReviewAdded: true,
        isAddingReview: false,
        data: action.payload.data.data
      }
    case 'ADD_REVIEW_REJECTED':
      return {
        ...state,
        loading: false,
        isAddingReview: false,
        error: true,
      }
    default: 
      return state;
  }
}

export default reviews;