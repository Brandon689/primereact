import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './services/NodeService';

export default function TreeViewComponent() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <h5>Files</h5>
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full" />
        </div>
    )
}