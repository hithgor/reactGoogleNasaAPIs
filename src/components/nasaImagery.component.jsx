import React, { useEffect, useState } from "react";
import "./nasaImagery.styles.scss";

const NasaImagery = (props) => {
  const [nasaSourceImageUrl, setNasaSourceImageUrl] = useState("");

  useEffect(() => {
    var fetchUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&api_key=${props.API_KEY}`;
    setNasaSourceImageUrl(fetchUrl);
  }, [props]);

  return (
    <div className="nasaContainer">
      <img className="nasaSourceImage" src={nasaSourceImageUrl} alt="A picture is gonna show up after you select a location" />
    </div>
  );
};

export default NasaImagery;
