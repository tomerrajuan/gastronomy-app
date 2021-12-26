interface Props {
  trClass?: string;
  tdClass?: string;
  rowItem?: any;
}

export default function TableRow({ rowItem, trClass, tdClass }: Props) {
  return (
    <tr className={trClass} {...rowItem.getRowProps()}>
      {rowItem.cells.map((cell: any) => (
        <td key={cell.id} className={tdClass} {...cell.getCellProps()}>
          {cell.render("Cell")}
        </td>
      ))}
    </tr>
  );
}
