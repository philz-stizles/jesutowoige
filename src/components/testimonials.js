import PropTypes from "prop-types"
import React from "react"

const Testimonials = ({ heading, subHeading, btnText }) => (
    <section id="testimonials">
        <div className="container">
        </div>
    </section>
)

Testimonials.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    btnText: PropTypes.string,
}

Testimonials.defaultProps = {
    siteTitle: ``,
}

export default Testimonials