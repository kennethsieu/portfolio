import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"
import kenneth from "../images/kenneth.jpg"
import TwilightFrame from "../images/TwilightFrame.png"
import fog1 from "../images/fog1.png"
import fog2 from "../images/fog2.png"
import fog3 from "../images/fog3.png"
import shimmer_1 from "../images/shimmer_1.png"
import shimmer_2 from "../images/shimmer_2.png"
import dialogue_ui from "../images/dialogue_ui.png"
import trees from "../images/trees.png"
import bod from "../images/bod.png"
import jaw from "../images/jaw.png"
import head from "../images/Head.png"
import mcCollieFog from "../images/mcCollieFog.png"
import mcCollieFog2 from "../images/mcCollieFog2.png"
import angryBod from "../images/angyBod.png"
import angryJaw from "../images/AngyJaw.png"
import angryHead from "../images/RAGE.png"
import group from "../images/group.jpg"
import clouds from "../images/clouds.png"
import mountains from "../images/mountains.png"
import distant from "../images/distant.png"
import gladetrees from "../images/gladetrees.png"
import grass from "../images/grass.png"
import title from "../images/title_card.png"
import gladebutton from "../images/gladebutton.png"
import select from "../images/select.png"
import clickhere from "../images/clickhere.png"
import resume from "../KennethSieuResume.pdf"


const About: React.FC<PageProps> = () => {


  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Andika&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Headland+One&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
      <body>
        <div className="navbar">
          <div ><Link className="navLink" to="/">Works</Link></div>
        </div>
        <div className="overLayer">
          <div className="Introduction">
            <div className="about">
                <img className = "kennethpng" src={kenneth}/>
                <div className = "introText">
                    <div>
                        <div className="hello"> <b>Hi, I'm Kenneth</b></div>
                        <div className="intro"> As of Spring 2023, I am a UC Berkeley graduate with a degree in Computer Science. My areas of expertise and passion lie in Game and Web development. I thoroughly enjoy the process of creating new projects and exploring innovative ideas.</div>
                    </div>
                    <div className="contact">
                        <div className="contacttitle">Contact Information</div>
                        <div className="contacttext"> Email: kennethsieu14@gmail.com</div>
                        <div className="contacttext"><a className="resume" href="https://docs.google.com/document/d/1D6ZAx_-ToEZc6_llPcp2o8FICQZRzxu7/edit?usp=sharing&ouid=108128170449060245009&rtpof=true&sd=true">Resume </a></div>
                        <div className="contacttext"><a className="resume" href="https://www.linkedin.com/in/kenneth-sieu/">LinkedIn</a></div>
                    </div>
                </div>
            </div>

                

          </div>

        </div>
      </body>
    </main>
  )
}

export default About

export const Head: HeadFC = () => <title>About</title>
