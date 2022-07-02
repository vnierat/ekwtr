import { FC, MouseEventHandler, useCallback, useState } from "react";
import { Contract } from "../../../../interfaces/interfaces";
import { Table, TableButton, TableHead, Td, TdDate, Tr } from "./Charts.style";

interface ElecTableProps {
  elecDataPerYear: Contract[];
}

const GazTable: FC<ElecTableProps> = ({ elecDataPerYear: gazDataPerYear }) => {
  const [sortKey, setSortKey] = useState<SortKeys>("value");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  type Data = typeof gazDataPerYear;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  const sortData = ({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) => {
    if (!sortKey) return tableData;

    const sortedData = gazDataPerYear.sort((a, b) => {
      return a[sortKey]! > b[sortKey]! ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  };

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <TableButton
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        ▲
      </TableButton>
    );
  }

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "date", label: "Date" },
    { key: "valueHP", label: "Heures Pleines" },
    { key: "valueHC", label: "Heures Creuses" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: gazDataPerYear,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gazDataPerYear, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  };

  return (
    <Table>
      <TableHead>
        <tr>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </td>
            );
          })}
        </tr>
      </TableHead>

      <tbody>
        {sortedData().map(({ date, valueHP, valueHC, id }) => {
          const dateFormat = new Date(date).toLocaleDateString("fr-FR");
          const time = new Date(date).toLocaleTimeString("fr", {
            timeStyle: "short",
            hour12: false,
            timeZone: "UTC",
          });

          const dateValue = `${dateFormat} ${time}`;
          return (
            <Tr key={id}>
              <Td>{id}</Td>
              <TdDate>{dateValue}</TdDate>
              <Td>{valueHP}</Td>
              <Td>{valueHC}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default GazTable;
