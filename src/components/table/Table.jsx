import "./table.scss";

function Table() {
  return (
    <section className="table-section">
      <table>
        <thead>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Salary</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Micky</td>
            <td>Male</td>
            <td>@800</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mini</td>
            <td>Male</td>
            <td>@800</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sara</td>
            <td>Female</td>
            <td>@800</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Goffy</td>
            <td>Male</td>
            <td>@800</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Goffy</td>
            <td>Male</td>
            <td>@800</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Table;
