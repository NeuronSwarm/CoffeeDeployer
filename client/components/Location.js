import React from 'react';

const Location = (props) => {
  var commaDelimiter = props.location.indexOf(',') 
  if(commaDelimiter == -1) commaDelimiter = props.location.length
  var summaryAddress = props.location.substring(0, commaDelimiter)
  return (
    <div className="cups-today" > { summaryAddress } </div>
  );
};

export default Location;