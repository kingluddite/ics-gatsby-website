/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import SiteNavi from '../components/SiteNavi'
import './gatstrap.scss'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Iron Cove Solutions is a cloud based consulting firm. We help companies deliver a return on cloud usage by applying best practices. Call Today 1-888-959-2825',
        },
        {
          name: 'keywords',
          content:
            'cloud, services, migration, consulting, project, okta, Dropbox, Microsoft, office 365, email, exchange, sso, single, sign, on, reseller, help',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <SiteNavi title={data.site.siteMetadata.title} location={location} />
    <div className="container">{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
