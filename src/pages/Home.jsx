import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/common/ErrorFallback";

const HomeContent = () => {
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold"></h1>
            <p className="mt-4 text-gray-600">
                React JS + Redux Toolkit + Tailwind CSS
            </p>
        </div>
    );
};

const Home = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HomeContent />
        </ErrorBoundary>
    );
};

export default Home;