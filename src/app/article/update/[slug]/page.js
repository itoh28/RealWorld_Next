'use client';
import ArticleForm from '@/app/components/ArticleForm';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UpdateArticle = () => {
  const params = useParams();
  const slug = params.slug;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`http://localhost/api/articles/${slug}`);
      const data = await response.json();
      setArticle(data);
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <ArticleForm
      initialArticle={article.article}
      method="PUT"
      url={`http://localhost/api/articles/${slug}`}
    />
  );
};

export default UpdateArticle;
