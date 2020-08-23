import PropTypes from "prop-types"
import React from "react"
import BlogImage from './about-us-image'
import { Link } from "gatsby"

const Blog = ({ heading, subHeading, btnText }) => (
    <section id="blog" style={{
        margin: `5rem 0`
    }}>
        <div className="container">
            <div className="row" style={{
                marginBottom: `2rem`
            }}>
                <div className="col-12 txt-center">
                    <h6 className="heading-3">OUR BLOG</h6>
                    <h2 className="heading-1">Latest updates on <br/>our GIS projects</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <h2 className="heading-4"><Link to="/">GIS & IT</Link></h2>
                        <p className="paragraph-1">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                        <div className="flex-row-btw-ctr" style={{
                            marginTop: `1.5rem`
                        }}>
                            <Link to="/">By: Towo Ige</Link>
                            <Link to="/">May 04, 2019</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <h2 className="heading-4"><a>Creating Calaculated Fields</a></h2>
                        <p className="paragraph-1">This year has seen a rapid increase in the application of Arch GIS technologies among US Army Engineers</p>
                        <div className="flex-row-btw-ctr" style={{
                            marginTop: `1.5rem`
                        }}>
                            <Link to="/">By: Towo Ige</Link>
                            <Link to="/">May 04, 2019</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <a className="alink-1">Thinking Beyond the Map</a>
                        <p className="paragraph-1">There has been an increased utilization of GIS data in the industry especially within government institutions</p>
                        <div className="flex-row-btw-ctr" style={{
                            marginTop: `1.5rem`
                        }}>
                            <Link to="/">By: Towo Ige</Link>
                            <Link to="/">May 04, 2019</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

Blog.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    btnText: PropTypes.string,
}

Blog.defaultProps = {
    siteTitle: ``,
}

export default Blog