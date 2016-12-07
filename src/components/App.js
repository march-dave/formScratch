import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import Contact from './Contact';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
                <Contact />
            </div>
        );
    }

}

export default App;
