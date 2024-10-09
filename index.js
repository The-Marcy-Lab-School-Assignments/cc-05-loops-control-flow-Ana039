 
    


const greaterNum = (num1, num2) => {
if (Number.Interger(num1) && Number.Interger(num2)) {
    if (num1 === num2) {
        return "both intergers are equal";
     }
    else if (num1 > num2) {
        return num1;
     } else {
        return num2;
     } 
    } else {
       return null;
     }
    };

