import PropTypes from "prop-types"
import React from "react"
import AboutUsImage from './about-us-image'
import { Link } from "gatsby"

const AboutUs = ({ heading, subHeading, btnText }) => (
    <section id="about-us" style={{
        margin: `4rem 0`
    }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5"><AboutUsImage /></div>
                <div className="col-lg-7">
                    <div style={{
                        marginLeft: `55px`,
                        paddingRight: `80px`,
                    }}>
                        <h6 className="heading-3">ABOUT US</h6>
                        <h2 className="heading-1">Provide Best GIS Solutions and Consultation</h2>
                        <span className="heading-2">SINCE 2012</span>
                        <p className="paragraph-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <Link className="btn-link" to="/">MORE DETAILS<i className=""></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

AboutUs.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    btnText: PropTypes.string,
}

AboutUs.defaultProps = {
    siteTitle: ``,
}

export default AboutUs