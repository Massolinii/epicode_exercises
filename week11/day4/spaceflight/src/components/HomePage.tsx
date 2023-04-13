import React, { useEffect, useState } from 'react';
import { Article } from '../interfaces/article';
import ArticleCard from './ArticleCard';

const HomePage: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const data = await response.json();
      {/*Aggiungere trycatch */}
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default HomePage;