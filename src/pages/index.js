import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/about-us"
import Stats from "../components/stats"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import TheTeam from "../components/the-team"
import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutUs />
    <Stats stats={[
      { figure: 500, label: 'Papers Published' },
      { figure: 2000, label: 'Projects Completed' },
      { figure: 100, label: 'Consulting Jobs' },
      { figure: 50, label: 'Projects Ongoing' }
    ]}/>
    <Services />
    <Testimonials />
    <TheTeam />
    <Blog />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
