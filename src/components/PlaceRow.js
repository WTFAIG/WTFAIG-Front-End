import React from "react";
import { Table, Checkbox, Header } from "semantic-ui-react";

export const PlaceRow = props => {
  return (
    <div className="PlaceRow">
      <Table.Row>
        <Table.Cell className="cell">{props.name}</Table.Cell>
        <Table.Cell className="cell">{props.heart}</Table.Cell>
        <Table.Cell className="cell">{props.notes}</Table.Cell>
        <Table.Cell className="cell">
          <Checkbox checked={props.checkmark} Lable="Visited" />
        </Table.Cell>
      </Table.Row>
    </div>
  );
};

export default PlaceRow;
