import "./tableForm.scss";

function TableForm() {
  return (
    <section className="table-form-section">
      <form className="form">
        <div className="form-items">
          <div>
            <label htmlFor="name">Name</label>
            <input className="input" type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              className="input"
              type="number"
              id="salary"
              placeholder="salary"
            />
          </div>
        </div>
        <div className="action">
          <button type="button" className="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default TableForm;
