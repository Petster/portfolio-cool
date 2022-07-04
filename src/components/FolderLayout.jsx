import { faAngleDown, faAngleRight, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react'

const FolderLayout = ({title, color, children, initState, padding}) => {

const [folderState, setFolderState] = useState(initState);

  return (
    <>
    <div onClick={() => setFolderState(!folderState)} className={`font-normal text-sm p-0.5 hover:bg-zinc-700 cursor-pointer ${padding}`}>
    <FontAwesomeIcon className='pr-2' icon={folderState ? faAngleDown : faAngleRight} />
    <FontAwesomeIcon className={color} icon={faFolder} /> {title}
  </div>
  {children && <div className={`${folderState ? "" : "hidden"}`}>{children}</div>}
  </>
  )
}

export default FolderLayout