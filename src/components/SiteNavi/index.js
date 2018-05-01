/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-dark">
        <div className="container">
          <Link className="text-center" to="/" />
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/technology/okta'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/technology/okta" className="nav-link">
                  Okta
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/blog' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/technology/gsuite'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/technology/gsuite" className="nav-link">
                  GSuite
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/technology/office-365'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/technology/office-365" className="nav-link">
                  Office 365
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/technology/dropbox'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/technology/dropbox" className="nav-link">
                  Dropbox
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
