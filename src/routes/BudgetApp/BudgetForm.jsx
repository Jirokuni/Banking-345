import React from 'react'
import { fetchData } from './helpers'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import './budget.css'
export function budgetLoader() {
    const userName = fetchData("Lindsay Joseph") || "";
    return {userName}
}

function BudgetForm() {
    const {userName} = useLoaderData()
    const currentBudget = userName.balance || 0;



  return (
    <div className="budget-wrapper">
    <form className='budget-form'>
        <h1 className="user-heading">Hello, {userName.firstName}!</h1>
        <h2 className='user-budget'>Available Fundy: ₱{currentBudget}</h2>
        <div>  
            <input type="text" className="budget-input" placeholder="Fundy??" />
            <input type="text" className="budget-input" placeholder="Amount" />
            <button type='submit' className="btn btn-primary budget-button" >Add</button>
        </div>
      
    </form>
    <div className='budget-outlet'>
        <Outlet />
    </div>
    <div className='budget-links'>
    <Link to={'/app/budget/recent'}>Recent Fundies</Link>
    <Link to={'/app/budget/breakdown'}>Breakdown</Link>
    <Link to={'/app/budget/future'}>Future Fundy</Link>
    </div>
    
    </div>
  )
}

export default BudgetForm