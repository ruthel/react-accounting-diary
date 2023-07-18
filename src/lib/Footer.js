import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className='insertion'>
        <div className='debit' style={{
          ...this.props.account,
          borderBottom: this.props.columnHeader ? 'var(--border) solid' : '',
        }}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='credit flex-col' style={{
          ...this.props.account,
          borderBottom: this.props.columnHeader ? 'var(--border) solid' : '',
        }}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='flex-col description border-bottom' style={{padding: 0}}>
          <div className='transaction-title'
               style={{...this.props.footer, fontSize: 11, marginTop: 7, textTransform: 'uppercase'}}>transactions
            entries
          </div>
        </div>
        <div className='amount-debit flex-col' style={{
          ...this.props.amount,
          borderBottom: this.props.columnHeader ? 'var(--border) solid' : '',
        }}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
        <div className='amount-credit flex-col' style={{
          ...this.props.amount,
          borderBottom: this.props.columnHeader ? 'var(--border) solid' : '',
        }}>
          <div className='transaction-title'>&nbsp;</div>
        </div>
      </div>
    );
  }
}
