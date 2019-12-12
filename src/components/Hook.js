import React, { useState } from 'react'

const Hook = _ => {

    const [count, setCount] = useState(0);

    return(
        <div>
            {count}
            <button onClick={ _ => setCount(count +1) }>Click</button>
        </div>
    )
}

export default Hook