import { useNavigate } from 'react-router-dom';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>

      <p className="mt-4 text-gray-700 text-center max-w-md">
        {error?.message || 'An unexpected error occurred.'}
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>

        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
            Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;