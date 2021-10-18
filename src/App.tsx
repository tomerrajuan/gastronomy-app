import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Table from "./components/organism/Table";

function App() {
  //TODO: remove any
  const [ingredients, setIngredients] = useState<Array<any>>();
  const igredientsRef = collection(db, "ingredients");

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getDocs(igredientsRef);

      if (data) {
        setIngredients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    getIngredients();
  }, [igredientsRef]);

  return (
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
    ></Table>
  );
}

export default App;
