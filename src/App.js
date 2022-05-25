import * as React from "react";
// import MySqlConnection from "react-native-my-sql-connection";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Book Name:" variant="filled" />
      <TextField id="standard-basic" label="Author Name:" variant="standard" />
      <br />
      <Button
        onClick={() => {
          alert("Book Added");
        }}
      >
        {" "}
        Add Book
      </Button>{" "}
      <Button
        onClick={() => {
          alert("Book Searched ! Navigating to another screen");
        }}
      >
        {" "}
        Search Book
      </Button>
    </Box>
  );
}

// let config = {
//   host: "hostname",
//   database: "mydb",
//   user: "myUser",
//   password: "",
//   port: 3306,
// };
// try {
//   const connection = await MySqlConnection.createConnection(config);
//   let res = await connection.executeQuery("SELECT * FROM myTable");
//   connection.close();
// } catch (err) {
//   // handle error
// }
