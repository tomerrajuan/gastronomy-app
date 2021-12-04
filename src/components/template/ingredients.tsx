import React, { useState, useEffect } from "react";
import Table from "../organism/Table";
import axios from "axios";

function Ingredients() {
  const [ingredients, setIngredients] = useState<Array<Object>>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/ingredients")
      .then(({ data }) => {
        console.log("data", data);
        setIngredients(data);
      })
      .catch((err) => {
        console.log("cant find ingredients", err);
      });
  }, []);

  return (
    <div>
      <p>+ Add ingredient</p>
      {ingredients && (
        <Table
          tableData={ingredients}
          className="ingredients-table"
          trClass="ingredients-table-row"
          tdClass="ingredients-table-row__item"
          thClass="ingredients-table-header"
        />
      )}
    </div>
  );
}

export default Ingredients;