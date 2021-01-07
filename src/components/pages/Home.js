import React from 'react';
import "../../App.css";
import "../HeroSection";
import {HeroSection} from "../HeroSection";
import {Cards} from "../Cards";
import {Footer} from "../Footer";

export const Home = () => {

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  )
}