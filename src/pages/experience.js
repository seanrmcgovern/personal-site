import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import ExperienceTimeline from "../components/experiencetimeline"
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  return (
    <Layout>
        <div style={{ margin: `3rem auto`, padding: `0 1rem`, textAlign: "center" }}>
            <h1 style={{color: "#282A36"}}>Experience and Education</h1>
            {/* 282A36 */}
        </div>
        <ExperienceTimeline/>
    </Layout>
  )
}