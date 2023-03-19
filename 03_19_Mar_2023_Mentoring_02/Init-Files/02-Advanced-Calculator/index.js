
function clearButtonHandler(){

  let ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = "";
}


function genericButtonHandler(text){

  // Numbers, Operators, (, ), "."
  appendDisplay(text);
}

function backspaceButtonHandler(){

  let ioPanel = document.getElementById("ioPanel");
  let ioPanelText = ioPanel.innerText;

  let endIndex = ioPanelText.length - 1;
  let outcome = ioPanelText.substring(0, endIndex);
  console.log(endIndex + "," + outcome);

  setIoPanelText(outcome);
}

function negationButtonHandler(){

  let ioPanel = document.getElementById("ioPanel");
  let ioPanelText = ioPanel.innerText;
  
  let existingNumber = parseInt(ioPanelText);

  existingNumber = existingNumber * -1;
  // existingNumber = -existingNumber;

  setIoPanelText(existingNumber);
}

function enterButtonHandler(){

  let ioPanel = document.getElementById("ioPanel");
  let ioPanelText = ioPanel.innerText;

  if (ioPanelText === ''){
    setIoPanelText("<<No Expression>>");
    // alert("No Expression");
  }else{
    try{
      let result = eval(ioPanelText);
      setIoPanelText(result);  
    }catch (error){
      setIoPanelText("Incorrect Expression. Please check..");
    }
  }

}

function squareRootButtonHandler(){

  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;
      
    let sqrtValue = Math.sqrt(ioPanelText);
    setIoPanelText(sqrtValue);
  }
}

function squareButtonHandler(){

  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;

    let aNumber = parseInt(ioPanelText);
    let sqValue = aNumber * aNumber; 
    
    setIoPanelText(sqValue);
  }  
}


function exponentialButtonHandler(){

  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;
      
    let value = Math.exp(ioPanelText);
    setIoPanelText(value);
  }  
}


function LOGButtonHandler(){

  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;
      
    let value = Math.log(ioPanelText);
    setIoPanelText(value);
  }   
}


function COSButtonHandler(){

  console.log("COS...")
  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;
      
    let aNumber = parseInt(ioPanelText);  
    let radians = convertDegreesToRadians(aNumber);
    console.log("Radians -> " + radians);

    let value = Math.cos(radians);
    setIoPanelText(value);
  }   
}



function SINButtonHandler(){

  console.log("SIN CALled...")
  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;

    let aNumber = parseInt(ioPanelText);  
    let radians = convertDegreesToRadians(aNumber);

    let value = Math.sin(radians);
    setIoPanelText(value);
  }     
}


function TANButtonHandler(){

  let result = validateNumber();
  if (result){

    let ioPanel = document.getElementById("ioPanel");
    let ioPanelText = ioPanel.innerText;
      
    let aNumber = parseInt(ioPanelText);  
    let radians = convertDegreesToRadians(aNumber);

    let value = Math.tan(radians);
    setIoPanelText(value);
  }     
}

function validateNumber(){

  let ioPanel = document.getElementById("ioPanel");
  let ioPanelText = ioPanel.innerText;

    try{
      let aNumber = parseInt(ioPanelText);
      let result = isNaN(aNumber);
      if (result){
        setIoPanelText("<<NaN>>");
        return false;
      }else{
        return true;
      }  
    }catch (error){
      setIoPanelText("<<Incorrect Number>>");
      return false;
    }
}

function appendDisplay(text){

  let ioPanel = document.getElementById("ioPanel");

  // 7
  let ioPanelText = ioPanel.innerText;


  // 79

  let finalText = ioPanelText + text;
  ioPanel.innerText = finalText;
}

function setIoPanelText(text){

  let ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = text;
}

function convertRadiansToDegress(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function convertDegreesToRadians(degree){

  let pi = Math.PI;
  let radians = degree * pi/180;

  return radians;
}