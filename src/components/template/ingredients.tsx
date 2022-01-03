import React, { useState, useEffect } from "react";
import Table from "../organism/Table";
import axios from "axios";
import DeleteItem from "../molecules/DeleteItem";

function Ingredients() {
  const [ingredients, setIngredients] = useState<Array<Object>>();

  const getIngredients = () => {
    axios
      .get("http://localhost:3000/ingredients")
      .then(({ data }) => {
        console.log("data", data);
        setIngredients(data);
      })
      .catch((err) => {
        console.log("cant find ingredients", err);
      });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="page-layout">
      {ingredients && (
        <Table
          tableData={ingredients}
          className="ingredients-table"
          trClass="ingredients-table-row"
          tdClass="ingredients-table-row__item"
          thClass="ingredients-table-header"
        />
      )}
      <div className="table-actions">
        {ingredients &&
          ingredients.map((item: any) => (
            <DeleteItem key={item.id} id={item.id} getData={getIngredients} />
          ))}
      </div>
    </div>
  );
}

export default Ingredients;
