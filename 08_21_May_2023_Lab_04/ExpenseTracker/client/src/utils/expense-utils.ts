import IExpenseItem from "../models/expense";

const getAllUniquePayeeNames = (expenseItems : IExpenseItem[]) => {

  const uniquePayeeNames : string[] = []

  expenseItems.forEach( (expenseItem) => {

    const payeeName = expenseItem.payeeName;

    if (!uniquePayeeNames.includes(payeeName)){

      uniquePayeeNames.push(payeeName);
    }      
  })
  return uniquePayeeNames;
}

export {getAllUniquePayeeNames};
