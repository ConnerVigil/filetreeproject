import React, { useState } from "react";

function App() { // This is rendering the page, you can set "parameters" on these elements
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="all_star.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>
      <Folder name="Pictures">
        <File name="dogs.jpeg"/>
        <File name="cats.png"/>
      </Folder>
    </Folder>
    <Folder name="Applications">
      <File name="Spotify"/>
      <File name="Steam"/>
      <File name="VScode"/>
    </Folder>
  </div>
}

const Folder = (props) => { // Renders a folder
  // Members, Variables
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children } = props; // declutter by not having to use props.everything
  const direction = isOpen ? 'down': 'right';

  // Functions
  const handleClick = () => setIsOpen(!isOpen);

  // HTML to inject
  return <div>
    <span onClick={handleClick} style={{ fontSize: '30px' }}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      {name}
    </span>
    
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => { // Renders a file
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  };

  return <div style={{ fontSize: '30px' }}>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
    {props.name}
  </div>
};





export default App;
