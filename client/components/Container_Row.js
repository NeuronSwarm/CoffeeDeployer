import React from 'react';

var divStyle = {
  height: '250px'
}
const Container_Row = (props) => {

  return (
    <div style= {divStyle}>
      {props.children}
    </div>
  );
};

export default Container_Row;