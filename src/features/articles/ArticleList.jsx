import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopHeadlines, setPage } from './articlesSlice';
import CountrySelector from './CountrySelector';
import ArticleCard from './ArticleCard';
import Pagination from '../../components/common/Pagination';
import { PAGE_SIZE } from '../../utils/constants';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, country, page, totalResults } = useSelector(
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
  }, [dispatch, country, page]);

  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <section className="p-6 max-w6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Top Headlines</h1>
        <CountrySelector />
      </div>

      {/* Loading State */}
      {status === 'loading' && (
        <p className="text-center text-gray-600">Loading news articles...</p>
      )}

      {/* Error State */}
      {status === 'failed' && (
        <p className="text-center text-red-600">{error}</p>
      )}

      {/* Empty State */}
      {status === 'succeeded' && articles.length === 0 && (
        <p className="text-center text-gray-600">No articles found.</p>
      )}

      {/* Articles List */}
      {status === 'succeeded' && articles.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <Pagination 
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
};

export default ArticleList;
