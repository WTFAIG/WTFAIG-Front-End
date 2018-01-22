import React from "react";
import { Table, Checkbox, Header } from "semantic-ui-react";

export const PlaceRow = props => {
  return (
    <div className="PlaceRow">
      <Table.Row>
        <Table.Cell className="box">{props.name}</Table.Cell>
        <Table.Cell className="box">{props.heart}</Table.Cell>
        <Table.Cell className="box">{props.notes}</Table.Cell>
        <Table.Cell className="box">
          <Checkbox checked={props.checkmark} Lable="Visited" />
        </Table.Cell>
      </Table.Row>
    </div>
  );
};

export default PlaceRow;
