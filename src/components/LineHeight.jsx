import React from 'react'

const LineHeight = ({lines}) => {
  let output = [];
  for(let x = 1; x <= lines; x++) {
    output.push(<p className='text-zinc-400 font-bold text-sm'>{x}</p>)
  }
  return output
}

export default LineHeight