
import axios from "axios"
import IExpenseItem from "../models/expense";

const getAllExpenseItems = async () => {

  const expenseItemsGETUrl = "http://localhost:4000/items";

  const response = await axios.get<IExpenseItem[]>(expenseItemsGETUrl)
  return response.data;

}

export {getAllExpenseItems}