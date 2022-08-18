import Container from "./components/container";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Table from "./components/table";
import TableForm from "./components/tableForm/TableForm";

function App() {
  return (
    <Container>
      <Header />
      <TableForm />
      <Table />
      <Pagination />
    </Container>
  );
}

export default App;
