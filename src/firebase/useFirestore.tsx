// export default useFirestore;
import { collection, Firestore, getDocs } from "firebase/firestore";

export async function getIngredients(db: Firestore) {
  const ingredientsCol = collection(db, "ingredients");
  const ingredientSnapshot = await getDocs(ingredientsCol);
  const ingredientsList = ingredientSnapshot.docs.map((doc) => doc.data());

  return ingredientsList;
}
