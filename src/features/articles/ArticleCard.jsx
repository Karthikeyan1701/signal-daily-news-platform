const ArticleCard = ({ article }) => {
  if (!article) return null;

  const { title, description, url, urlToImage, source, publishedAt } = article;

  return (
    <article className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
      {/* Image */}
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
        )}

        {/* Meta information */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{source?.name || 'Unknown source'}</span>
          <span>
            {publishedAt ? new Date(publishedAt).toLocaleDateString() : ''}
          </span>
        </div>

        {/* Read More */}
        {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline">
                Read full article →
            </a>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;
