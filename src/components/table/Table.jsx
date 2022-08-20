import "./table.scss";

function Table({ data, changeEditId, handleDelete }) {
  console.log(data);
  const renerBody = data.map((item, i) => (
    <tr key={item.id}>
      <td>{i + 1}</td>
      <td>{item.name}</td>
      <td>{item.gender}</td>
      <td>{item.salary}</td>
      <td>
        <button className="edit" onClick={() => changeEditId(item.id)}>
          Edit
        </button>
      </td>
      <td>
        <button className="delete" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{renerBody}</tbody>
      </table>
    </section>
  );
}

export default Table;
