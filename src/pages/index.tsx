import React, { useState, useEffect, ChangeEvent, } from "react";
import type { HeadFC, PageProps } from "gatsby"
import '../style.css'
import { Link } from "gatsby"
import Typewriter from "typewriter-effect";
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
import transFog from "../images/TransFog.png"
import transFog2 from "../images/transfog2.png"


const IndexPage: React.FC<PageProps> = () => {
  const [express, setExpress] = useState<number>(1)
  const [start, setStart] = useState<boolean>(true)
  const [mcCollie, setCollie] = useState<boolean>(false)
  const [what, setWhat] = useState<boolean>(false)
  const [work, setWork] = useState<boolean>(false)
  const [artist, setArtist] = useState<boolean>(false)
  const [finished, setFinished] = useState<boolean>(false)
  const [others, setOthers] = useState<boolean>(false)
  const [engine, setEngine] = useState<boolean>(false)
  const [spyfx, setSpyfx] = useState<boolean>(true)
  const [prologue, setPrologue] =useState<boolean>(false)
  const [addInfo, setInfo] = useState<boolean>(false)
  const [count, setCount] = useState(0);
  const delay = 10;
  const [spyinterval, setSpyinterval] = useState<NodeJS.Timer>()
  const [twilightHome, setHome] = useState<boolean>(true)
  const [glade, setGlade] = useState<boolean>(true)
  const [options, setOptions] = useState<boolean>(false)
  const [trans, setTrans] = useState<boolean>(false)


  function handleClickHere() {

    setTrans(true)
    setTimeout(() => {
      setHome(false); }, 2500);
  }

  function handleClick() {
    setStart(false);
    setCollie(true);
    setExpress(2);
    setTimeout(() => {
      setExpress(1), setOptions(true); }, 4000);
  }

  function handleWhat() {
    setCollie(false)
    setWork(false)
    setArtist(false)
    setFinished(false)
    setOthers(false)
    setEngine(false)
    setWhat(true);
    setExpress(2)
    setTimeout(() => {
      setExpress(1); }, 5000);
  }

  function handleWork() {
    setCollie(false)
    setWhat(false)
    setArtist(false)
    setFinished(false)
    setOthers(false)
    setEngine(false)
    setWork(true);
    setExpress(4)
    setTimeout(() => {
      setExpress(3); }, 4000);
  }

  function handleArtist() {
    setCollie(false)
    setWhat(false)
    setWork(false)
    setFinished(false)
    setOthers(false)
    setEngine(false)
    setArtist(true);
    setExpress(2)
    setTimeout(() => {
      setExpress(1); }, 5000);
  }

  function handleFinished() {
    setCollie(false)
    setWhat(false)
    setWork(false)
    setArtist(false)
    setOthers(false)
    setEngine(false)
    setFinished(true);
    setExpress(4)
    setTimeout(() => {
      setExpress(3); }, 4000);
  }

  function handleOther() {
    setCollie(false)
    setWhat(false)
    setWork(false)
    setArtist(false)
    setFinished(false)
    setEngine(false)
    setOthers(true);
    setExpress(2)
    setTimeout(() => {
      setExpress(1); }, 3000);
  }

  function handleEngine() {
    setCollie(false)
    setWhat(false)
    setWork(false)
    setArtist(false)
    setOthers(false)
    setFinished(false)
    setEngine(true);
    setExpress(4)
    setTimeout(() => {
      setExpress(3); }, 3000);
  }

  function handleSpy() {
    setSpyfx(false)
    setPrologue(true)
    
    const intervalID = setInterval(() => {
      setCount(count => count + 1);
    }, 25);
    setSpyinterval(intervalID)
  }

  function handleInfo() {
    setPrologue(false)
    setInfo(true)
  }

  /* spy functions */
  function greeting() {
    var s = "Good morning or perhaps good evening recruiter"
    var start = 80
    var pause1 = 12
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else {
      return s.substring(0, Math.min(len, count - start - delay))
    }
  }

  function reasoning() {
    var s ="OPERATION: Spyfx is a dance team I directed in Spring 2023. I wanted to promote my team and I was very unhappy with a traditional google doc syllabus. Instead I created a fully interactive website. This included a password request screen and a similar scrolling text. I wanted every dancer who joined my team to be excited from the second they opened the welcome email."
    var start = 140
    var pause1 = 59
    var pause2 = 150
    var pause3 = 197
    var pause4 = 267
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay * 2) {
      return s.substring(0, pause2)
    }else if (count >= start + pause2 + delay * 2 && count < start + delay * 2 + pause3) {
      return s.substring(0, count - start - delay * 2 + 1)
    }else if (count >= start + pause3 + delay * 2 && count < start + pause3 + delay * 3) {
      return s.substring(0, pause3)
    }else if (count >= start + pause3 + delay * 3 && count < start + delay * 3 + pause4) {
      return s.substring(0, count - start - delay * 3 + 1)
    }else if (count >= start + pause4 + delay * 3 && count < start + pause4 + delay * 4) {
      return s.substring(0, pause4)
    }else {
      return s.substring(0, Math.min(len, count - start - delay * 4))
    }
  }

  function means() {
    var s = "The website was constructed using TypeScript, React, and Gatsby. The animations were created using a combination CSS and JavaScript. The design of the website is optimized to ensure compatibility on both mobile devices and laptops, considering that a significant number of college students will access it through their smartphones."
    var start = 600
    var pause1 = 64
    var pause2 = 132
    var pause3 = 231
    var len = s.length
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay * 2) {
      return s.substring(0, pause2)
    }else if (count >= start + pause2 + delay * 2 && count < start + delay * 2 + pause3) {
      return s.substring(0, count - start - delay * 2 + 1)
    }else if (count >= start + pause3 + delay * 2 && count < start + pause3 + delay * 3) {
      return s.substring(0, pause3)
    } else {
      return s.substring(0, Math.min(len, count - start - delay * 3))
    }
  }

  function next() {
    var s = "You can view the Original Website below. The password is PEANUTS. You can also view additional information about the OPERATION: Spyfx."
    var start = 1000
    var pause1 = 40
    var pause2 = 65
    var len = s.length
    if(count > 1300) {
      clearInterval(spyinterval)
    }
    if(count < start) {
      return ""
    } else if (count >= start && count < start + pause1) {
      return s.substring(0, count - start + 1)
    } else if(count >= start + pause1 && count < start + pause1 + delay) {
      return s.substring(0, pause1)
    } else if(count >= start + pause1 + delay && count < start + delay + pause2) {
      return s.substring(0, count - start - delay + 1)
    } else if (count >= start + pause2 + delay && count < start + pause2 + delay + delay) {
      return s.substring(0, pause2)
    } else {
      return s.substring(0, Math.min(len, count - start - delay - delay))
    }
  }

  function handleGlade() {
    setGlade(false)
  }

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
          <div ><a className="navlink" href="#demo">Demo Reel</a></div>
          <div ><a className="navlink" href="#twil">Twilight Market</a></div>
          <div ><a className="navlink"href="#spy">Operation: Spyfx</a></div>
          <div ><a className="navlink"href="#glade">Glade of the Gray</a></div>
          <div ><a className="navlink"href="#ink">Ink</a></div>
          <div ><Link className="navlink" to="/about">About</Link></div>
        </div>
        <div className="overLayer">
          <div className="demoReel" id = "demo">
              <div className="demoReelTitle"> <b>Kenneth's Demo Reel</b></div>
              <div className="iframe">
                <iframe width = "100%" height="100%" src="https://www.youtube.com/embed/SYO-4HqnuiA"
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
          <div className="TwilightMarket" id = "twil">
            <div className="image-stack">
              {twilightHome && (
                <React.Fragment>
                  <div className="shimmer1"><img className = "twilightimg" src={shimmer_1}/></div>
                  <div className="main"><img className = "twilightimg" src={TwilightFrame}/></div>
                  <div className="fog1"> <img className = "twilightimg" src={fog1}/></div>
                  <div className="fog2"> <img className = "twilightimg" src={fog2}/></div>
                  <div className="fog3"> <img className = "twilightimg" src={fog3}/></div>
                  <div className="button_container">
                  <button className="twilightbutton" onClick={handleClickHere}> </button>
                    <img className = "clickhere" src={clickhere}/>
                  </div>
                </React.Fragment>
              )}
              {trans && (
                <React.Fragment>
                  <div className="transfog1"> <img className = "twilightimg" src={fog1}/></div>
                  <div className="transfog2"> <img className = "twilightimg" src={fog2}/></div>
                  <div className="transfog3"> <img className = "twilightimg" src={fog3}/></div>
                  <div className="transfog4"> <img className = "twilightimg" src={transFog}/></div>
                  <div className="transfog5"> <img className = "twilightimg" src={transFog2}/></div>
                </React.Fragment>
              )}
              {!twilightHome && (
                <React.Fragment>
                  <div className="main"> <img className = "twilightimg" src={dialogue_ui}/></div>
                  <div className="main"> <img className = "twilightimg" src={trees}/></div>
                  <div className="fog1"> <img className = "twilightimg" src={mcCollieFog}/></div>
                  <div className="fog2"> <img className = "twilightimg" src={mcCollieFog2}/></div>
                {(express == 1 || express == 2) && (
                  <React.Fragment>
                    <div className ="bod"><img className = "twilightimg" src={bod}/> </div>
                    <div className ="head">
                      <div className="headsprite"><img className = "twilightimg" src={head}/> </div>
                      {express == 1 && (
                        <div className ="jaw"><img className = "twilightimg" src={jaw}/> </div>
                      )}
                      {express == 2 && (
                        <div className ="jawtalking"><img className = "twilightimg" src={jaw}/> </div>
                      )}
                      
                    </div>
                  </React.Fragment>
                )}
                {(express == 3 || express == 4) && (
                  <React.Fragment>
                    <div className ="bod"><img className = "twilightimg" src={angryBod}/> </div>
                    <div className ="angryhead">
                      <div className="headsprite"><img className = "twilightimg" src={angryHead}/></div>
                      {express == 3 && (
                        <div className ="angryjaw"><img className = "twilightimg" src={angryJaw}/> </div>
                      )}                
                      {express == 4 && (
                          <div className ="angryjawtalking "><img className = "twilightimg" src={angryJaw}/> </div>
                      )}    
                    </div>
                  </React.Fragment>
                )}

                {start && (
                  <React.Fragment>
                    <button className = "startbutton" onClick={handleClick}>Who are you???</button>
                    
                  </React.Fragment>
                )}
                {mcCollie && (
                  <div className = "McCollieIntro">
                  <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("Hello Human.")
                            .pauseFor(250)
                            .typeString(" Name's McCollie.")
                            .pauseFor(250)
                            .typeString(" Welcome to the Twilight Market.")
                            .start();
                        }}
                    />
                  </div>
                )}
                {what && (
                  <div className = "whatanswer"> 
                    <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("The Twilight Market is a Dark Fantasy Visual Novel started in 2021")
                            .start();
                        }}
                    />
                  </div>
                )}
                {work && (
                  <div className = "workanswer">
                    <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("Kenneth worked on UI, dialogue, enviorments, rigging, animations, etc")
                            .start();
                        }}
                    /></div>
                )}
                {artist && (
                  <div className = "artistanswer">
                     <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("My Buddy Calvin drew me!")
                            .pauseFor(250)
                            .typeString(" Check him out on instagram @calvin_beeman_weber")
                            .start();
                        }}
                    /></div>
                )}
                {finished && (
                  <div className = "finishedanswer">
                    <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("HAA! No.")
                            .pauseFor(250)
                            .typeString(" It's a very much WIP.")
                            .pauseFor(250)
                            .typeString(" We are recently free so ...")
                            .start();
                        }}
                    />
                  </div>
                )}
                {others && (
                  <div className = "otheranswer">
                  <Typewriter
                      options={{cursor: "", delay: 1,}}
                      onInit={(typewriter) => {
                        typewriter
                            .typeString("Noah Dilworth is the other programmer!")
                            .start();
                        }}
                    /></div>
                )}
                {engine && (
                  <div className = "engineanswer"><Typewriter
                  options={{cursor: "", delay: 1,}}
                  onInit={(typewriter) => {
                    typewriter
                        .typeString("This game is built using the Godot game engine")
                        .start();
                    }}
                /></div>
                )}
  
                {options && (
                  <React.Fragment>
                      <button className = "what" onClick={handleWhat}>What is the Twilight Market?</button>
                      <button className = "work" onClick={handleWork}>What did Kenneth do?</button>
                      <button className = "artist" onClick={handleArtist}>Who drew the Art?</button>
                      <button className = "finsihed" onClick={handleFinished}>Is it done?</button>
                      <button className = "others" onClick={handleOther}>Who else is working on this project?</button>
                      <button className = "engine" onClick={handleEngine}>What engine was this made in?</button>
                  </React.Fragment>
                )}
                </React.Fragment>
            )}
            </div>

          </div>
          <div className="operationSpyfx" id = "spy">
            <div className="image-stack-spy">
              {spyfx && (
                <React.Fragment>
                  <div className="prefix">OPERATION</div>
                  <div className="container">
                    <div className="glitch" data-text="SPYFX">SPYFX</div>
                  </div>
                  <button className="prologueLink" onClick={handleSpy}>PRESS HERE TO CONTINUE </button>
                </React.Fragment>
              )}
              {prologue && (
                <React.Fragment>
                  <div className="connection">Connection Established</div>
                  <div className="loading">Loading</div>
                  <div className="closed">Connection Closed</div>
                  <div className="line"><hr/></div>
                  <div className="greeting">{greeting()}</div>
                  <div className="reasoning">{reasoning()}</div>
                  <div className="means">{means()}</div>
                  <div className="next">{next()}</div>
                  {count > 1200 && (
                    <React.Fragment>
                      <div className="ogWebsite"> <a href="https://tinyurl.com/spyfx">Original Website</a></div>
                      <button className="additionalInfo" onClick={handleInfo}>Additional Info</button>
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
              {addInfo && (
                <React.Fragment>
                  <div className="AdditionalInfoPage">
                    <div className="addTitle"> Additional Information</div>
                    <div className="addBuffer">
                    <div className="Media">
                      <img className = "group" src={group}/>
                      <div className="iframespy">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s5hBdWsZ6DE?start=90" 
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                      encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className= "addtext"> Operation: SPYFX was a training dance team of spring of 2023. Over the period of 11 weeks we taught and blocked dance
                    choreo that my Co-directors and I created. Our team was the largest dance team for the semester, with a total of 52 dancers. 
                    <br></br> 
                    <br></br>
                    One of the reasons I wanted to direct was that I was always disappointed with every dance team aside from my first one.
                    I went in with the goal of creating an experience that would rival or surpass a dancer’s first team experience. In addition, I wanted
                    to re-introduce break dancing into the Berkeley Dance Community since covid killed the style at UC Berkeley.
                    <br></br>
                    <br></br>
                    <div className="ogWebsite"> <a href="https://tinyurl.com/spyfx">Original Website</a></div>
                    </div>
                    </div>
                  </div>
                </React.Fragment>
              )}
              <div className="scanlines"></div>
            </div>
          </div>
          <div className="glade" id = "glade">
            {glade && (
              <div className="glade-stack">
                <img className="cloud1" src={clouds}/>
                <img className="cloud2" src={clouds}/>
                <img className="mountain1" src={mountains}/>
                <img className="mountain2" src={mountains}/>
                <img className="distant1" src={distant}/>
                <img className="distant2" src={distant}/>
                <img className="trees1" src={gladetrees}/>
                <img className="trees2" src={gladetrees}/>
                <img className="grass1" src={grass}/>
                <img className="grass2" src={grass}/>
                <img className="title" src={title}/>
                <div className="gladebutton">
                  <button className="actualgladebutton" onClick={handleGlade}> </button>
                  <img className="gradebuttonimg" src={gladebutton}/>
                </div>
              </div>
            )}
            {!glade && (
              <div className="glade-stack">
                <img className="select" src={select}/>
                <div className="gladeStuff">
                  <div className="gladeframe"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/UyuIIs9Qpbc"
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                  <div className="gladeinfo"> I pitched Glade of the Gray in Fall 2020 as a turn-based card game inspired by Dominion and Darkest Dungeon. 
                  With the help of three collaborators, we developed the game over six weeks. I conceptualized the majority of the designs and fully implemented
                  the card-based battle system.
                  <br></br>
                  <br></br>
                  The game is avalible to play on <a href="https://fire2ken.itch.io/glade-of-the-gray>itch.io"> itch.io</a> on browser
                  </div>
                </div>
              </div>
            )}

          </div>
          <div className="Ink" id = "ink">
            <div className="inktitle">Ink</div>
            <div className="inkContent">
              <div className="inktext"> Ink is an animation created with Maya over a period of 3 weeks for UCBugg, a student-run 3D animation class. 
              I took charge of modeling, rigging, skinning, and animating the monster for the project. Furthermore, 
              I handled camera control and post-production editing of the recorded content.
              <br></br>
              <br></br>
              My partner, Cynthia Xiong, pitched the concept and took responsibility for modeling and skinning all other assets. 
              Additionally, she handled the coloring, shading, and lighting of every asset.
              </div>
              <div className="inkframe"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/BCw64MGOHVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
          </div>
        </div>
      </body>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kenneth's Portfolio</title>
