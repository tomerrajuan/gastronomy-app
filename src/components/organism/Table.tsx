import React, { ReactElement } from "react";
import { Column, useTable } from "react-table";
import { ingredientsCol } from "../../data/columns";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";

interface Props {
  tableData: any;
}

function Table({ tableData }: Props): ReactElement {
  const data = React.useMemo(() => tableData, []);
  console.log("data: ", tableData);

  const columns = React.useMemo<Column<{}>[]>(() => ingredientsCol, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {tableData && (
        <table className="ingrediets-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <TableHeader
                headerGroup={headerGroup}
                className="ingredients-table-row"
              />
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow rowItem={row} className="ingredients-table-row" />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
