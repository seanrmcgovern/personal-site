import React from "react"
import { VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience(props) {
    const theme = "#aa7dce"
    // purple: #aa7dce
    // green: #88d498

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: theme, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${theme}` }}
            date={props.date}
            iconStyle={{ background: theme, color: '#fff' }}
            icon={props.icon}
        >
            <h3 style={{color: "#00296b", margin: 0}}>{props.position}</h3>
            <h4 style={{color: "#26547c", margin: 0}}>{props.location}</h4>
            <p>
                {props.description}
            </p>
        </VerticalTimelineElement>
    )
  }