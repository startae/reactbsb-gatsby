import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/gatsby.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.5em 0',
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" width="60" height="60" />
      </Link>
    </div>
  </div>
)

export default Header
