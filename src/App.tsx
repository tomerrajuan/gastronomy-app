import React, { useState, useEffect } from "react";
import { db } from "./firebase/config";
import { collection, Firestore, getDocs } from "firebase/firestore";
import Table from "./components/organism/Table";
<<<<<<< HEAD
import { getIngredients } from "./firebase/useFirestore";
=======
import "./assets/scss/app.scss";
>>>>>>> f3a77d7... [GMA-29] remove unnecessary code

function App() {
<<<<<<< HEAD
  const [ingredients, setIngredients] = useState<Array<Object>>();
=======
  //TODO: remove any
  const [ingredients, setIngredients] = useState<Array<Object>>();
  const igredientsRef = collection(db, "ingredients");
>>>>>>> 3479df4... [GMA-29] render tableRow using map

  useEffect(() => {
    getIngredients(db).then((result) => {
      setIngredients(result);
    });
  }, [db]);

<<<<<<< HEAD
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    [],
=======
      if (data) {
        setIngredients(data.docs.map((doc) => doc.data()));
      }
    };

    getIngredients();
  }, [igredientsRef]);

  console.log("ingredients are: ", ingredients);

  return (
    <>
      {ingredients && (
        <Table
          data={ingredients}
          colNames={[
            "category",
            "created at",
            "name",
            "price",
            "new price",
            "supplier",
            "unit",
          ]}
        />
      )}
    </>
>>>>>>> 3479df4... [GMA-29] render tableRow using map
  );

  return <>{ingredients && <Table tableData={ingredients} />}</>;
}

export default App;
