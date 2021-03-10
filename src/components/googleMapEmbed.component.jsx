import React, { useEffect } from "react";
import Iframe from "react-iframe";
import "./googleMapsEmbed.styles.scss";

const GoogleMapEmbed = (props) => {
  useEffect(() => {}, [props.googleEmbedUrl]);
  return (
    <div className="google-map-code">
      <Iframe url={props.googleEmbedUrl} width="600px" height="400px" />
    </div>
  );
};
export default GoogleMapEmbed;
