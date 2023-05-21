
import {Button, Modal, Form} from "react-bootstrap"

import {useState, FormEvent, useRef} from "react"
import {getAllUniquePayeeNames} from "../utils/expense-utils"
import IExpenseItem, { IExpenseCreateItem } from "../models/expense"

import {createExpenseItem} from "../services/expense"

type ExpenseCreatorModel = {

  expenseItems : IExpenseItem[];
  refreshForNewExpenseAddition : (newExpenseItem : IExpenseItem) => void;

}

const ExpenseCreator = (expenseCreatorModel : ExpenseCreatorModel) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const uniquePayeeNames = getAllUniquePayeeNames(expenseCreatorModel.expenseItems);

  const expenseDescriptionRef = useRef<HTMLInputElement>(null);
  const payeeNameRef = useRef<HTMLSelectElement>(null);
  const expenseDateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const handleAddExpense = async (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const expenseDescription = 
      (expenseDescriptionRef?.current?.value as string);

    const payeeName = (payeeNameRef?.current?.value as string);

    const expenseDate = new Date((expenseDateRef?.current?.value as string));
    const price = parseFloat( (priceRef?.current?.value as string) );

    console.log(`Expense Description ${expenseDescription}`);
    console.log(`Payee Name ${payeeName}`);
    console.log(`Expense Date ${expenseDate}`);
    console.log(`Expense Price ${price}`);

    const newExpenseItem : IExpenseCreateItem = {

      expenseDescription : expenseDescription,
      payeeName: payeeName,
      price: price,
      date: expenseDate
    }

    const response = await createExpenseItem(newExpenseItem);
    console.log(`Responnse is ${JSON.stringify(response)}`);

    /// Pass message to the parent component
    expenseCreatorModel.refreshForNewExpenseAddition(response);

    handleClose();
  }

  return (

    <div>

    <Button className="float-end" variant="primary" onClick={handleShow}>New Expense Item</Button>      

    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Add a new expense item</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          
          <Form onSubmit={handleAddExpense}>

            <Form.Group className="mb-3" controlId="expenseDescription">
              <Form.Label>Expense Description</Form.Label>
              <Form.Control type="text" placeholder="Enter expense description" 
              ref={expenseDescriptionRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="payeeName">
              <Form.Label>Payee Name</Form.Label>

                <Form.Select aria-label="Default select example" ref={payeeNameRef}>

                  <option>===SELECT A PAYEE===</option>

                  {
                    uniquePayeeNames.map( (payeeName) => {

                      return (
                        <option value={payeeName}>{payeeName}</option>
                      )
                    })
                  }
                
                </Form.Select>

            </Form.Group>
            
            <Form.Group className="mb-3" controlId="expenseDate">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control type="date" placeholder="Enter expense date" 
              ref={expenseDateRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="expensePrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter expense price" 
              ref={priceRef}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Expense
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Form>

        </Modal.Body>
    
      </Modal>
    </div>
  )

}

export {ExpenseCreator}