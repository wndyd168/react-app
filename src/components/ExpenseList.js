import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'


const ExpenseList = ({ initialExpenses, handleDelete }) => {
    return (
        <React.Fragment>
            <ul className='list'>
                {initialExpenses.map(expense => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense}
                            handleDelete={handleDelete}
                        />

                    )
                })}

            </ul>
            <button className='btn'>
                목록 지우기


            </button>
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
