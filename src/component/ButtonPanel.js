import React from "react";
import "./ButtonPanel.css";
import Button from "./Button";

class ButtonPanel extends React.Component {
    render () {
        return (
            <div className= "component-button-panel" >
                <div>
                <Button name="AC" clickHandler=""  />
                <Button name="+/-" clickHandler=""  />
                <Button name="%" clickHandler=""  />
                <Button name="/" clickHandler="" orange />
                </div>
                <div>
                <Button name="7" clickHandler=""  />
                <Button name="8" clickHandler=""  />
                <Button name="9" clickHandler=""  />
                <Button name="*" clickHandler="" orange />
                </div>
                <div>
                <Button name="4" clickHandler=""  />
                <Button name="5" clickHandler=""  />
                <Button name="6" clickHandler=""  />
                <Button name="-" clickHandler="" orange />
                </div>
                <div>
                <Button name="1" clickHandler=""  />
                <Button name="2" clickHandler=""  />
                <Button name="3" clickHandler=""  />
                <Button name="+" clickHandler=""  orange />
                </div>
                <div>
                <Button name="0" clickHandler="" wide />
                <Button name="." clickHandler=""  />
                <Button name="=" clickHandler="" orange />
                
                </div>
               
            </div>
        );
    }
}

export default ButtonPanel;