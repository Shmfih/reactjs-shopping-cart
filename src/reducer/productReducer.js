import { ActionType } from '../action/actionType';


const initialState = {
  current: {
    id: 1,
    title: 'Ao xanh',
  },
  list: [],
  pagination: {},
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_NEW_POST: {
      const post = action.payload;
      const newList = [...state.list];
      newList.push(post);

      return {
        ...state,
        list: newList,
      };
    }

    case ActionType.FETCH_POST_LIST: {
      return { ...state, loading: true };
    }
    case ActionType.FETCH_POST_LIST_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    case ActionType.FETCH_POST_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.payload.data,
        pagination: action.payload.pagination,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
