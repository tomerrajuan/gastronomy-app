import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const igredientsRef = collection(db, "ingredients");

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getDocs(igredientsRef);
      setIngredients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getIngredients();
  }, []);

  return (
    <div>
      {ingredients.map((ingredient) => {
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
