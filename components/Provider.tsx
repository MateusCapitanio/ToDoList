import React, { useState } from 'react';
import myContext from '../contexts/myContext';
import { IPropChildren, IPropUserContext } from '../interfaces/Props';

function Provider({ children }: IPropChildren) {
    const [username, setUsername] = useState('');

    const values: any = {
        username,
        setUsername,
    }

    return (
        <myContext.Provider value={ values }>
            { children }
        </myContext.Provider>
    );
}

export default Provider;
