import axios from "axios";
import React, { ReactElement, useState } from "react";
import Button from "../atom/Button";

interface Props {
  id: number;
  getData: () => void;
}

function DeleteItem({ id, getData }: Props): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleDeleteItem = () => {
    axios
      .post("http://localhost:3000/delete/ingredient", { itemId: id })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("error at delete table item", err);
      });
  };

  const toggleDeletePopup = () => {
    setIsVisible(!isVisible);
  };

  const handleCancelDeleteItem = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Button className="btn-delete" label="X" onClick={toggleDeletePopup} />
      {isVisible && (
        <div>
          Are you sure you want to delete this item?
          <Button className="" label="✕" onClick={handleCancelDeleteItem} />
          <Button className="" label="✓" onClick={handleDeleteItem} />
        </div>
      )}
    </>
  );
}

export default DeleteItem;
