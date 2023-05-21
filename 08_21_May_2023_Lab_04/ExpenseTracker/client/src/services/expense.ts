
import axios from "axios"
import IExpenseItem from "../models/expense";
import { IExpenseCreateItem } from "../models/expense";

const getAllExpenseItems = async () => {

  const expenseItemsGETUrl = "http://localhost:4000/items";

  const response = await axios.get<IExpenseItem[]>(expenseItemsGETUrl)
  return response.data;

}

const createExpenseItem = async (newExpenseItem : IExpenseCreateItem) => {

  const createExpenseItemPOSTUrl = "http://localhost:4000/items";

  const response = await axios.post(createExpenseItemPOSTUrl, newExpenseItem, {
    headers : {
      'Content-Type' : 'application/json'
    }
  })

  return response.data;
}

export {getAllExpenseItems, createExpenseItem}