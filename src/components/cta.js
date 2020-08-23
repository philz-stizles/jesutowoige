import PropTypes from "prop-types"
import React from "react"

const Cta = ({ heading, subHeading, btnText }) => (
  <div
    style={{
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >   
      <h1 style={{ 
        fontSize: `60px`,
        color: `#151515`,
        display: `inline-block`,
        fontWeight: 600,
        lineHeight: `70px`,
        textAlign: `left`,
        minWidth: `650px`,
        maxWidth: `650px`,
        textTransform: `uppercase`,
        marginBottom: `1.2rem`
      }}>
          {heading}
      </h1>
      <h1 style={{ 
        color: `#151515`,
        display: `inline-block`,
        lineHeight: `24px`,
        fontSize: `16px`,
        textAlign: `left`,
        minWidth: `600px`,
        fontWeight: 500,
        maxWidth: `600px`,
        marginBottom: `1.2rem`
      }}>
          {subHeading}
      </h1>
    <button className='btn'>{btnText}</button>
    </div>
  </div>
)

Cta.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  btnText: PropTypes.string,
}

Cta.defaultProps = {
  siteTitle: ``,
}

export default Cta