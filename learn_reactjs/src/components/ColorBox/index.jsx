import React,{useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setColor] = useState('pink');
    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}> Change to black</button>
            <button onClick={()=>setColor('White')}> Change to white</button>
            
        </div>
    );
}

export default ColorBox;