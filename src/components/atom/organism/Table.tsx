import React, { ReactElement } from "react";

interface Props {
  className?: string;
  data: any;
  colNames: [string];
}

function Table({ className, data, colNames }: Props): ReactElement {
  return (
    <table className={className}>
      <thead>
        <tr>
          {colNames.map((headerItem, index) => (
            <th key={index}>{headerItem.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map((document, index) => (
          <tr key={index}>
            {Object.values(document).map((value, index2) => (
              <td key={index2}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
