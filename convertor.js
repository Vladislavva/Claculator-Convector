window.addEventListener("load", async function OnWindowLoaded() {
  const convectorOfInput = document.querySelector(".convectorOf__input");
  const convertOfСurrency = document.querySelector(".convetorOf__dropdown");
  const convectorInInput = document.querySelector(".convetorIn__input");
  const convertInСurrency = document.querySelector(".convetorIn_dropdown");
  const convertorBtn = document.querySelector(".convertorBtn");

  const response = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  const list = await response.json();

  convertorBtn.onclick = () => {
    
    if (convertOfСurrency.value === "Української гривня") {
      const lastValue = list.filter((element) => element.txt === convertInСurrency.value)
      const result = convectorOfInput.value *lastValue[0].rate; 
      const expressionResult = document.createElement("p");
      expressionResult.innerHTML = result;
      convectorInInput.appendChild(expressionResult);
    } else {
      const firstValue = list.filter((element) => element.txt === convertOfСurrency.value)
      const lastValue = list.filter((element) => element.txt === convertInСurrency.value)
      const result = ((convectorOfInput.value*firstValue[0].rate)/lastValue[0].rate);

      const expressionResult = document.createElement("p");
      
      expressionResult.innerHTML = result;
      convectorInInput.appendChild(expressionResult);
    }
  };
});
