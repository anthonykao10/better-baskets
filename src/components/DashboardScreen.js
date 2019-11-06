import React from "react";
import {
  Link
} from 'react-router-dom'
 
import NewSessionButton from './DashboardComponents/NewSessionButton';
import Session from '../components/SessionComponents/Session';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Carousel.css';
import DashboardStatContainer from './DashboardComponents/DashboardStatContainer'
// import PracticeTimeBarChart from './DashboardComponents/PracticeTimeBarChart'

export default function DashboardScreen({userData, sessionData, shotData, addSession, setShotUploadComplete}) {

  const sessions = sessionData.map(
    session => {
      return (
        <Session
        key={session.id}
        sessionID={session.id} 
        date={session.start_time}
        shotData={shotData}
        />
      );
    }
  )

  const responsive = {
    desktop_wide: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1599, min: 1025 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  return (
    <div>
      <h3>{userData.username}'s Dashboard</h3>
      <NewSessionButton addSession={addSession} setShotUploadComplete={setShotUploadComplete}/>

      <br></br>
      <br></br>

      {/* <PracticeTimeBarChart></PracticeTimeBarChart> */}

      <br></br>
      <br></br>
      <DashboardStatContainer shotData={shotData} sessionData={sessionData}></DashboardStatContainer>

      <br></br>
      <br></br>

      <div className="Carousel"> 
      <Carousel
        swipeable={false}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        // centerMode={true}
      >
        {sessions}
      </Carousel> 
      </div>
    </div> 
  );
}
