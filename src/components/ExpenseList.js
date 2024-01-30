import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
    return (
        <React.Fragment>
            <ul className='list'>
                {initialExpenses.map(expense => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense}
                            handleDelete={handleDelete} handleEdit={handleEdit}
                        />

                    )
                })}

            </ul>
            {expenses.length > 0 ?
                <button className='btn' onClick={clearItems}>
                    목록 지우기
                    <MdDelete classname="btn-icon" />

                </button>
                : null
            }
        </React.Fragment>
    )
}

export default ExpenseList




// export default class ExpenseList extends Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <ul className='list'>
//                     {this.props.initialExpenses.map(expense => {
//                         return (
//                             <ExpenseItem key={expense.id} expense={expense}
//                                 handleDelete={this.props.handleDelete}
//                             />

//                         )
//                     })}

//                 </ul>
//                 <button className='btn'>
//                     목록 지우기


//                 </button>
//             </React.Fragment>
//         )
//     }
// }
