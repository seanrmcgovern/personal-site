import React from "react"
import {TimelineEvents} from "./TimelineEvents"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import TimelineElement from "./TimelineElement"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
}));

export default function ExperienceTimeline() {
    const classes = useStyles();

    return (
        <VerticalTimeline>
            {TimelineEvents.map((event) => <TimelineElement position={event.position} location={event.location} date={event.date} description={event.description} icon={event.icon} skills={event.skills}/>)}
            <VerticalTimelineElement
                iconStyle={{ background: '#a7a4e0', color: '#fff' }}
            />
          </VerticalTimeline>
    )
  }