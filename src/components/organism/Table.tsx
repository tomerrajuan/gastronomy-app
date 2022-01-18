import { DocumentData } from "firebase/firestore";
import React, { ReactElement } from "react";
import { Column, useTable, useSortBy } from "react-table";
import { ingredientsCol } from "../../data/columns";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";

// TODO: remove optional props
interface Props {
  tableData: any;
  className: string;
  trClass?: string;
  tdClass?: string;
  thClass?: string;
  getData: () => void;
}

function Table({
  tableData,
  className,
  trClass,
  tdClass,
  thClass,
  getData,
}: Props): ReactElement {
  const data = React.useMemo(() => tableData, [tableData]);

  const columns = React.useMemo<Column<DocumentData>[]>(
    () => ingredientsCol,
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      {data && (
        <table className={className} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <TableHeader
                key={headerGroup.id}
                headerGroup={headerGroup}
                className={thClass}
              />
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow
                  key={row.id}
                  rowItem={row}
                  trClass={trClass}
                  tdClass={tdClass}
                  getData={getData}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
