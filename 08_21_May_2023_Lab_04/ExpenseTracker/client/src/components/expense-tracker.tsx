
import {useEffect, useState} from "react";

import {getAllExpenseItems} from "../services/expense"

import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items";
import IExpenseItem from "../models/expense";
import { ExpenseSummary } from "./expense-summary";
import { ExpenseCreator } from "./expense-creator";

const ExpenseTracker = () => {

  const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);

  useEffect(() => {

    const getAllExpenseItemsInvoker = async () => {

      const response = await getAllExpenseItems();
      console.log(`Response is ${JSON.stringify(response)}`);

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();

  }, [])

  const refreshForNewExpenseAddition = (newExpenseItem : IExpenseItem) => {
    
    // Array - 5 (a, b, c,d, e)
    // new Item - 1

    // setExpenseItems ([1, a, b, c, d, e])

    console.log("Called from the child component [Expense Creator] component..")
  
    setExpenseItems(
      [newExpenseItem, ...expenseItems]
    )
  }

  return (
    
    <Container>

      <h2>
        Expense Tracker Application

        <ExpenseCreator expenseItems={expenseItems} refreshForNewExpenseAddition={refreshForNewExpenseAddition}></ExpenseCreator>

      </h2>

      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>

      <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>
    </Container>

  )

}

export {ExpenseTracker}