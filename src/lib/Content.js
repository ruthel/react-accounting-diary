import React from "react";
import Func from "./func";

export default class Content extends React.Component {
  render() {
    const {value} = this.props
    return (
      <div className='insertion'>
        <div className='debit' style={this.props.account}>
          <div>{value.isDebit ? value.account : ''}</div>
        </div>
        <div className='credit flex-col' style={this.props.account}>
          <div className='transaction-content'>
            <div>{!value.isDebit ? value.account : ''}</div>
          </div>
        </div>
        <div className='flex-col description'>
          <div className='transaction-content' style={{marginLeft: value.isDebit ? 0 : 72}}>{value.text}</div>
        </div>
        <div className='amount-debit flex-col' style={this.props.amount}>
          <div>{value.isDebit ? Func.currency(value.amount, value.currency, value.local) : ''}</div>
        </div>
        <div className='amount-credit flex-col' style={this.props.amount}>
          <div>{!value.isDebit ? Func.currency(value.amount, value.currency, value.local) : ''}</div>
        </div>
      </div>
    )
  }
}