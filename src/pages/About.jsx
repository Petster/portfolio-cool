import React from 'react'
import Content from '../components/Content';
import myface from '../img/myface.jpg'
import deans2021 from '../img/2021_deans.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
  return (
    <Content lines={25} optional_children={
      <div className='flex flex-grow'>
        <div className='mx-auto flex flex-row'>
          <div className='flex flex-grow justify-end'>
            <a href="https://www.credly.com/badges/dd9160b7-a2e8-4dad-94c3-4048b83e09eb/public_url" target="_blank">
              <span className='sr-only'>2021 Deans Winter List Badge</span>
              <LazyLoadImage alt={"2021 Deans Winter List Badge"} effect='blur' src={deans2021} className='border border-black shadow-2xl rounded-full h-32 w-32' />
            </a>
          </div>
          <div>
            <LazyLoadImage alt={"It's Me!"} effect='blur' src={myface} className='border border-black shadow-2xl rounded-full h-72 w-72' />
          </div>
        </div>
      </div>
    }>
      <div className='text-white flex flex-col'>
        <div className='about-text' style={{lineHeight: '24.5px'}}>
          <p>Hey! My name is Jason Palmeri, I'm 21 years old with an Associates Degree in Web Application Development. I am currently enrolled at Bellevue University for their Software Development Bachelors Program and expect to graduate mid 2023.</p>
        </div>
        <br/>
        <div className='about-text pt-1.5' style={{lineHeight: '26.2px'}}>
          <p>When I was younger I was always fascinated with technology, I would spend most of my free time playing video games, watching youtube and twitch, and learning as much as I could about the things I loved. I loved to play around with the junk computers that my father had down in the basement, and with a little help from youtube I taught myself about computer building, and have had my own custom built computer ever since. Having always been interested in youtube and twitch, I eventually saw myself creating videos and live streaming, though I didn't have many viewers or subscribers I kept uploading and streaming, and learning to get better at using the tools available to me like Adobe Premiere Pro, Sony Vegas, and Adobe Photoshop.</p>
        </div>
        <br/>
        <div className='about-text pt-2.5' style={{lineHeight: '25.5px'}}>
          <p>Creating things has always been something that was interesting to me, I always admired the things people built online, watching people build replica game items in real life, creating apps, and games. I always wanted to do these things, but never took the initiative. When sophomore year of High School rolled around I had the opportunity to take a new intro to web design and development class. It was my instructor Mark Illingworth who really got me interested in programming, the way he taught the class made it fun and exciting, and he always had something challenging for us to learn. After that class I was on a non-stop journey, I wanted to learn as much as I could. I continued my education at Nashua Community College where I learned new programming languages, and went more indepth into web development and design.</p>
        </div>
        <br/>
        <div className='about-text pt-2' style={{lineHeight: '25.5px'}}>
          <p>As I work on finishing my Bachelor's degree at Bellevue I am seeking Internships focused on Web Development and Software Development. I am also available for freelance work! Connect with me</p>
        </div>
      </div>
    </Content>
  )
}

export default About