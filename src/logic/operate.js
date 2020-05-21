import Big from "big.js";

export default function operate(numberone, numberTwo, operation){
    const one = Big(numberone || "0");
    const two = Big(numberTwo || (operation === "/" || operation === "*"? "1" : "0" )); //if dividing or multiplying, then I maintains current value in cases of null
    if(operation === "+"){
        return one.plus(two).toString();
    }
    if(operation === "-"){
        return one.minus(two).toString();
    }
    if(operation === "*"){
        return one.times(two).toString();
    }
    if(operation === "/"){
        if(two === "0"){
            alert("Divide by 0 error");
            return "0";
        }
        else{
            return one.div(two).toString();
        }
    }
    throw Error('Unknown operation');
}