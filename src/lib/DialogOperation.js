import * as React from 'react';
import './styles/DialogOperation.scss';
import './styles/styles.scss';
import {GlobalContext} from "./context";
import {Plus} from "react-feather";
import currencies from "./data/currencies.json";

export default class DialogOperation extends React.Component {

  state = {
    open: false, visibility: 'hide', isDebit: false
  }

  constructor(props) {
    super(props);

    this.data = props.data;
    this.setData = props.setData
  }

  handleClickOpen = () => {
    this.setState({visibility: 'show'})
    setTimeout(() => this.setState({open: true}), 400)
  }

  handleClose = () => {
    this.setState({visibility: 'hide'});
    setTimeout(() => this.setState({open: false}), 400)
  }


  render() {
    return (<GlobalContext.Consumer>
      {context => {

        const handleSave = () => {
          let validators = [this.state.amount, this.state.account, this.state.isDebit, this.state.text, this.state.date]
          if (!validators.includes("") && !validators.includes(null) && !validators.includes(undefined)) {
            let value = [...context.state.data || []]
            value.push({
              amount: this.state.amount,
              account: this.state.account,
              isDebit: this.state.isDebit,
              text: this.state.text,
              date: this.state.date,
              currency: this.state.currency
            })
            context.setState({data: value})
            this.handleClose()
          } else {
            // context.setState({openSb: true, messageSb: "Please malke sure to fill all the fields", severitySb: "warning"})
          }
        };

        return (<div>
          {!this.state.open && <button onClick={this.handleClickOpen} className='btn-add-accounting'>
            <Plus/>
          </button>}
          {this.state.open && (<div className={`dialog-container ${this.state.visibility}`}>
            <h3 className='dialog-title'>Add transaction</h3>
            <div>Insert a new transaction to your accounting diary</div>
            <div>
              <div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 150px', columnGap: 6}}>
                  <div className='control'>
                    <label htmlFor="name">Amount</label>
                    <input
                      id="name"
                      placeholder="Amount"
                      type='number'
                      step=".01"
                      value={this.state.amount || ""}
                      onChange={e => this.setState({amount: e.target.value})}
                    />
                  </div>
                  <div className='control'>
                    <label htmlFor="name">Currency</label>
                    <select
                      value={this.state.currency || "USD"}
                      onChange={e => this.setState({currency: e.target.value})}
                      name="" id="">
                      {currencies.map(c => <option value={c[1]}>{c[0]}</option>)}
                    </select>
                  </div>
                </div>
                <div className='control'>
                  <label htmlFor="account">Account</label>
                  <input
                    autoFocus
                    id="account"
                    placeholder="Account Ref"
                    value={this.state.account || ""}
                    onChange={e => this.setState({account: e.target.value})}
                  />
                </div>
                <div className='control'>
                  <label htmlFor="date">Operation date</label>
                  <input
                    id="date"
                    placeholder="Operation date"
                    type="date"
                    value={this.state.date}
                    onChange={e => this.setState({date: e.target.value})}
                  />
                </div>
                <div className='control-check'>
                  <label>Is this operation a debit ?</label>&nbsp;
                  <input
                    type='checkbox'
                    defaultChecked={false}
                    checked={this.state.isDebit || false}
                    style={{marginLeft: 2, marginRight: 2}}
                    onChange={e => this.setState({isDebit: e.target.checked})}
                  />
                </div>
                <div className='control'>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows={5}
                    placeholder="Describe the operation"
                    value={this.state.text || ""}
                    onChange={e => this.setState({text: e.target.value})}
                  />
                </div>
              </div>
            </div>
            <div className='btn-action'>
              <button onClick={this.handleClose} className='error'>Cancel</button>
              &nbsp;
              <button onClick={handleSave} className='success'>Save</button>
            </div>
          </div>)}
        </div>)
      }}
    </GlobalContext.Consumer>);
  }
}