import React, { ReactElement } from "react";
import { useTable } from "react-table";
import { ingredientsCol } from "../../data/columns";

interface Props {
  tableData: any;
}

function Table({ tableData }: Props): ReactElement {
  const data = React.useMemo(() => tableData, []);
  console.log("data: ", tableData);

  const columns = React.useMemo<any>(() => ingredientsCol, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {tableData && (
        <table className="ingrediets-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="ingredients-table-header"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="ingredients-table-row" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="ingredients-table-row__item"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
