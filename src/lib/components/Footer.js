import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className='insertion'>
        <div className='debit' style={this.props.account}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='credit flex-col' style={this.props.account}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='flex-col description border-bottom'>
          <div className='transaction-title'>Transaction text</div>
        </div>
        <div className='amount-debit flex-col' style={this.props.amount}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='amount-credit flex-col' style={this.props.amount}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
      </div>
    );
  }
}
