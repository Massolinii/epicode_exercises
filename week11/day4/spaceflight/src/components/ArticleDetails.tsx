import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../interfaces/article';

const ArticleDetails: React.FunctionComponent = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>Published at: {article.publishedAt}</p>
      <img src={article.imageUrl} alt={article.title} />
    </div>
  );
};

export default ArticleDetails;