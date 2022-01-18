import DeleteItem from "./DeleteItem";

interface Props {
  trClass?: string;
  tdClass?: string;
  rowItem?: any;
  getData: () => void;
}

export default function TableRow({
  rowItem,
  trClass,
  tdClass,
  getData,
}: Props) {
  return (
    <tr className={trClass} {...rowItem.getRowProps()}>
      {rowItem.cells.map((cell: any) => (
        <td className={tdClass} {...cell.getCellProps()}>
          {cell.render("Cell")}
        </td>
      ))}
      <DeleteItem id={rowItem.original.id} getData={getData} />
    </tr>
  );
}
