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
      .post("http://localhost:3001/delete/ingredient", { itemId: id })
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
      <Button
        className="btn btn-white btn-delete"
        label="x"
        onClick={toggleDeletePopup}
      />
      {isVisible && (
        <div className="popup-delete">
          <div className="popup-delete-inner">
            Are you sure you want to delete this item?
            <Button
              className="popup-delete-inner__button btn btn-blue"
              label="x"
              onClick={handleCancelDeleteItem}
            />
            <Button
              className="popup-delete-inner__button btn btn-blue"
              label="✓"
              onClick={handleDeleteItem}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteItem;
