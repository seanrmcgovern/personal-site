import React from "react"
import { VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Chip from '@material-ui/core/Chip';

export default function TimelineElement(props) {
    const theme = "#a7a4e0"
    // purple: #aa7dce
    // green: #88d498

    return (
        <VerticalTimelineElement
            contentStyle={{ background: theme, color: '#fff', }}
            contentArrowStyle={{ borderRight: `7px solid ${theme}` }}
            date={props.date}
            iconStyle={{ background: theme, color: '#fff' }}
            icon={props.icon}
        >
            {props.skills.map((skill) => <Chip label={skill} style={{marginBottom: 10, marginRight: 10}}/>)}
            <h3 style={{color: "#282A36", margin: 0}}>{props.position}</h3>
            <h4 style={{color: "#514689", margin: 0}}>{props.location}</h4>
            <p >
                {props.description}
            </p>
        </VerticalTimelineElement>
    )
  }