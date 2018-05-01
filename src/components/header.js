/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './../layouts/gatstrap.scss'
import './../layouts/colors.scss'
import logo from './../images/ics-logo.png'

const HeaderWrapper = styled.header`
  background-image: linear-gradient(to top, #f0f0f0, #f4f4f4);
  padding-top: 0.5rem;
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container">
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
    </div>
  </HeaderWrapper>
)

export default Header
