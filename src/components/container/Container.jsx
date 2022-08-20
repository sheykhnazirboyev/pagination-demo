import { memo } from "react";
import "./container.css";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default memo(Container);
