import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../interfaces/article';
import Card from 'react-bootstrap/Card';
import styles from './HomePage.module.css';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({ article }) => {
  return (
    <Card className={styles.card}>
    <Link to={`/articles/${article.id}`} className={styles.cardLink}>
      
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{article.title}</Card.Title>
        <Card.Text>Published at: {new Date(article.publishedAt).toLocaleString()}</Card.Text>
      </Card.Body>

      <Card.Img src={article.imageUrl} alt={article.title} />

    </Link>
  </Card>
  );
};

export default ArticleCard;