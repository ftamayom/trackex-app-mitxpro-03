import React, { useState } from 'react';
import "./App.css";
import styled from "styled-components";

import { NavBar } from "./components/NavBar";

import PropTypes from "prop-types";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "#ff7661",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "16px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

const defaultData = [
  {
    id: 0,
    date: "22/04/2021",
    name: "Coffee",
    category: "eating_out",
    amount: 4.5,
    type: "expense",
  },
  {
    id: 1,
    date: "22/04/2021",
    name: "Coffee",
    category: "eating_out",
    amount: 4.5,
    type: "expense",
  },
  {
    id: 2,
    date: "22/04/2021",

    name: "April payroll",
    category: "salary",
    amount: 4500,
    type: "income",
  },
  {
    id: 3,
    date: "22/04/2021",

    name: "Coffee",
    category: "eating_out",
    amount: 4.5,
    type: "expense",
  },
  {
    id: 4,
    date: "22/04/2021",
    name: "Macbook",
    category: "electronics",
    amount: 4500,
    type: "expense",
  },
  {
    id: 5,
    date: "22/04/2021",
    name: "T-shirt",
    category: "clothes",
    amount: 35,
    type: "expense",
  },
];

const Table = styled.table`
  width: 80%;
  padding: 16px 16px 64px 64px;
  text-align: left;
`;

const HeadCell = styled.th`
  padding: 16px 0;
  width: 20%;
`;

const TableCell = styled.td`
  padding: 8px 0;
  width: 20%;
`;
//  color: ${(props) => {
//   console.log("props", props);
//   switch (props.type) {
//     case "expense":
//       return "red";
//     case "income":
//       return "green";
//     default:
//       return "inherit";
//   }
//  }};

const Amount = styled.p`
  color: ${(props) => (props.type === "expense" ? "#FF7661" : "#00E4C6")};
`;

// const ExpenseCell = styled.td`
//   padding: 8px 0;
//   width: 20%;
//   color: red;
// `;
// const IncomeCell = styled.td`
//   padding: 8px 0;
//   width: 20%;
//   color: green;
// `;

function App(props) {
  // const amountCell = (transaction) => {
  //   // switch(transaction.type)
  //   return transaction.type === "expense" ? (
  //     <ExpenseCell> {transaction.amount} </ExpenseCell>
  //   ) : (
  //     <IncomeCell> {transaction.amount} </IncomeCell>
  //   );
  // };

  const [data, setData] = useState(defaultData);

  const { classes, children, className, ...other } = props;

  const add = () => {
    const newData = {
      id: 0,
      date: "29/07/2021",
      name: "Example",
      category: "example",
      amount: 123,
      type: "income",
    }

    setData(data => [...data, newData])
  }

  return (
    <div className="layout">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <NavBar />
        </Grid>
        <Grid item xs={9}>
          <Button className={clsx(classes.root, className)} {...other} onClick={add}>
            ADD
          </Button>
          <Table>
            <thead>
              <tr>
                <HeadCell>Date</HeadCell>
                <HeadCell>Name</HeadCell>
                <HeadCell>Category</HeadCell>
                <HeadCell>Amount</HeadCell>
                <HeadCell>Actions</HeadCell>
              </tr>
            </thead>
            <tbody>
              {data.map((transaction) => {
                /* console.log("transaction", transaction); */
                return (
                  <tr key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      <Amount type={transaction.type}>
                        {transaction.amount}
                      </Amount>
                    </TableCell>

                    {/* {amountCell(transaction)} */}

                    <TableCell>Edit/Delete</TableCell>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(App);

//export default App;
