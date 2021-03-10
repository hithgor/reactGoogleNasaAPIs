import React, { useState } from "react";
import Geocoder from "react-geocoder-autocomplete";
import GoogleMapEmbed from "./googleMapEmbed.component";
import NasaImagery from "./nasaImagery.component";

import "./geobox.styles.scss";

const Geobox = () => {
  const [googleEmbedUrl, setGoogleEmbedUrl] = useState(
    "https://www.google.com/maps/embed/v1/search?q=Gliwice&key=AIzaSyCyaLBlvweP01cGCwu0i7RG5NmxicfQtrQ"
  );
  const [longitudeProp, setLongitudeProp] = useState(0);
  const [latitudeProp, setLatitudeProp] = useState(0);

  const API_ACCESS_TOKEN =
    "pk.eyJ1IjoiaGl0aGdvciIsImEiOiJja20zajJjc240eTVpMm9uMTR6NGx3OWJxIn0._CtTWLT6iGME0c0XHy1iMA";
  const NASA_API_ACCESS_TOKEN = "0xzBOkCjEXSsEvcTx7zYt5tb2bcdJO5lICNlxtrK";

  const setOurStateValues = (value) => {
    console.log(value);
    setGoogleEmbedUrl(
      `https://www.google.com/maps/embed/v1/search?q=${value.place_name}&key=AIzaSyCyaLBlvweP01cGCwu0i7RG5NmxicfQtrQ`
    );
    console.log(value.geometry.coordinates[0]);
    setLongitudeProp(value.geometry.coordinates[0]);
    setLatitudeProp(value.geometry.coordinates[1]);
  };

  return (
    <section className="geoboxSection">
        <h1>Write in a location, select one from autocompletion list and wait a few seconds.</h1>
      <div className="geocoderContainer">
        <Geocoder
          accessToken={API_ACCESS_TOKEN}
          onSelect={(value) => setOurStateValues(value)}
        />
      </div>
      <div className="mapImagesContainer">
        <GoogleMapEmbed googleEmbedUrl={googleEmbedUrl} />
        <NasaImagery
          longitude={longitudeProp}
          latitude={latitudeProp}
          API_KEY={NASA_API_ACCESS_TOKEN}
        />
      </div>
    </section>
  );
};

export default Geobox;
