import React, { useState, useEffect } from "react";
import Table from "../organism/Table";
import axios from "axios";
import Input from "../atom/Input";
import DeleteItem from "../molecules/DeleteItem";
import Button from "../atom/Button";

function Ingredients() {
  const [ingredients, setIngredients] = useState<Array<Object>>();
  const [searchInput, setSearchInput] = useState<String>("");
  const [error, setError] = useState<Boolean>(false);

  const getIngredients = () => {
    axios
      .get("http://localhost:3000/ingredients")
      .then(({ data }) => {
        setIngredients(data);
      })
      .catch((err) => {
        console.log("cant find ingredients", err);
      });
  };

  useEffect(() => {
    let abort: Boolean;
    // if input is empty request the table from the database again
    if (searchInput === "") {
      getIngredients();
    }
    if (searchInput) {
      axios
        .get(`http://localhost:3000/ingredients/search/${searchInput}`)
        .then((items: any) => {
          if (!abort) {
            if (!items.data.length) {
              setError(true);
            } else {
              setError(false);
              setIngredients(items.data);
            }
          }
        })
        .catch((e: Error) => {
          setError(true);
          console.log("cant find items", e);
        });
    }
    return () => {
      abort = true;
    };
  }, [searchInput]);

  const handleAddIngredient = () => {};

  return (
    <>
      <Button
        className="ingredients-table_add-ingredient-button"
        label="add ingredient"
        onClick={handleAddIngredient}
      />
      {ingredients && (
        <Table
          tableData={ingredients}
          className="ingredients-table"
          trClass="ingredients-table-row"
          tdClass="ingredients-table-row__item"
          thClass="ingredients-table-header"
          getData={getIngredients}
        />
      )}
    </>
  );
}

export default Ingredients;
