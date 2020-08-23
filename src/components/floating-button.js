import PropTypes from "prop-types"
import React from "react"

const FloatingButton = ({ btnText, action }) => (
    <button>{btnText}</button>
)

FloatingButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}

FloatingButton.defaultProps = {
    btnText: ``,
    action: () => null,
}

export default FloatingButton