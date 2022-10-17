import React from 'react'
import DropZoneComponent from './dropzone_component/DropZoneComponent'

import DragDropFilePattern from './formPatterns/dragDropFilePattern/DragDropFilePattern'

const ImportByFile = () => {
    return (
        <div className='box'>
            <h2 className='header'>Import des utilisateurs</h2>
            {/* <DragDropFilePattern /> */}
            {/* <div style={{ background: "red", height: "5px", width: '100%' }}></div> */}
            <DropZoneComponent />
        </div>
    )
}

export default ImportByFile