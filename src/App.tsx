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
  const [ingredients, setIngredients] = useState<Array<Object>>();

  useEffect(() => {
    getIngredients(db).then((result) => {
      setIngredients(result);
    });
  }, [db]);

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
  );

  return <>{ingredients && <Table tableData={ingredients} />}</>;
}

export default App;
