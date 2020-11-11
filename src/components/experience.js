import React from "react"
import {TimelineEvents} from "./TimelineEvents"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import TimelineElement from "./TimelineElement"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
}));

export default function Experience() {
    const classes = useStyles();

    return (
          <VerticalTimeline className={classes.timeline}>
              {TimelineEvents.map((event) => <TimelineElement position={event.position} location={event.location} date={event.date} description={event.description} icon={event.icon}/>)}
              <VerticalTimelineElement
                  iconStyle={{ background: '#aa7dce', color: '#fff' }}
              />
          </VerticalTimeline>
    )
  }