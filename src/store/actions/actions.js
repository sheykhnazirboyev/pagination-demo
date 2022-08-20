import * as actionTypes from "./actionTypes";
const itemsLocalstorageKy = "table-items";

export const createItem = (values) => (dispatch) => {
  const id = Math.trunc(Math.random() * 1000);
  dispatch({
    type: actionTypes.CREATE_TABLE_ITEM,
    payload: { ...values, id },
  });
};

export const eitItem = (values, id) => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_ITEM,
    payload: { values: { ...values, id } },
  });
};

export const deleteItem = (id) => (dispatch, getState) => {
  const currentPage = getState().app.currentPage;
  const pageIndex = getState().app.pageIndex;

  if (currentPage.length === 1) {
    const index = pageIndex > 0 ? pageIndex - 1 : 0;
    dispatch(changePageIndex(index));
  }

  dispatch({
    type: actionTypes.DELETETE_ITEM,
    payload: id,
  });
};

export const getDataFromLocalStorage = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem(itemsLocalstorageKy) || []);
  dispatch({
    type: actionTypes.GET_DATA_FROM_LOCALSTORAGE,
    payload: data,
  });
};

export const setDataToLocalStorage = (data) => (dispatch) => {
  const stringified = JSON.stringify(data);
  localStorage.setItem(itemsLocalstorageKy, stringified);
  dispatch({
    type: actionTypes.SET_DATA_TO_LOCALSTORAGE,
  });
};

export const changePageIndex = (pageIndex) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_PAGE_INDEX,
    payload: pageIndex,
  });
};
