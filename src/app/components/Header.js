import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" className when you're on that page" */}
            <Link className="nav-link active" href="/">
              {' '}
              Home{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/article/create">
              {' '}
              <i className="ion-compose"></i>&nbsp;New Article{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/settings">
              {' '}
              <i className="ion-gear-a"></i>&nbsp;Settings{' '}
            </Link>
          </li>
          <li className="nav-item">
            {' '}
            <Link className="nav-link" href="/profile/eric-simons">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt=""
                width={20}
                height={5}
                style={{ width: 'auto', height: 'auto' }}
                className="user-pic"
              />
              test user
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
