import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';
import ErrorFallback from './components/common/ErrorFallback';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("Global Error", error, info);
      }}
    >
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
