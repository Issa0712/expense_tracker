import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'

const Home = () => {
    return ( 
        <div>
        <h1>Home Page</h1>
        <ExpenseListFilter />
        <ExpenseList />

        </div>
     );
}

export default Home