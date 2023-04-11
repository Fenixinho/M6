import React from "react";

function RightClickMenuComponent({ data }) {
    //definimos estado para que se muestre
  const menuStyles = {
    position: 'absolute',
    top: `${data.posY}px`,
    left: `${data.posX}px`
  };

  return (
    data.show ?
    <div style={menuStyles}>
      <p>primero</p>
      <p>segundo</p>
      <p>tercero</p>

    </div> :
    null
  );
}

export default RightClickMenuComponent;