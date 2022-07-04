import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import Content from '../components/Content'

const Index = () => {
  return (
    <Content lines={3}>
      <div className='text-white' style={{lineHeight: '24.5px'}}>
        <TypewriterComponent
          options={{
            delay: 45,
            loop: false
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString('Hello! Welcome to Jason Palmeri\'s Portfolio!').pauseFor(400)
            .typeString('<br/>I am a student at Bellevue University with a passion for Front-End Web Development').pauseFor(400)
            .typeString(`<br/>Connect with me!`)
            .start();
          }}
        />
      </div>
    </Content>
  )
}

export default Index