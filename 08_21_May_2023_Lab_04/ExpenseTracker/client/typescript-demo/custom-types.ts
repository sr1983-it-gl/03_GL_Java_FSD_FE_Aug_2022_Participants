interface ICustomer {

  customerId: number,
  customerName: string
} 

type EmployeeInfo = {

  id : number,
  name : string,
  email : string
}

function PrintEmployee2(empInfo : EmployeeInfo){

  console.log(`${empInfo.id}, ${empInfo.name}, ${empInfo.email}`);

}

let SwetaEmp : EmployeeInfo = {
  id: 1,
  name: 'Sweta',
  email : 'sweta@gmail.com'
}

PrintEmployee2(SwetaEmp);
