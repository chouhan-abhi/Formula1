import { Link } from "react-router-dom";

const PageHeader = () => (
  <>
    <h1 style={{ color: "red" }}>
      <i>F1 Details</i>
    </h1>
    <Link to="/">Events </Link>
    <Link to="/drivers">Drivers</Link>
  </>
);

export default PageHeader;
