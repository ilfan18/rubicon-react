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
    <p className="r-p bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure, itaque earum sit aperiam impedit animi necessitatibus eaque maxime voluptates quaerat, nam amet assumenda dolor libero praesentium nihil totam facere.</p>
    <h2 className="r-h2">Underline</h2>
    <p className="r-p underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure, itaque earum sit aperiam impedit animi necessitatibus eaque maxime voluptates quaerat, nam amet assumenda dolor libero praesentium nihil totam facere.</p>
  </div>
  
);