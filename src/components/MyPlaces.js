import React from "react";
import PlaceTable from "./PlaceTable";

export const MyPlaces = props => {
  return (
    <div className="MyPlaces">
      <PlaceTable places={props.places} />
    </div>
  );
};

export default MyPlaces;
