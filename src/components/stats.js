import PropTypes from "prop-types"
import React from "react"

const Stats = ({ stats }) => (
    <section id="stats" style={{
        padding: `4rem 0`,
        backgroundColor: `rgba(8,11,26,.92)`,
        backgroundImage: ``
    }}>
        <div className="container">
            <div className="row">
                {stats.map((item) => {
                    return <div className="col-md-3 txt-center">
                        <h2 style={{
                            color: `#f8f9fc`,
                            marginBottom: `10px`,
                            position: `relative`,
                            fontSize: `24px`,
                            fontWeight: 600,
                        }}><span>{item.figure}</span></h2> 
                        <h6 style={{
                            color: `#f8f9fc`,
                            marginBottom: `10px`,
                            position: `relative`,
                            fontSize: `24px`,
                            fontWeight: 600,
                        }}>{item.label}</h6> 
                    </div>
                })}
            </div>
        </div>
    </section>
)

Stats.propTypes = {
    stats: PropTypes.array,
}

Stats.defaultProps = {
    stats: [],
}

export default Stats