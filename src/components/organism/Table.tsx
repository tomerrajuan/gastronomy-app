import React, { ReactElement } from "react";
import TableRow from "../molecules/TableRow";

interface Props {
  className?: string;
  data: any;
  colNames: string[];
}

function Table({ className, data, colNames }: Props): ReactElement {
  return (
    <table className={className}>
      <thead>
        <TableRow
          colNames={[
            "category",
            "created at",
            "name",
            "price",
            "new price",
            "supplier",
            "unit",
          ]}
          isHeader
        />
      </thead>
      <tbody>
        <TableRow data={data} isHeader={false} />
      </tbody>
    </table>
  );
}

export default Table;
