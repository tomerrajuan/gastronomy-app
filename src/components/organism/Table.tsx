import React, { ReactElement } from "react";
import { useTable } from "react-table";
import { ingredientsCol } from "../../data/columns";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";

interface Props {
  tableData: any;
  tableClass: string;
  trClass: string;
  tdClass: string;
  thClass: string;
}

function Table({
  tableData,
  tableClass,
  trClass,
  tdClass,
  thClass,
}: Props): ReactElement {
  const data = React.useMemo(() => tableData, []);
  console.log("data: ", tableData);

  const columns = React.useMemo<any>(() => ingredientsCol, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {tableData && (
        <table className={tableClass} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <TableHeader headerGroup={headerGroup} className={thClass} />
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow rowItem={row} className={trClass} tdClass={tdClass} />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
