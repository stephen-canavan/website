import React from "react"

import Layout from "@components/Layout/Layout"
import SideBar from "@components/SideBar/SideBar"

const NotFoundPage = () => (
  <Layout title="Projects">
      <SideBar/>
      <div style={{color: "white"}}>
          <h2> Projects </h2>
          <p>Page content</p>
      </div>
  </Layout>
)

export default NotFoundPage
