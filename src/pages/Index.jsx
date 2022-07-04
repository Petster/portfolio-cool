import React from 'react'
import TypeIt from 'typeit-react'
import Content from '../components/Content'

const Index = () => {
  return (
    <Content lines={15}>
      <div className='text-white' style={{lineHeight: '24px'}}>
        <TypeIt options={{
          strings: [
            "Hello! Welcome to Jason Palmeri's Portfolio!",
            "I am a student at Bellevue University with a passion for Front-End Web Development",
            "Have a look around!"
          ],
          speed: 40,
          waitUntilVisible: true
        }} />

      </div>
    </Content>
  )
}

export default Index