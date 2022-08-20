import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem, eitItem } from "../../store/actions/actions";
import { selectTableItems } from "../../store/selectors";
import "./tableForm.scss";

const initialState = {
  name: "",
  gender: "male",
  salary: "",
};

function TableForm({ editId, changeEditId }) {
  const dispatch = useDispatch(initialState);
  const tableItems = useSelector(selectTableItems);

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    const retrieveItem = (id) => {
      const item = tableItems.find((item) => +item.id === +id);
      setValues(item);
    };

    if (editId) {
      retrieveItem(editId);
    }
  }, [editId, tableItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const isValid = !!values.name && !!values.salary;

  const handleSubmit = () => {
    dispatch(createItem(values));
    setValues(initialState);
    alert("Item created successfully");
  };

  const handleEdit = () => {
    dispatch(eitItem(values, editId));
    setValues(initialState);
    changeEditId(null);
    alert("Item updated successfully");
  };

  const { name, gender, salary } = values;

  const submitBtn = (
    <button
      onClick={handleSubmit}
      type="button"
      className="submit"
      disabled={!isValid}
    >
      Submit
    </button>
  );

  const editBtn = (
    <button
      onClick={handleEdit}
      type="button"
      className="submit"
      disabled={!isValid}
    >
      Edit
    </button>
  );

  const button = editId ? editBtn : submitBtn;

  return (
    <section className="table-form-section">
      <form className="form">
        <div className="form-items">
          <div>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={handleChange}
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              value={salary}
              onChange={handleChange}
              className="input"
              type="number"
              id="salary"
              name="salary"
              placeholder="salary"
            />
          </div>
        </div>
        <div className="action">{button}</div>
      </form>
    </section>
  );
}

export default TableForm;
