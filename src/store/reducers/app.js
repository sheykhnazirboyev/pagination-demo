import * as actionTypes from "../actions/actionTypes";

const intialState = {
  items: [],
  pageIndex: 0,
  pageSize: 5,
  currentPage: [],
  pageCount: 1,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case actionTypes.GET_DATA_FROM_LOCALSTORAGE: {
      const start = state.pageIndex * state.pageSize;
      const end = start + state.pageSize;
      const items = action.payload;
      return {
        ...state,
        items,
        pageCount: Math.ceil(items.length / state.pageSize),
        currentPage: state.items.slice(start, end),
      };
    }
    case actionTypes.CREATE_TABLE_ITEM: {
      const items = [...state.items, action.payload];
      const start = state.pageIndex * state.pageSize;
      const end = start + state.pageSize;
      const currentPage = items.slice(start, end);
      return {
        ...state,
        items: items,
        pageCount: Math.ceil(items.length / state.pageSize),
        currentPage,
      };
    }
    case actionTypes.DELETETE_ITEM: {
      const items = state.items.filter((item) => item.id !== action.payload);
      const start = state.pageIndex * state.pageSize;
      const end = start + state.pageSize;
      return {
        ...state,
        items,
        pageCount: Math.ceil(items.length / state.pageSize),
        currentPage: items.slice(start, end),
      };
    }
    case actionTypes.EDIT_ITEM: {
      const { values } = action.payload;
      const items = state.items.map((item) =>
        item.id === values.id ? values : item
      );
      const start = state.pageIndex * state.pageSize;
      const end = start + state.pageSize;
      return {
        ...state,
        items: items,
        currentPage: items.slice(start, end),
      };
    }

    case actionTypes.CHANGE_PAGE_INDEX: {
      const pageIndex = action.payload;
      const start = pageIndex * state.pageSize;
      const end = start + state.pageSize;
      return {
        ...state,
        pageIndex: action.payload,
        currentPage: state.items.slice(start, end),
        pageCount: Math.ceil(state.items.length / state.pageSize),
      };
    }
    default:
      return state;
  }
}

export default reducer;
