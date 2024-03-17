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
import TreeViewComponent from './TreeView';
import AdvancedDataViewComponent from './AdvancedDataViewComponent'

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
                

                    {selectedContent === 'content1' && <TreeViewComponent />}
                    {selectedContent === 'content2' && <DataViewComponent/>}
                    {selectedContent === 'content3' && <AdvancedDataViewComponent />}
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
        