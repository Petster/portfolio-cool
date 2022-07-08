import React from 'react'

const Content = ({sentences}) => {
  let output = [];
  for(let x = 0; x < sentences.length; x++) {
    let sentence = sentences[x].display;
    let padding = sentences[x].tabs;
    output.push(
      <div className='flex flex-row gap-5 text-white text-sm '>
        <div className='text-end w-16 text-zinc-500 font-bold'>{x+1}</div>
        <div className={`${padding}`}>
          <p>{sentence} {sentences[x].cursor ? (<span className='Typewriter__cursor'>|</span>) : ""}</p>
        </div>
      </div>
    )
  }
  return output
}

export default Content