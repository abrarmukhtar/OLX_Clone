import React, { useState, useReducer, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./style";
import { database } from "../../../firebase";
import { Link } from "@material-ui/core";
// import { useAuth } from "../contexts/AuthContext";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Mobiles'),
//   createData('Vehicles'),
//   createData('Property for Sale'),
//   createData('Property for Rent'),
//   createData('Electronics & Home Appliances'),
// ];



export default function BasicTable({category}) {

  const classes = useStyles();



  return (
    <>
      <a
        href="#"
       style={{textDecoration: "none", color: "black" }}
      >
        { `From firestore: ${category.name} `}
      </a>
     
    </>
  );
}
