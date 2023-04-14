import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='container app-cont'>
				<h1 className='trac' style={{color: '#f8f8f8'}}>Expense Tracker</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='expe' style={{color: '#f8f8f8'}}>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='addexpe' style={{color: '#f8f8f8'}}>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;