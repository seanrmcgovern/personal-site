import React from "react"
import { FaLaptopCode, FaReact, FaHtml5, FaGraduationCap } from "react-icons/fa"
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'

export const TimelineEvents = [
    {
        position: "Full-stack Developer",
        location: 'Hurdlr - Washington D.C.',
        date: "Starting June 2021",
        description: "Incoming position, beginning directly after graduating from UVA next Spring",
        icon: <DeveloperModeIcon/>
    },
    {
        position: "Software Engineering Intern",
        location: 'Investure LLC - Charlottesville, VA',
        date: "Sept. 2019 - present",
        description: "Incoming position, beginning directly after graduating from UVA next Spring",
        icon: <FaLaptopCode/>
    },
    {
        position: "Software Engineering Intern",
        location: 'Reonomy - NYC',
        date: "June 2019 - Aug. 2019",
        description: "Incoming position, beginning directly after graduating from UVA next Spring",
        icon: <FaReact/>
    },
    {
        position: "Program Lead",
        location: 'HackCville - Charlottesville, VA',
        date: "Jan. 2019 - May 2019",
        description: "Incoming position, beginning directly after graduating from UVA next Spring",
        icon: <FaHtml5/>
    },
    {
        position: "Bachelor's Degree in Computer Science",
        location: 'University of Virginia',
        date: "Aug. 2017 - May 2021",
        description: "UVA Class of 2021...Wahoowa!",
        icon: <FaGraduationCap/>
    },
  ]
  
  export default {
      TimelineEvents,
  }