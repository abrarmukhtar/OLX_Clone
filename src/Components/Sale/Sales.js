import React, { useState, useReducer, useEffect } from "react";
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
import SalesCenteredContainer from "./SalesCenteredContainer";





export default function Sales() {
  const [cate, setCate] = useState([]);
  const [subCate, setSubCate] = useState([]);


  const getDataByCat = (id)=>{



    database.category.onSnapshot((cateSnap) => {
      //This is categories query

      setCate(cateSnap.docs.map(database.formatDoc));

      cateSnap.docs.map((catDoc) => {
        database.category
          .doc(id)
          .collection("PostSubTypes")
          .onSnapshot((snp) => {
            
            setSubCate([...snp.docs.map(database.formatDoc)]);
          });
      });
    });
  }


  useEffect(() => {
    database.category.onSnapshot((cateSnap) => {
      
      
      //This is categories query


      setCate(cateSnap.docs.map(database.formatDoc));

      // this is code for set SubCetogries 
      // cateSnap.docs.map((catDoc) => {
      //   database.category
      //     .doc(catDoc.id)
      //     .collection("PostSubTypes")
      //     .onSnapshot((snp) => {
            
      //       setSubCate([...snp.docs.map(database.formatDoc)]);
      //     });
      // });
    });
  }, []);


  // console.log(subCate);

  const classes = UseStyles();
  return (
    <SalesCenteredContainer>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography className={classes.hedings} variant="h5" gutterBottom>
              POST YOUR AD
            </Typography>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tblHeading}>
                  <TableRow>
                    <TableCell>CHOOSE A CATEGORY</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          {/* this is left side of table (Categories) */}
          <Grid item xs={6}>
            <TableContainer className={classes.tblContainer}>
              {cate.length > 0 &&
                cate.map((row, index) => (
                  <Table className={classes.table} key={row.id}>
                    <TableBody className={classes.tblRow}>
                      {
                        <TableRow>
                          <TableCell align="left">
                            <Category category={row} getId ={getDataByCat}/>
                          </TableCell>
                        </TableRow>
                      }
                    </TableBody>
                  </Table>
                ))}
            </TableContainer>
          </Grid>
          {/* this is left side of table (SubCategories) */}
          <Grid item xs={6}>
            <TableContainer className={classes.tblContainer}>
              {subCate.length > 0 &&
                subCate.map((row, index) => (
                  <Table
                    className={classes.table}
                    key={index}
                    aria-label="simple table"
                  >
                    <TableBody className={classes.tblRow}>
                      {
                        <TableRow>
                          <TableCell align="left">
                            <SubCategory row={row} />
                          </TableCell>
                        </TableRow>
                      }
                    </TableBody>
                  </Table>
                ))}
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </SalesCenteredContainer>
  );
}
