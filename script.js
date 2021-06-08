window.addEventListener("load", function OnWindowLoaded() {
    const keyboard = document.querySelector(".keyboard");
    const conditions = document.querySelector(".condition");
    const result = document.querySelector(".result");

    const calculatorBtns = [
        1,
        2,
        3,
        "C",
        4,
        5,
        6,
        "/",
        7,
        8,
        9,
        "*",
        ".",
        0,
        "+",
        "-",
        "(",
        ")",
        "=",
        "←",
    ];
    const mathChar = ["+", "-", "*", "/", ".","←"];

    calculatorBtns.forEach(function (calculatorBtn) {
        let signElement = document.createElement("div");
        signElement.className = "btn";
        signElement.innerHTML = calculatorBtn;
        keyboard.appendChild(signElement);
    });

    const numberButtonArray = document.querySelectorAll(".btn");
    numberButtonArray.forEach((numberButton) => {
        numberButton.onclick = function () {
            const btnValue = numberButton.textContent;
            if (btnValue === "C") {
                location.reload();
            }
            else if (btnValue === "=") {
                let expression = conditions.textContent;
                result.innerHTML = "";
                expression = eval(expression);

                if (expression === undefined) {
                    const expressionResult = document.createElement("p");
                    expressionResult.innerHTML = "invalid condition";
                    result.appendChild(expressionResult);

                } else if (!isFinite(expression)) {
                    const expressionResult = document.createElement("p");
                    expressionResult.innerHTML = "divisor invalid";
                    result.appendChild(expressionResult);
                } else {
                    const expressionResult = document.createElement("p");
                    expressionResult.innerHTML = `=${expression}`;
                    result.appendChild(expressionResult);
                }
            } else if (btnValue === "←") {
                let expression = conditions.textContent;
                expression = expression.substring(0, expression.length - 1)
                conditions.innerHTML = "";
                
                const value = document.createElement("p");
                value.innerHTML = expression;
                conditions.appendChild(value);
            }

            let expression = conditions.textContent;
            const lastSymbol = expression[expression.length - 1];
            const checkLastSymbol = mathChar.includes(lastSymbol);
            if (!checkLastSymbol || parseInt(btnValue)) {
                if (btnValue !== '=' && !(btnValue === "←")) {
                    const value = document.createElement("p");
                    value.innerHTML = btnValue;
                    conditions.appendChild(value);
                }
            }
        };
    });
});
