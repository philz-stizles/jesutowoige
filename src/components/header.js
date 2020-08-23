import PropTypes from "prop-types"
import React from "react"
import Cta from "./cta"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `grey`,
      height: `80vh`,
      position: `relative`
    }}
  >
    <Cta 
      heading="Enhance your business with us"
      subHeading="We always try to provide the best cutting-edge ICT solutions for clients for rapid improvement in performance"
      btnText="Learn more"
    ></Cta>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header