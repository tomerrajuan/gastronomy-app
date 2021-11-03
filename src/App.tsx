import React, { useState, useEffect } from "react";
import { db } from "./firebase/config";
import Table from "./components/organism/Table";
import { getIngredients } from "./firebase/useFirestore";
import { DocumentData } from "firebase/firestore";

function App() {
  const [ingredients, setIngredients] = useState<DocumentData[]>();

  useEffect(() => {
    getIngredients(db).then((result) => {
      setIngredients(result);
    });
  }, [db]);

  return (
    <div className="App">
      {ingredients && (
        <Table className="ingredients-table" tableData={ingredients} />
      )}
    </div>
  );
}

export default App;
