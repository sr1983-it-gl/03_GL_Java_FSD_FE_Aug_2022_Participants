
console.log("Called...");

let allButtons = document.getElementsByClassName("button");

let buttonsArray = Array.from(allButtons);

buttonsArray.forEach(attachListenerToButton);

function attachListenerToButton(
  buttonObject, index){


    buttonObject.addEventListener("click", handleEvent);
    // console.log("Attach event ->" 
      // + buttonObject.innerText);
}

function handleEvent(e){

  let divButtonTarget = e.target;

  let divButtonText = divButtonTarget.innerText;

  console.log("Event fired during click "
    + divButtonText);
  
  
  let ioPanel = document.getElementById("ioPanel");
  let ioPanelText = ioPanel.innerText;

  // 1 == "1" [true -> content comparison, NOT type comparsion]
  // 1 === "1" [false -> content /type comparison]
  if (divButtonText === "CLEAR"){
    clearIoPanel();
  }else if (divButtonText === "BACKSPACE"){

    let endIndex = ioPanelText.length - 1;
    let outcome = ioPanelText.substring(0, endIndex);
    console.log(endIndex + "," + outcome);

    setIoPanelText(outcome);

  }else if (divButtonText === "="){

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
  }else {
    appendDisplay(divButtonText);
  }
}

function appendDisplay(text){

  // text - 9
  let ioPanel = document.getElementById("ioPanel");

  // 7
  let ioPanelText = ioPanel.innerText;


  // 79

  let finalText = ioPanelText + text;
  ioPanel.innerText = finalText;
}

function clearIoPanel(){
 
  let ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = "";
}

function setIoPanelText(text){

  let ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = text;
}

