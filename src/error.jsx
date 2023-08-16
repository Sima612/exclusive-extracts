import { useRouteError } from "react-router-dom";
import Header from "./Header";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, no new products yet.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
