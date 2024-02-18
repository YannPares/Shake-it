import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../pages/All/All'
import Add from '../pages/Add/Add'
import Search from '../pages/Search/Search'


const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route path='/search' element={<Search/>}/>
            <Route path='/all' element={<All />}/>
            <Route path='/add' element={<Add />}/>
            

        </Routes>
    )
}

export default RoutesComponent