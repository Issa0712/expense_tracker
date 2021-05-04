import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


const now = moment()
console.log(now.format('MMMM Do YYYY'))


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt:props.expense? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    

      onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
     }

     onNoteChange = (e) => {
         const note = e.target.value
         this.setState(() => ({note}))
     }

     onAmountChange = (e) => {
         const amount = e.target.value
         if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))

         }
     }

     onDateChange = (createdAt) => {
         if(createdAt) {
            this.setState(() => ({createdAt}))

         }
     }

     onFocusChange = (focused) => {
         this.setState(() => ({calenderFocused: focused}))
     }

     onSubmit = (e) => {
         e.preventDefault()
         if (!this.state.amount || !this.state.description) {
            this.setState(() => ({error: 'Please Provide Information'}))
         } else {
            this.setState(() => ({error: ''}))
         }
         this.props.onSubmit({
             description: this.state.description,
             amount: parseFloat(this.state.amount, 10),
             createdAt: this.state.createdAt.valueOf(),
             note: this.state.note
         })
     }

    render() { 
        return ( 
            <div>
            {this.state.error}
            <form onSubmit={this.onSubmit}>
            <input value={this.state.description} type="text" placeholder="Description" autoFocus onChange={this.onDescriptionChange} />
            <input type="text" placeholder="amount" onChange={this.onAmountChange} value={this.state.amount}/>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
            <textarea placeholder="add a note for your expense" value={this.state.note} onChange={this.onNoteChange}></textarea>
            <button>Add Expense</button>
            </form>
            </div>
         );
    }

    
}
 
export default ExpenseForm;
