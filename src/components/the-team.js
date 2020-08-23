import PropTypes from "prop-types"
import React from "react"

const TheTeam = ({ heading, subHeading, btnText }) => (
    <section id="the-team">
        <div className="container-fluid">
            <div className="row">
                <div></div>
            </div>
        </div>
    </section>
)

TheTeam.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    btnText: PropTypes.string,
}

TheTeam.defaultProps = {
    siteTitle: ``,
}

export default TheTeam