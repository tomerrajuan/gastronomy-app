import { format } from "date-fns";

export const ingredientsCol = [
  {
    Header: "Item",
    accessor: "item",
  },
  {
    Header: "Unit",
    accessor: "unit",
  },
  {
    Header: "Price",
    accessor: "price",
  },

  {
    Header: "Supplier",
    accessor: "supplier",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Updated",
    accessor: "created_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd.MM.yyyy");
    },
  },
];
