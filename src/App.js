import Container from "./components/container";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Table from "./components/table";
import TableForm from "./components/tableForm/TableForm";
import { useSelector } from "react-redux/es/exports";
import {
  selectCurrentPage,
  selectPageCount,
  selectPageIndex,
  selectTableItems,
} from "./store/selectors";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  changePageIndex,
  deleteItem,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();
  const tableItems = useSelector(selectTableItems);
  const pageIndex = useSelector(selectPageIndex);
  const pageCount = useSelector(selectPageCount);
  const currentPage = useSelector(selectCurrentPage);
  const [editId, setEditId] = useState(null);

  console.log(currentPage);

  const changeEditId = useCallback((id) => {
    setEditId(id);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteItem(id));
      setTimeout(() => {
        alert("item deleted successfully");
      }, 500);
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (pageIndex) => {
      dispatch(changePageIndex(pageIndex));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getDataFromLocalStorage());
    dispatch(changePageIndex(0));
  }, [dispatch]);

  useEffect(() => {
    if (tableItems.length > 0) {
      dispatch(setDataToLocalStorage(tableItems));
    }
  }, [dispatch, tableItems]);

  return (
    <Container>
      <Header />
      <TableForm editId={editId} changeEditId={changeEditId} />
      {tableItems.length > 0 && (
        <>
          <Table
            data={currentPage}
            changeEditId={changeEditId}
            handleDelete={handleDelete}
          />
          <Pagination
            handlePageChange={handlePageChange}
            pageIndex={pageIndex}
            pageCount={pageCount}
          />
        </>
      )}
    </Container>
  );
}

export default App;
