import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './NodeService';
import SidePanel from './SidePanel';
import SideLinks from './SideLinks';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import DataViewComponent from './DataViewComponent';

export default function BasicDemo() {
    const [selectedContent, setSelectedContent] = useState('content1'); // Initial content

    const handleContentChange = (content) => {
    setSelectedContent(content);
    };
    return (
        <div className='layout-container layout-wrapper layout-dark layout-static' data-theme="dark">

            <aside className="layout-sidebar">
                <SidePanel onContentChange={handleContentChange} />
                <SideLinks onContentChange={handleContentChange} />
            </aside>
            <div className="layout-content">
                <div className="layout-content-inner">
                <DataViewComponent/>

                    {selectedContent === 'content1' && <Monday />}
                    {selectedContent === 'content2' && <Tuesday />}
                    {selectedContent === 'content3' && <Wednesday />}
                    {selectedContent === 'content4' && <Thursday />}
                </div>
            </div>
            {/* <div className="grid">
                <div className="col-fixed">
                    
                </div>
                <div className="col">
                    
                </div>
            </div> */}
        </div>
        // <div className="card flex justify-content-center">
        //     <Tree value={nodes} className="w-full md:w-30rem" />
        // </div>
    )
}
        