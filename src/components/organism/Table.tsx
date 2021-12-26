import { DocumentData } from "firebase/firestore";
import { Column, useTable, useSortBy } from "react-table";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { ingredientsCol } from "../../data/columns";
import TableHeader from "../molecules/TableHeader";
import TableRow from "../molecules/TableRow";
import Button from "../atom/Button";
import AddItem from "../molecules/AddItem";

// TODO: remove optional props
interface Props {
  tableData: any;
  className: string;
  trClass?: string;
  tdClass?: string;
  thClass?: string;
}

function Table({
  tableData,
  className,
  trClass,
  tdClass,
  thClass,
}: Props): ReactElement {
  const data = React.useMemo(() => [...tableData], [tableData]);

  const columns = React.useMemo<Column<DocumentData>[]>(
    () => ingredientsCol,
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const [tableWidth, setTableWidth] = useState(null);

  const tableRef = useRef<any>();

  // check width of table for addItem width
  useEffect(() => {
    const tableWidth = tableRef.current.offsetWidth;
    if (tableWidth) {
      setTableWidth(tableWidth);
    }
  }, [tableRef]);

  return (
    <>
      <Button
        className="ingredients-table_add-ingredient-button"
        label="add ingredient"
        onClick={() => setAddItem(!addItem)}
      />

      {addItem && (
        <AddItem
          className={"add-item-form"}
          rowItem={rows[0]}
          columns={columns}
          tableWidth={tableWidth}
        />
      )}

      {data && (
        <table className={className} {...getTableProps()} ref={tableRef}>
          <thead>
            {headerGroups.map((headerGroup, idx) => (
              <TableHeader
                key={idx}
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
