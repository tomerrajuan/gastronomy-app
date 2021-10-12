import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

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
  }, []);

  console.log("state is: ", ingredients);

  return (
    <div>
      {ingredients && ingredients.map((ingredient) => {
        return (
          <div>
            <h1>Name: {ingredient.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
