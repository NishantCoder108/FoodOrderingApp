import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const routeErr = useRouteError();
  console.log({ routeErr });
  return (
    <div className="errors">
      <h1>Oops!! ,</h1>
      <h3>
        Something Unexpected - {routeErr.status} {routeErr.statusText}
      </h3>
      <h5>
        <Link to="/">Go To Home</Link>{" "}
      </h5>
    </div>
  );
};

export default Error;
