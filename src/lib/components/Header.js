import React from "react";

export default class Header extends React.Component {
  render() {
    let {date, index} = this.props;
    return (
      <div className='insertion'>
        <div className='debit' style={this.props.account}>
          <div className='date'>&nbsp;</div>
        </div>
        <div className='credit flex-col' style={this.props.account}>
          <div className='date'>&nbsp;</div>
        </div>
        <div className={`flex-col description ${index === 0 ? 'border-top' : ' '}`}
             style={{
               borderTopLeftRadius: index === 0 ? 6 : 0,
               borderTopRightRadius: index === 0 ? 6 : 0,
               borderBottom: 'none'
             }}>
          <div className='date'>{date.split('-')[2]}/{date.split('-')[1]}/{date.split('-')[0]}</div>
        </div>
        <div className='amount-debit flex-col' style={this.props.amount}>
          <div className='date'>&nbsp;</div>
        </div>
        <div className='amount-credit flex-col' style={this.props.amount}>
          <div className='date'>&nbsp;</div>
        </div>
      </div>
    );
  }
}