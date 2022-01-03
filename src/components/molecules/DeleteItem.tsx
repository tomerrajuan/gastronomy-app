import axios from "axios";
import React, { ReactElement } from "react";
import Button from "../atom/Button";

interface Props {
  id: number;
  getData: () => void;
}

function DeleteItem({ id, getData }: Props): ReactElement {
  const handleDelete = () => {
    axios
      .post("http://localhost:3000/delete/ingredient", { itemId: id })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("cant delete item", err);
      });
  };

  return (
    <Button className="delete-btn" label="Delete" onClick={handleDelete} />
  );
}

export default DeleteItem;
