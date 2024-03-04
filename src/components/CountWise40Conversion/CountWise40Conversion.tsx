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
    id: "type",
    label: "Type",
    minWidth: 40,
  },
  {
    id: "value",
    label: "Value",
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
  type: string;
  value: number;
};

function createData(count: string, type: string, value: number): Data {
  return { count, type, value };
}

//From API
const rows = [
  createData("29s", "P", 7.28),
  createData("30s", "P", 7.04),
  createData("33s", "P", 6.4),
  createData("36s", "P", 5.87),
  createData("Canada", "V", 9984670),
  createData("Australia", "P", 7692024),
  createData("Germany", "V", 357578),
  createData("Ireland", "P", 70273),
  createData("Mexico", "V", 1972550),
  createData("Japan", "P", 377973),
  createData("France", "P", 640679),
  createData("United Kingdom", "V", 242495),
  createData("Russia", "P", 17098246),
  createData("Nigeria", "P", 923768),
  createData("Brazil", "P", 8515767),
];
const CountWise40Conversion = () => {
  return (
    <>
      <SimpleTable
        rows={rows}
        columns={columns}
        width={"30rem"}
        maxHeight={"80vh"}
      />
    </>
  );
};

export default CountWise40Conversion;
