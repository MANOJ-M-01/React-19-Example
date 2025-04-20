import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../components/errors";
import { LoadingComponent } from "../components/loaders";
import Todos from "../components/todos";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Suspense fallback={<LoadingComponent />}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Home;
