import { FallbackProps } from "react-error-boundary";

const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default ErrorComponent;
