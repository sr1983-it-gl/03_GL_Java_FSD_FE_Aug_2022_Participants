
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense";
import {format} from "date-fns"

type ExpenseItemsModel = {

  expenseItems: IExpenseItem[];

}

const ExpenseItems = (expenseItemsModel : ExpenseItemsModel) => {

  const defaultExpenseItems : IExpenseItem[] = [

    {
      expenseDescription: "Internet Bill",
      payeeName: "Ramesh",
      price: 100,
      date: new Date(),
      id: 7
    },
    {
      expenseDescription: "Movie Expenses",
      payeeName: "Rahul",
      price: 600,
      date: new Date(),
      id: 8
    },
    {
      expenseDescription: "Trip to US",
      payeeName: "Rahul",
      price: 123,
      date: new Date(),
      id: 9
    }  
  ]

  const dateToString = (expenseDate: Date) => {

    try{
      return format(expenseDate, "yyyy-MM-dd");
    }catch (error){
      return format(new Date(), "yyyy-MM-dd");
    }
  }

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Expense Description</th>
          <th>Payee Name</th>
          <th>Expense Date</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>

        {
          expenseItemsModel.expenseItems.map( (expenseItem, index) => {

            return (
              <tr>
              <td>{index + 1}</td>
              <td>{expenseItem.expenseDescription}</td>
              <td>{expenseItem.payeeName}</td>
              <td>{dateToString(expenseItem.date)}</td>
              <td>{expenseItem.price}</td>
            </tr>            
            )
          })
        }


      </tbody>
    </Table>
    
    
  )

}

export {ExpenseItems};