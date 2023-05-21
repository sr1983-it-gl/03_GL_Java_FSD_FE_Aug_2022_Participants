
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"

type ExpenseSummaryModel = {
  expenseItems: IExpenseItem[];
  // a: number,
  // b: string
}

const ExpenseSummary = ({expenseItems} : ExpenseSummaryModel) => {

  const getAllPayeeNames = () => {

    const uniquePayeeNames : string[] = []

    expenseItems.forEach( (expenseItem) => {

      const payeeName = expenseItem.payeeName;

      if (!uniquePayeeNames.includes(payeeName)){

        uniquePayeeNames.push(payeeName);
      }      
    })
    return uniquePayeeNames;
  }

  const calculateTotalExpensesByPayee = (payeeName : string) => {

    let totalExpense = 0;
    expenseItems.forEach( (expenseItem) => {
      
      if (expenseItem.payeeName === payeeName){

        totalExpense += expenseItem.price;
      }
    })

    return totalExpense;
  }

  const calculateGrandTotal = () => {

    let grandTotal = 0;
    expenseItems.forEach( (expenseItem) => {
      
      grandTotal += expenseItem.price;
    })

    return grandTotal;
  }


  const calculatePendingAmount = (payeeName : string) => {

    // Total Expense - 710
       // Ramesh - 110

    // Half Amount 355

    // 110 > 355 -> 
    // (355 - 110) = 245

    // Balance - 710 - 110 = (600)

    const totalExpense = calculateGrandTotal();
    const totalContributionByPayee = calculateTotalExpensesByPayee(payeeName);

    const halfAmount = totalExpense / 2;

    if (totalContributionByPayee >= halfAmount){
      return 0;
    }else{
      return (halfAmount - totalContributionByPayee);
    }
  }

  return (
    <>
    

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee Name</th>
          <th>Total Expenses</th>
        </tr>
      </thead>

      <tbody>
        {
          getAllPayeeNames().map( (payeeName, index) => {

            return (
              <tr>
              <td>{index + 1}</td>
              <td>{payeeName}</td>
              <td>{calculateTotalExpensesByPayee(payeeName)}</td>
            </tr>            
            )
          })
        }

        <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{calculateGrandTotal()}</td>
        </tr>

      </tbody>
    </Table>


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee {`==>`} </th>
          <th>Pending Amount</th>
        </tr>
      </thead>

      <tbody>
        {
          getAllPayeeNames().map( (payeeName, index) => {

            return (
              <tr>
              <td>{index + 1}</td>
              <td>{`${payeeName} ==> `}</td>
              <td>{calculatePendingAmount(payeeName)}</td>
            </tr>            
            )
          })
        }

      </tbody>
    </Table>

    </>

  )

}

export {ExpenseSummary}