import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import {useLineNumber} from "../context/LineNumberContext";

const Bottom = () => {
const { lineNumber } = useLineNumber();
  return (
    <div className='px-4 text-white vs-bottom flex flex-row content-center items-center justify-center'>
        <div className='flex flex-row gap-2'>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'><FontAwesomeIcon icon={faCodeBranch} /> main*</div>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'><FontAwesomeIcon icon={faArrowsRotate} /></div>
            <div className='flex flex-row gap-2 hover:bg-blue-400 px-2 cursor-pointer'>
                <div><FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> 0</div>
                <div><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> 3</div>
                <div><FontAwesomeIcon icon="fa-solid fa-circle-info" /> 12</div>
            </div>
        </div>
        <div className='flex-grow'></div>
        <div className='flex flex-row'>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'>Ln {lineNumber || "10"}, Col 15</div>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'>Spaces: 4</div>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'>UTF-8</div>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'>CRLF</div>
            <div className='hover:bg-blue-400 px-2 cursor-pointer'>{`{ }`} JavaScript React</div>
        </div>
    </div>
  )
}

export default Bottom