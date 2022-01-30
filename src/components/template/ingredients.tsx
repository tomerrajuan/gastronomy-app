import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Input from "../atom/Input";
import DeleteItem from "../molecules/DeleteItem";
import Button from "../atom/Button";
import Table from "../organism/Table";
import ActionsBar from "../molecules/ActionsBar";
import { useSelector } from "react-redux";
import { SelectIsAddItemForm } from "../../redux/slices/uiSlice";

function Ingredients() {
  const [ingredients, setIngredients] = useState<Array<Object>>();
  const [searchInput, setSearchInput] = useState<String>("");
  const [error, setError] = useState<Boolean>(false);

  const isAddItemForm = useSelector(SelectIsAddItemForm);

  const getIngredients = () => {
    axios
      .get("http://localhost:3001/ingredients")
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
        .get(`http://localhost:3001/ingredients/search/${searchInput}`)
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

  return (
    <>
      {ingredients && (
        <>
          <Input
            className="search-item"
            name={"search"}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search..."
          />
          {error && <p>No item is found!</p>}

          <div className="wrapper">
            <Table
              tableData={ingredients}
              className="ingredients-table"
              trClass="ingredients-table-row"
              tdClass="ingredients-table-row__item"
              thClass="ingredients-table-header"
              addItem={isAddItemForm}
            />

            <ActionsBar rowItems={ingredients} getData={getIngredients} />
          </div>
        </>
      )}
      {!ingredients && <div></div>}
    </>
  );
}

export default Ingredients;
