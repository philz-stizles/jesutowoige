import PropTypes from "prop-types"
import React from "react"

const Services = ({ heading, subHeading, btnText }) => (
    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-6-lg">
                   <h6></h6> 
                   <h2></h2> 
                </div>
            </div>
        </div>
    </section>
)

Services.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    btnText: PropTypes.string,
}

Services.defaultProps = {
    siteTitle: ``,
}

export default Services