import React from "react";
export default {
  title: "Typography"
};
export const DisplayHeading = () => (
  <div className="r-dispaly-heading">Display Heading</div>
);
export const H1 = () => (
  <h1 className="r-h1">Heading 1</h1>
);
export const H2 = () => (
  <h2 className="r-h2">Heading 2</h2>
);
export const H3 = () => (
  <h3 className="r-h3">Heading 3</h3>
);
export const H4 = () => (
  <h4 className="r-h4">Heading 4</h4>
);
export const H5 = () => (
  <h5 className="r-h5">Heading 5</h5>
);
export const H6 = () => (
  <h6 className="r-h6">Heading 6</h6>
);
export const Paragraph = () => (
  <div>
    <h2 className="r-h2">Default</h2>
    <p className="r-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure, itaque earum sit aperiam impedit animi necessitatibus eaque maxime voluptates quaerat, nam amet assumenda dolor libero praesentium nihil totam facere.</p>
    <h2 className="r-h2">Bold</h2>
    <p className="r-p r-p--bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure, itaque earum sit aperiam impedit animi necessitatibus eaque maxime voluptates quaerat, nam amet assumenda dolor libero praesentium nihil totam facere.</p>
    <h2 className="r-h2">Underline</h2>
    <p className="r-p r-p--underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure, itaque earum sit aperiam impedit animi necessitatibus eaque maxime voluptates quaerat, nam amet assumenda dolor libero praesentium nihil totam facere.</p>
  </div>
  
);
export const LabelText = () => (
  <div>
    <div className="r-label">UI label primary</div>
    <div className="r-label r-label--bold">UI label primary - bold</div>
    <div className="r-label r-label--underline">UI label primary - underlined</div>
    <div className="r-label r-label--bold r-label--underline">UI label primary - bold underlined</div>
    <br />
    <div className="r-label r-label--small">UI label primary small</div>
    <div className="r-label r-label--small r-label--bold">UI label primary small - bold</div>
    <div className="r-label r-label--small r-label--underline">UI label primary small - underlined</div>
    <div className="r-label r-label--small r-label--bold r-label--underline">UI label primary small - bold underlined</div>
    <br />
    <div className="r-label r-label--secondary">UI label secondary</div>
    <div className="r-label r-label--secondary r-label--bold">UI label secondary - bold</div>
    <div className="r-label r-label--placeholder">UI label placeholder</div>
    <div className="r-label r-label--disabled">UI label disabled field</div>
    <div className="r-label r-label--anchor">UI label anchor</div>
    <br />
    <div className="r-label r-label--enverted">UI label enverted</div>
    <div className="r-label r-label--enverted r-label--bold">UI label enverted bold</div>
    <div className="r-label r-label--small r-label--enverted">UI label enverted small</div>
    <div className="r-label r-label--small r-label--enverted bold">UI label enverted small bold</div>
    
    <br />
    <div className="r-label r-label--mono">UI label primary mono</div>
    <div className="r-label r-label--mono r-label--bold">UI label primary mono - bold</div>
    <div className="r-label r-label--mono r-label--underline">UI label primary mono - underlined</div>
    <div className="r-label r-label--mono r-label--bold r-label--underline">UI label primary mono - bold underlined</div>
    <br />
    <div className="r-label r-label--mono r-label--small">UI label primary mono small</div>
    <div className="r-label r-label--mono r-label--small r-label--bold">UI label primary mono small - bold</div>
    <div className="r-label r-label--mono r-label--small r-label--underline">UI label primary mono small - underlined</div>
    <div className="r-label r-label--mono r-label--small r-label--bold r-label--underline">UI label primary mono small - bold underlined</div>
    <br />
    <div className="r-label r-label--mono r-label--secondary">UI label mono secondary</div>
    <div className="r-label r-label--mono r-label--secondary r-label--bold">UI label mono secondary - bold</div>
    <div className="r-label r-label--mono r-label--placeholder">UI label mono placeholder</div>
    <div className="r-label r-label--mono r-label--disabled">UI label mono disabled field</div>
    <div className="r-label r-label--mono r-label--anchor">UI label mono anchor</div>
    <br />
    <div className="r-label r-label--mono r-label--enverted">UI label mono enverted</div>
    <div className="r-label r-label--mono r-label--enverted r-label--bold">UI label mono enverted bold</div>
    <div className="r-label r-label--mono r-label--small r-label--enverted">UI label mono enverted small</div>
    <div className="r-label r-label--mono r-label--small r-label--enverted r-label--bold">UI label mono enverted small bold</div>
  </div> 
);
export const Lists = () => (
  <div>
    <ul >
      <li>List item</li>
      <li>List item
        <ul >
          <li>List item
            <ul>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </li>
          <li>List item</li>
        </ul>
      </li>
      <li>List item</li>
    </ul>
    <br />
    <ol >
      <li>List item</li>
      <li>List item
        <ol >
          <li>List item
            <ol>
              <li>List item</li>
              <li>List item</li>
            </ol>
          </li>
          <li>List item</li>
        </ol>
      </li>
      <li>List item</li>
    </ol>
    <br />
  </div>
);