import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"
import kenneth from "../images/kenneth.jpg"
import tree1 from "../images/tree1.png"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      <body>
        <div className="overLayer">
          <div className="Introduction">
            <img className = "kennethpng" src={kenneth}/>
            <div className = "introText">
              <div className="hello"> <b>Hi, I'm Kenneth</b></div>
              <div className="intro">As of Spring 2023, I am a UC Berkeley graduate with a degree in Computer Science. 
              My areas of expertise and passion lie in Game and Web development. I thoroughly
              enjoy the process of creating new projects and exploring innovative ideas.</div>
            </div>
          </div>
          <div className="demoReel">
              <div className="demoReelTitle"> <b>Demo Reel</b></div>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D_Oyplmhhv0" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
          <div className="TwilightMarket">
            <image className = "twilightimg" src={tree1}/>
          </div>
        </div>
      </body>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kenneth's Portfolio</title>
