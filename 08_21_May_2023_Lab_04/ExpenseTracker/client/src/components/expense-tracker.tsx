
import {useEffect, useState} from "react";

import {getAllExpenseItems} from "../services/expense"

import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items";
import IExpenseItem from "../models/expense";

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

  return (
    
    <Container>

      <h2>
        Expense Tracker Application
      </h2>

      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>

    </Container>

  )

}

export {ExpenseTracker}