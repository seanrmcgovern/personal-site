import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Experience from "../components/experience"
import 'react-vertical-timeline-component/style.min.css'

export default function About() {
  return (
    <Layout>
        <div style={{ margin: `3rem auto`, padding: `0 1rem`, textAlign: "center" }}>
            <h1 style={{color: "#26547c"}}>Experience and Education</h1>
        </div>
        <Experience/>
    </Layout>
  )
}