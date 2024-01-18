import React from 'react';
import Agency from './agency';
import ServiceArea from './serviceArea';
import AboutCompany from './aboutCompany';
import WorkGallery from './workGallery';
import Testimonial from './testimonial';
import Brands from './brands';
import Team from './team';
import Meeting from './meeting';
import Blog from './blog';

export default function Home() {
  return (
    <>
    <Agency />
    <ServiceArea />
    <AboutCompany />
    <WorkGallery />
    <Testimonial />
    <Brands />
    <Team />
    <Meeting />
    <Blog />
    </>
  )
}
