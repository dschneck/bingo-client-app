import React from 'react';
import Board from './Board';
import CardContainer from './CardContainer';

class App extends React.Component {
    render() {
       return ( 
            <>
                <Board />
                <CardContainer />
            </>
        )
    }

}

export default App;