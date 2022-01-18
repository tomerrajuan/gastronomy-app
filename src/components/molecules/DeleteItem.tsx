import axios from "axios";
import React, { ReactElement } from "react";
import Button from "../atom/Button";

interface Props {
  id: number;
  getData: () => void;
}

function DeleteItem({ id, getData }: Props): ReactElement {
  const handleDeleteTableItem = () => {
    axios
      .post("http://localhost:3000/delete/ingredient", { itemId: id })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("error at delete table item", err);
      });
  };

  return (
    <Button
      className="btn-delete"
      label="Delete"
      onClick={handleDeleteTableItem}
    />
  );
}

export default DeleteItem;
