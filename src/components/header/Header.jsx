import { memo } from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Pagination Demo in React</h1>
      <hr />
    </header>
  );
}

export default memo(Header);
