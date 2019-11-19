import React, { useState } from 'react';

function Test() {
    const [count, setCount] = useState(9);
    return (
        <div>
            <button onClick={ () => setCount(count + 1) }>+</button>
            Component Count: { count }
        </div>
    );
}

export default Test;

