import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combodemo"
      options={books}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Books" />}
    />
  );
}
const books = [
  { label: "python by balaguru", book: 1994 },
  { label: "C# Language", book: 1993 },
  { label: "C Langauage", book: 1995 },
  { label: "Learn Java", book: 1992 },
  { label: "Learn Mongodb", book: 1992 }
];
