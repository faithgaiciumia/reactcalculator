import React from'react';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
    };

    render(){
        return(
            <div>
                <Display value= {this.state.next || this.state.total || "0"} />
                <ButtonPanel/>
            </div>
        )
    }
}

export default App;