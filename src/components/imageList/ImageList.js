import React from "react";

function ImageList(props) {
  const images = props.images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.webformatURL}
        alt="pixabay"
        width="100%"
        height="60%"
      />
    );
  });
  console.log(props);
  return <div>{images}</div>;
}

export default ImageList;
