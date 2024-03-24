'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ShowArticle = () => {
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

  // 記事を削除する関数
  const deleteArticle = async (event) => {
    event.preventDefault();

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this article?',
    );
    if (!confirmDelete) {
      return;
    }

    const response = await fetch(`http://localhost/api/articles/${slug}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location.href = '/';
    } else {
      console.error('Failed to delete article');
    }
  };

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.article.title}</h1>
          <div className="article-meta">
            <Link href="/profile/eric-simons">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt=""
                width={200}
                height={100}
              />
            </Link>
            <div className="info">
              <a href="/profile/eric-simons" className="author">
                test user
              </a>
              <span className="date">
                {new Date(article.article.createdAt).toLocaleDateString()}
              </span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span className="counter">(0)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(0)</span>
            </button>
            <Link href={`/article/update/${article.article.slug}`}>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
              </button>
            </Link>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={deleteArticle}
            >
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <h2 id="introducing-ionic">{article.article.description}</h2>
            <p>{article.article.body}</p>
            <ul className="tag-list">
              {article.article.tagList.map((tag, index) => (
                <li key={index} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt=""
                width={200}
                height={100}
              />
            </a>
            <div className="info">
              <a href="" className="author">
                test user
              </a>
              <span className="date">
                {new Date(article.article.createdAt).toLocaleDateString()}
              </span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article <span className="counter">(0)</span>
            </button>
            <Link href={`/article/update/${article.article.slug}`}>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
              </button>
            </Link>
            <button className="btn btn-sm btn-outline-danger">
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div className="card-footer">
                <Image
                  src="http://i.imgur.com/Qr71crq.jpg"
                  alt=""
                  width={200}
                  height={100}
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ShowArticle;
