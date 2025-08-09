import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  /** const error = useRouteError(); // error is of type 'unknown'
   * useRouteError() is generic and returns unknown because:
     The error could be anything (Error, Response, a custom object, etc.)
     TypeScript forces you to narrow or cast it before accessing its properties*/

  /**
   * as Error & { statusText?: string }; 
   * this line means Trust me, I know what type this value really is.” */
  /**
   * We use **as** to perform a type assertion — this means:

🔹 “Tell TypeScript to treat a value as a specific type — even if it can’t figure it out on its own.”

It does not change the value at runtime — it's only for TypeScript's type system to stop errors or give better IntelliSense.
   */
  const error = useRouteError() as Error & { statusText?: string };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* error.statusText is unknown ,so to solve it we add  as Error & { statusText?: string }; */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
