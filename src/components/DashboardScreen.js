import React from "react"; 
import NewSessionButton from './DashboardComponents/NewSessionButton';
import Session from '../components/SessionComponents/Session';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Carousel.css';
import DashboardStatContainer from './DashboardComponents/DashboardStatContainer';

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

  //carousel responisve options
  const responsive = {
    desktop_wide: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1599, min: 1025 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  
  return (
    <div>
      <h2 className="titleHeader">{userData.username}'s Dashboard</h2>
      <img src="https://ca.slack-edge.com/TP0A7PQ7N-UP2KPLWLF-c8993b93ecf6-512" alt="profile" className="profilepic"></img>
      <br></br>
      <br></br>
      <NewSessionButton addSession={addSession} setShotUploadComplete={setShotUploadComplete}/>
      <br></br>
      <DashboardStatContainer shotData={shotData} sessionData={sessionData}/>
      <br></br>
      <br></br>
      <div className="Carousel"> 
      <Carousel
        swipeable={false}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {sessions}
      </Carousel> 
      </div>
    </div> 
  );
}
