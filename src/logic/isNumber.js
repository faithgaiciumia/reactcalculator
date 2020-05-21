const isNumber = (buttonName) => {
    
    return /[0-9]+/.test(buttonName) ;
}

export default isNumber;