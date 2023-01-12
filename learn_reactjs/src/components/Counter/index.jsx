import React,{useState} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            {counter}
            
            <button onClick={()=> setCounter(x=> x+1)}>Increase</button>
        </div>
    );
}

export default Counter;