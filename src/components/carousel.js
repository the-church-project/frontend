import React, { Component } from 'react';
import { CustomCard } from '../components'
import { Container } from 'react-bootstrap';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// // or
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// // or
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Link } from 'react-router-dom';

{/* <Carousel
               centerMode={true}
               // centerSlidePercentage={"50%"}
               emulateTouch={true}
               showArrows={false}
               showThumbs={false}
               dynamicHeight={false}
               showIndicators={false}
               showStatus={false}
               autoPlay={false}
               stopOnHover={true}
               onClickItem={(item, key) => console.log(item, key)}
            >
               <CustomCard className="mx-3" maxheight="500px"></CustomCard>
               <CustomCard className="mx-3" maxheight="500px"></CustomCard>
            </Carousel> */}


class CustomCarousel extends Component {
   render() {
      return (
         <Splide options={{
            rewind: true,
            // height:"50vh",
            type: this.props.cardcontentlist ? 'loop' : false,
            perPage: 2,
            padding: {
               left: '0rem',
               right: '5rem',
            },
            lazyLoad: 'nearby',
            gap: '.1rem',
            pagination: false,
            arrows: false,
            fixedHeight: "40vh",
            breakpoints: {
               640: {
                  // heightRatio: 1.3,
                  perPage: 1,
                  fixedHeight: "50vh",
               },
            },
         }}>
            {this.props.cardcontentlist ? this.props.cardcontentlist.map((item, key) => (
               <SplideSlide key={key}>
                  <Link to={item.href}>
                     <CustomCard className="mx-3" {...item} />
                  </Link>
               </SplideSlide>
            )) : (
               <SplideSlide>
                  <CustomCard title="No upcoming events" description="refresh or come back later" className="mx-3" />
               </SplideSlide>)}
         </Splide>
      );
   }
};
export default CustomCarousel