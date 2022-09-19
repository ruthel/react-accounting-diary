import * as React from 'react';
import './styles/DialogOperation.scss';
import './styles/styles.scss';
import {GlobalContext} from "./context";
import {FilePlus} from "react-feather";

export default class DialogOperation extends React.Component {
  
  state = {}
  
  constructor(props) {
    super(props);
    
    this.data = props.data;
    this.setData = props.setData
  }
  
  handleClickOpen = () => this.setState({open: true})
  
  handleClose = () => this.setState({open: false});
  
  
  render() {
    return (
      <GlobalContext.Consumer>
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
                date: this.state.date
              })
              console.log(value)
              context.setState({data: value})
              this.handleClose()
            } else {
              // context.setState({openSb: true, messageSb: "Please malke sure to fill all the fields", severitySb: "warning"})
            }
          };
          
          return (
            <div>
              {!this.state.open &&
                <button onClick={this.handleClickOpen} className='btn-add-accounting'>
                  <FilePlus/>
                </button>}
              {this.state.open && (
                <div className='dialog-container'>
                  <h3 style={{paddingBottom: 4}} className='dialog-title'>Add transaction</h3>
                  <div>
                    <div>Insert a new transaction to your accounting diary</div>
                    <div>
                      <div className='control'>
                        <label htmlFor="name">Amount</label>
                        <input
                          id="name"
                          placeholder="Amount"
                          type='number'
                          value={this.state.amount || ""}
                          onChange={e => {
                            this.setState({amount: e.target.value})
                          }}
                        />
                      </div>
                      <div className='control'>
                        <label htmlFor="account">Account</label>
                        <input
                          autoFocus
                          id="account"
                          placeholder="Account Num/Name"
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
                      <div className='control'>
                        <label htmlFor="description">Description</label>
                        <textarea
                          id="description"
                          rows={5}
                          placeholder="Description of the opeation"
                          value={this.state.text || ""}
                          onChange={e => this.setState({text: e.target.value})}
                        />
                      </div>
                      <div className='control-check'>
                        <label>Is this operation a debit ?</label>
                        <input
                          type='checkbox'
                          defaultChecked={false}
                          checked={this.state.isDebit || false}
                          style={{marginLeft: 2, marginRight: 2}}
                          onChange={e => this.setState({isDebit: e.target.checked})}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='btn-action'>
                    <button onClick={this.handleClose} color='error'>Cancel</button>
                    <button onClick={handleSave} color='success'>Save</button>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </GlobalContext.Consumer>
    );
  }
}