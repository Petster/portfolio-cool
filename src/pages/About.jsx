import React, {useEffect} from 'react'
import Content from '../components/Content';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AboutMeContent} from "../data/ContentData";
import {useLineNumber} from "../context/LineNumberContext";
import {useWindowMenu} from "../context/WindowMenuContext";
import myFace from '../img/myface_transparent.png'
import {Link} from "react-router-dom";

const About = () => {
    const { setLineNumber } = useLineNumber();
    const { setCurrentPage } = useWindowMenu();

    useEffect(() => {
        setLineNumber("45");
        setCurrentPage("About.jsx")
    }, [setLineNumber, setCurrentPage]);

    const pStyle = "text-left text-lg leading-loose";
    const hStyle = "text-xl underline font-bold";
    const liStyle = "text-lg list-disc leading-loose ml-6"

    const today = new Date();
    const birthday = new Date("October 30 " + today.getFullYear());
    let age = parseInt(today.getFullYear().toString().substring(2));

    if(today <= birthday) {
        age -= 1;
    }

      return (
          <div className='flex flex-row gap-5 text-white text-sm p-4'>
          <section className="flex flex-grow items-center justify-center bg-port sm:p-2">
              <div className="flex">
                  <div className="t-bg p-3 rounded-none md:rounded-lg text-white">
                      <div className="p-12 flex flex-col space-y-4 md:float-right float-none text-center">
                          <img alt="My Face" src={myFace}
                                 className="shadow-2xl rounded-full md:h-72 md:w-72 w-96 mx-auto md:mx-none"/>
                      </div>
                      <br/>
                      <p className={pStyle}>
                          <span className={hStyle}>Hey! My name is Jason Palmeri</span>, I&apos;m {age} years old with a
                          Bachelors in Software Development. Graduated at Bellevue University in 2023 in their Software
                          Development Program</p>
                      <br/>
                      <h1 className={hStyle}>Early Life</h1>
                      <p className={pStyle}>When I was younger I was always fascinated with technology, I would spend
                          most of my free time playing video games, watching youtube and twitch, and learning as much as
                          I could about the things I loved. I loved to play around with the junk computers that my
                          father had down in the basement, and with a little help from youtube I taught myself about
                          computer building, and have had my own custom built computer ever since. Having always been
                          interested in youtube and twitch, I eventually saw myself creating videos and live streaming,
                          though I didn&apos;t see much success, I kept uploading and streaming, and learning to get
                          better at using the tools available to me like Adobe Premiere Pro, Sony Vegas, and Adobe
                          Photoshop.</p>
                      <br/>
                      <h1 className={hStyle}>Path to Programming</h1>
                      <p className={pStyle}>Creating things has been a passion of mine ever since I can remember. I
                          always admired the things people built online, watching people build replica game items in
                          real life, creating apps, and games. I always wanted to do these things, but never took the
                          initiative. When sophomore year of High School rolled around I had the opportunity to take a
                          new intro to web design and development class. It was my instructor Mark Illingworth who
                          really got me interested in programming, the way he taught the class made it fun and exciting,
                          and he always had something challenging for us to learn. After that class I was on a non-stop
                          journey, I wanted to learn as much as I could. I continued my education at Nashua Community
                          College where I learned new programming languages, and went more indepth into web development
                          and design.</p>
                      <br/>
                      <h1 className={hStyle}>This Portfolio</h1>
                      <p className={pStyle}>
                          This version of my portfolio was built using Vite React and Tailwind CSS. I wanted to see if I could recreate a VS-Code feeling website with some working buttons and such. You can view the code for this website <a href={"https://github.com/Petster/vscode-portfolio"} target={"_blank"} className={'text-purple-300 hover:underline'}>Here</a>. You can view the code for my normal portfolio website <a href="https://github.com/Petster/jason-palmeri-portfolio" target="_blank" className="text-purple-300 hover:underline">Here</a> and the code for my older (React) version <a href="https://github.com/Petster/react-portfolio" target="_blank" className="text-purple-300 hover:underline">Here</a></p>
                      <br/>
                      <h1 className={hStyle}>Today</h1>
                      <p className={pStyle}>Today I work at Pinpoint Global as a Software Automation Engineer for their
                          suite of LMS and Medicare sites to provide customers with online certification training. My
                          duties have included:</p>
                      <ul>
                          <li className={liStyle}>Writing and Executing test cases</li>
                          <li className={liStyle}>Creating Automation testing software (via Selenium)</li>
                          <li className={liStyle}>Creating Other Internal tools to help the support team</li>
                      </ul>
                      <p className={pStyle}>Being at Pinpoint has been an amazing experience, and I continue to learn
                          more every day.</p>
                      <p className={pStyle}>I am always open to new project ideas and opportunities, so feel free
                          to <Link className={'text-purple-300 hover:underline'} to={'/connect'}>Connect</Link> with
                          me</p>
                  </div>
              </div>
          </section>
          </div>
      )
}

export default About