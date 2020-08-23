import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ navbarItems }) => (
  <nav
    style={{
      background: `#080B1A`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      alignItems: `center`,
      padding: `0rem 2.45rem`
    }}
  >
    <div
    className='nav-logo'
      style={{
        fontSize: `1.45rem`,
        fontWeight: `bold`,
      }}
    ><Link
      to='/'
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >JesuTowoIge</Link></div>
    <div
      className='nav-items'
      // style={{
      //   margin: `0 auto`,
      //   padding: `1.45rem 1.0875rem`,
      // }}
    >
      <ul className='list-hr'>
        {navbarItems.map((item) => {
          return <li><Link
            to={item.link}
            style={{
              color: `white`,
              textDecoration: `none`,
              textTransform: `uppercase`
            }}
          >{item.label}</Link></li>
        })
        }
      </ul>
    </div>
    <div
      // style={{
      //   margin: `0 auto`,
      //   padding: `1.45rem 1.0875rem`,
      // }}
    ></div>
  </nav>
)

Navbar.propTypes = {
  navbarItems: PropTypes.array,
}

Navbar.defaultProps = {
  navbarItems: [],
}

export default Navbar