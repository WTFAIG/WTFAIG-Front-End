import React, { Component } from "react";
import PlaceRow from "./PlaceRow";
import { Table, Checkbox, Header } from "semantic-ui-react";

export const PlaceTable = props => {
  let renderPlaces = props => {
    return props.places.map(placeRow => {
      return (
        <PlaceRow
          name={placeRow.name}
          heart={placeRow.heart}
          notes={placeRow.notes}
          checkmark={placeRow.checkmark}
        />
      );
    });
  };
  return (
    <div className="PlaceCard">
      <Table>
        <Table.Header width={10}>
          <Table.Row>
            <Table.HeaderCell className="tablehead">Place</Table.HeaderCell>
            <Table.HeaderCell className="tablehead">HEART</Table.HeaderCell>
            <Table.HeaderCell className="tablehead">Notes</Table.HeaderCell>
            <Table.HeaderCell className="tablehead">Visited</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderPlaces(props)}</Table.Body>
      </Table>
    </div>
  );
};

export default PlaceTable;
