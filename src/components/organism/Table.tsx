import { DocumentData } from "firebase/firestore";
import React, { ReactElement } from "react";
import { Column, useTable } from "react-table";
import { ingredientsCol } from "../../data/columns";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";

interface Props {
  tableData: DocumentData[];
  className: string;
}

function Table({ tableData, className }: Props): ReactElement {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo<Column<DocumentData>[]>(
    () => ingredientsCol,
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {tableData && (
        <table className={className} {...getTableProps()}>
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
