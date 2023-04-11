var screen = document.querySelector("#calculator-screen");
var firstNumber = 0;
var secondNumber = 0;
var operation = '';
var screenWidth = 228;

function button_clicked(value){

    if(typeof(value) === 'number'){

        if(screen.textContent == '0'){

            screen.textContent = '';
        }

        if(screen.textContent.length < 22){

            if(screen.textContent.length > 12){

                let screenFontSize = (screenWidth / screen.textContent.length) + 6;
                screen.style.fontSize = screenFontSize + "px";
            }

            screen.textContent += value.toString();
        }
    } else {

        switch (value) {

            case 'C':
                
                screen.textContent = 0;
                screen.style.fontSize = "30px";
                break;

            case 'back':

                screen.textContent = screen.textContent.slice(0, -1);
                if(screen.textContent.length == 0){

                    screen.textContent = 0;
                } else if(screen.textContent.length > 12){

                    let screenBackFontSize = (screenWidth / screen.textContent.length) + 5;
                    screen.style.fontSize = screenBackFontSize + "px";
                } else {

                    screen.style.fontSize = "30px";
                }
                break;
            
            case '%':

                screen.textContent = (parseFloat(screen.textContent)/100).toString();
                break;
            
            case '/':
            case 'X':
            case '+':
            case '-':

                firstNumber = parseFloat(screen.textContent);
                operation = value;
                screen.textContent = '';
                break;
            
            case '=':

                let result = 0;
                secondNumber = parseFloat(screen.textContent);

                if(operation == '/'){

                    result = firstNumber / secondNumber;
                } else if(operation == 'X'){

                    result = firstNumber * secondNumber;
                } else if(operation == '+'){

                    result = firstNumber + secondNumber;
                } else if(operation == '-'){

                    result = firstNumber - secondNumber;
                }

                screen.textContent = result.toString();

                if(screen.textContent.length > 12){

                    let screenFontSize = (screenWidth / screen.textContent.length) + 7;
                    screen.style.fontSize = screenFontSize + "px";
                }
                break;
            
            case 'negpos':

                let negposNumber = parseFloat(screen.textContent);
                screen.textContent = (negposNumber * -1).toString();
                break;
            
            case '.':

                if(!(screen.textContent).includes('.')){

                    screen.textContent += '.';
                }
                break;
        
            default:
                break;
        }
    }
}