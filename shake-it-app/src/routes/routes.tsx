import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Add from '../pages/Add/Add'
import Search from '../pages/Search/Search'
import Random from '../pages/Random/Random'


const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route path='/search' element={<Search/>}/>
            <Route path='/random' element={<Random />}/>
            <Route path='/add' element={<Add />}/>
    
        </Routes>
    )
}

export default RoutesComponent