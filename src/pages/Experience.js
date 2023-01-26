import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css';



function Experience() {
  return (


    <div className="experience">
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 

              className='vertical-timeline-element--education'
              date='2012 - 2016'
              iconStyle={ {background: '#3e497a', color: '#fff'}}
              icon={<SchoolIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>
                  SMK Batu Unjur, Klang
                </h3>
                <p> Sijil Pelajaran Malaysia</p>
 
            </VerticalTimelineElement>

            <VerticalTimelineElement 

              className='vertical-timeline-element--education'
              date='2017 - 2018'
              iconStyle={ {background: '#3e497a', color: '#fff'}}
              icon={<SchoolIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>
                  Limkokwing University, Cyberjaya
                </h3>
                <p> Foundation in IT</p>
 
            </VerticalTimelineElement>


             <VerticalTimelineElement 

              className='vertical-timeline-element--education'
              date='2018 - 2021'
              iconStyle={ {background: '#3e497a', color: '#fff'}}
              icon={<SchoolIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>
                  Limkokwing University, Cyberjaya
                </h3>
                <p>Bachelor of Computer Science (Hons) Mobile Computing</p>
 
            </VerticalTimelineElement>


            <VerticalTimelineElement 

              className='vertical-timeline-element--education'
              date='2019 June - 2019 July'
              iconStyle={ {background: '#e9d35b', color: '#fff'}}
              icon={<WorkIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>
                Scicom(Msc) Sdn Bhd, Cyberjaya
                </h3>
                <p>Executive Customer Service</p>
 
            </VerticalTimelineElement>


            <VerticalTimelineElement 

              className='vertical-timeline-element--education'
              date='2013 - Present'
              iconStyle={ {background: '#e9d35b', color: '#fff'}}
              icon={<WorkIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>
                IP Photography
                </h3>
                <p>Freelance Photographer/Editor</p>
 
            </VerticalTimelineElement>

            

        </VerticalTimeline>
    </div>
    
      
  )
}

export default Experience