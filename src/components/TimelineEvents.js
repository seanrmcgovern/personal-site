import React from "react"
import { FaLaptopCode, FaReact, FaHtml5, FaGraduationCap } from "react-icons/fa"
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'

export const TimelineEvents = [
    {
        position: "Full-stack Developer",
        location: 'Hurdlr - Washington D.C.',
        date: "Starting June 2021",
        description: "Incoming position, beginning directly after graduating from UVA in Spring 2021",
        icon: <DeveloperModeIcon/>,
        skills: []
    },
    {
        position: "Software Engineering Intern",
        location: 'Investure LLC - Charlottesville, VA',
        date: "Sept. 2019 - present",
        description: "Developed an intranet web application for the treasury and accounting teams. Built the frontend using React, and endpoints to a .NET Web API.",
        icon: <FaLaptopCode/>,
        skills: ["React", "C#", "LINQ"]
    },
    {
        position: "Software Engineering Intern",
        location: 'Reonomy - NYC',
        date: "June 2019 - Aug. 2019",
        description: "Developed a commercial real estate web application utilizing React.",
        icon: <FaReact/>,
        skills: ["React"]
    },
    {
        position: "Program Lead",
        location: 'HackCville - Charlottesville, VA',
        date: "Jan. 2019 - May 2019",
        description: "Instructed the Wireframe course, which focused on HTML, CSS, jQuery, and tools such as Figma.",
        icon: <FaHtml5/>,
        skills: ["HTML5", "CSS3"]
    },
    {
        position: "Bachelor's Degree in Computer Science",
        location: 'University of Virginia',
        date: "Aug. 2017 - May 2021",
        description: "During my time at UVA I was awarded the VA-NC Alliance Academic Achievement Award. I also studied abroad in Costa Rica during the summer of 2018, and I hope to go back and visit my host family soon!",
        icon: <FaGraduationCap/>,
        skills: ["GPA: 3.908"]
    },
  ]
  
  export default {
      TimelineEvents,
  }