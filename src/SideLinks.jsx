import React from 'react';

function SideLinks({ onContentChange }) {
  const handleClick = (content) => {
    console.log(content)
    onContentChange(content);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleClick('content1')}>Content 1</li>
        <li onClick={() => handleClick('content2')}>Content 2</li>
        <li onClick={() => handleClick('content3')}>Content 3</li>
        <li onClick={() => handleClick('content4')}>Content 4</li>
        {/* Add more list items for other content */}
      </ul>
    </div>
  );
}

export default SideLinks;
