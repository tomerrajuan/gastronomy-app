import axios from "axios";
import React, { ReactElement, useState } from "react";
import Button from "../atom/Button";
import DeleteItem from "./DeleteItem";

interface Props {
  rowItems: any;
  // id: number;
  getData: () => void;
}

export default function ActionsBar({ rowItems, getData }: Props): ReactElement {
  const [addItem, setAddItem] = useState(false);

  return (
    <div className="actions-bar">
      <div className="actions-bar-cell actions-bar-cell-first">
        <Button
          className="btn-add-item"
          label="+"
          onClick={() => setAddItem(!addItem)}
        />
      </div>

      {rowItems &&
        rowItems.map((item: any) => (
          <div className="actions-bar-cell">
            <DeleteItem key={item.id} id={item.id} getData={getData} />
          </div>
        ))}
    </div>
  );
}
