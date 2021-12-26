import axios from "axios";
import React, { useState } from "react";
import Button from "../atom/Button";
import Input from "../atom/Input";

interface Props {
  className?: string;
  rowItem?: any;
  columns: any;
  tableWidth: any;
}

interface initialState {
  user_id: number;
  item?: string;
  unit?: string;
  price?: number;
  supplier?: string;
  category?: string;
}

export default function AddItem({ className, columns, tableWidth }: Props) {
  const [newItem, setNewItem] = useState<initialState>({ user_id: 1 });

  const handleAddItem = () => {
    axios
      .post("http://localhost:3000/addItem", newItem)
      .then(({ data }) => {
        console.log("data returned from back", data);
      })
      .catch((err) => {
        console.log("cant add item", err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "number") {
      const toNumber = parseInt(e.target.value);
      setNewItem({ ...newItem, [e.target.name]: toNumber });
    } else {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    }
  };

  const inputType = (col: { accessor: string | undefined }, i: React.Key) => {
    if (col.accessor) {
      const inputProps = {
        key: i,
        name: col.accessor,
        type: "string",
        placeholder: col.accessor,
      };

      switch (col.accessor) {
        case "created_at":
          return (
            <Button key={i} label="+" type="button" onClick={handleAddItem} />
          );
        case "price":
          return (
            <Input
              {...inputProps}
              type="number"
              onChange={(e) => handleInputChange(e)}
            />
          );
        default:
          return (
            <Input
              {...inputProps}
              type="string"
              onChange={(e) => handleInputChange(e)}
            />
          );
      }
    }
  };

  return (
    <form
      className={className}
      onSubmit={handleAddItem}
      style={{
        maxWidth: tableWidth,
      }}
    >
      {columns.map((col: { accessor: string | undefined }, i: React.Key) =>
        inputType(col, i),
      )}
    </form>
  );
}
