import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopHeadlines } from './articlesSlice';
import CountrySelector from './CountrySelector';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, country } = useSelector(
    (state) => state.articles,
  );

  useEffect(() => {
    dispatch(
      getTopHeadlines({
        country,
        category: 'general',
        page: 1,
      }),
    );
  }, [dispatch, country]);

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm-justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Top Headlines</h1>

        <CountrySelector />
      </div>

      {/* Loading State */}
      {status === 'loading' && (
        <p className="text-center text-gray-600">Loading news articles...</p>
      )}

      {/* Error State */}
      {status === 'failed' && (
        <p className="text-center text-red-600">
          {error || 'Failed to load news.'}
        </p>
      )}

      {/* Empty State */}
      {status === 'succeeded' && articles.length === 0 && (
        <p className="text-center text-gray-600">
          No articles found for this country.
        </p>
      )}

      {/* Articles List */}
      {status === 'succeeded' && articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleList;
