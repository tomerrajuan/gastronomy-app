import React, { useState, useEffect } from "react";
import { db } from "./firebase/config";
import Table from "./components/organism/Table";
import { getIngredients } from "./firebase/useFirestore";

function App() {
  const [ingredients, setIngredients] = useState<Array<Object>>();

  useEffect(() => {
    getIngredients(db).then((result) => {
      setIngredients(result);
    });
  }, [db]);

  return (
    <div className="App">
      {ingredients && <Table tableData={ingredients} />}
    </div>
  );
}

export default App;
