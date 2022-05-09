import { useMemo } from "react";
import { Column, useTable } from "react-table";
import styled from "styled-components";

const TableEl = styled.table`
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: rgb(245, 245, 245);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  th {
    font-size: 18px;
    font-weight: 600;
    line-height: 42px;
    text-align: start;
    padding-left: 10px;

    border-bottom: rgba(255, 255, 255, 0.6) solid 2px;
  }

  td {
    padding-left: 10px;
    line-height: 78px;
    font-size: 16px;
    font-weight: 400;
  }

  a {
    color: #5252ffdf;
  }

  a:hover {
    color: #a3a3ffdf;
  }
`;

const Button = styled.button<{ bgColor: string }>`
  border: none;
  background-color: ${(props) =>
    props.bgColor === "Approved"
      ? "#a0f0b1"
      : props.bgColor === "Pending"
      ? "#f8cbc1"
      : "#74b9ff"};
  color: ${(props) =>
    props.bgColor === "Approved"
      ? "#20a83e"
      : props.bgColor === "Pending"
      ? "#e44e2c"
      : "#ffffff"};

  padding: 8px;
  border-radius: 10px;
`;

interface ITable {
  product: string;
  trackingId: string;
  date: string;
  status: string;
  etc: string | undefined;
}

function Table() {
  const columns: Column<ITable>[] = useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
      },
      {
        Header: "Tracking ID",
        accessor: "trackingId",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "etc",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        product: "Lasania Chiken Fri",
        trackingId: "18908424",
        date: "2 March 2022",
        status: "Approved",
        etc: "Details",
      },
      {
        product: "Big Baza Bang",
        trackingId: "18908424",
        date: "2 March 2022",
        status: "Pending",
        etc: "Details",
      },
      {
        product: "Mouth Freshner",
        trackingId: "18908424",
        date: "2 March 2022",
        status: "Approved",
        etc: "Details",
      },
      {
        product: "Cupcake",
        trackingId: "18908421",
        date: "2 March 2022",
        status: "Delivered",
        etc: "Details",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  // ts ignore는 그닥 좋은방법은 아니라고함, type error 나는건 react-table이 구버전이라서 그런듯

  return (
    <TableEl {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                switch (cell.column.id) {
                  case "etc":
                    return (
                      <td {...cell.getCellProps()}>
                        <a href="#">{cell.render("Cell")}</a>
                      </td>
                    );
                  case "status":
                    return (
                      <td {...cell.getCellProps()}>
                        <Button bgColor={cell.value}>
                          {cell.render("Cell")}
                        </Button>
                      </td>
                    );
                  default:
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </TableEl>
  );
}

export default Table;
