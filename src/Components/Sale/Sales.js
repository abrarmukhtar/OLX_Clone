import React, { useState, useReducer, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Category from "./Category";
import SubCategory from "./SubCategory";
import { UseStyles } from "./style";
import { database } from "../../firebase";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Sales() {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    return database.category.onSnapshot((snapshot) => {
      setCate(snapshot.docs.map(database.formatDoc));
    });
  }, []);

  cate.length > 0 && console.log(cate);

  const classes = UseStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography className={classes.hedings} variant="h5" gutterBottom>
              POST YOUR AD
            </Typography>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>CHOOSE A CATEGORY</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          {/* this is left side of table (Categories) */}
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <TableContainer>
                    {cate.length > 0 &&
                cate.map((row, index) => (
                <Table className={classes.table} key={row.id}  aria-label="simple table">
                  <TableBody>
                    {
                      <TableRow>
                        <TableCell align="left">
                              <Category category={row} />
                        </TableCell>
                      </TableRow>
                    }
                  </TableBody>
                </Table>
                            ))}
              </TableContainer>
            </Paper>
          </Grid>

                      {/* this is left side of table (SubCategories) */}

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <SubCategory />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
