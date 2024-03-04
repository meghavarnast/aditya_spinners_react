import React from "react";
import SimpleTable from "../SimpleTable/SimpleTable";

type Column = {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
};

const columns: Column[] = [
  { id: "count", label: "Count", minWidth: 40 },
  {
    id: "l_r_machine",
    label: "L.R. Machine",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "texttool_machine",
    label: "TextTool Machine",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },

  //   {
  //     id: "size",
  //     label: "Size\u00a0(km\u00b2)",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value: number) => value.toLocaleString("en-US"),
  //   },
  //   {
  //     id: "density",
  //     label: "Density",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value: number) => value.toFixed(2),
  //   },
];

type Data = {
  count: string;
  l_r_machine: number;
  texttool_machine: number;
};

function createData(
  count: string,
  l_r_machine: number,
  texttool_machine: number
): Data {
  return { count, l_r_machine, texttool_machine };
}

//From API
const rows = [
  createData("29s", 15.29, 7.28),
  createData("30s", 14.78, 7.04),
  createData("33s", 13.44, 6.4),
  createData("36s", 12.32, 5.87),
  createData("Canada", 37602103, 9984670),
  createData("Australia", 25475400, 7692024),
  createData("Germany", 83019200, 357578),
  createData("Ireland", 4857000, 70273),
  createData("Mexico", 126577691, 1972550),
  createData("Japan", 126317000, 377973),
  createData("France", 67022000, 640679),
  createData("United Kingdom", 67545757, 242495),
  createData("Russia", 146793744, 17098246),
  createData("Nigeria", 200962417, 923768),
  createData("Brazil", 210147125, 8515767),
];
const SpinningProdConstant = () => {
  return (
    <>
      <SimpleTable rows={rows} columns={columns} width={"40rem"} />
    </>
  );
};

export default SpinningProdConstant;
