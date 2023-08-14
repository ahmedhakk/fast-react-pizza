import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // since we use this component as a errorElement in router - we will have access to error data with useRouteError
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
