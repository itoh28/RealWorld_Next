'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  const fetchAllArticles = async () => {
    const response = await fetch('http://localhost/api/articles');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getAllArticles = async () => {
      const data = await fetchAllArticles();
      setArticles(data.articles);
    };
    getAllArticles();
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {articles.map((article) => {
              return (
                <div className="article-preview" key={article.slug}>
                  <div className="article-meta">
                    <a href="/profile/sample">
                      <Image
                        src="http://i.imgur.com/Qr71crq.jpg"
                        alt="icon"
                        width={30}
                        height={30}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </a>
                    <div className="info">
                      <a href="/profile/sample" className="author">
                        test user
                      </a>
                      <span className="date">
                        {new Date(article.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> ?
                    </button>
                  </div>
                  <Link
                    href={`/article/${article.slug}`}
                    className="preview-link"
                  >
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      {article.tagList.map((tag, index) => (
                        <li
                          key={index}
                          className="tag-default tag-pill tag-outline"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              );
            })}

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
