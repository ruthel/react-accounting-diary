import React from "react";
// import Snackbar from "./Snackbar";

const Context = React.createContext();

class GlobalProvider extends React.Component {
  
  constructor(props, context, state) {
    super(props, context);
    this.state = {
      data: null,
      openSb: false,
      messageSb: "",
      severitySb: 'success'
    };
  }
  
  render() {
    const {children} = this.props
    return (
      <Context.Provider
        value={{
          state: this.state,
          setState: e => this.setState({canpreview: false, ...e}),
        }}>
        {/*<Snackbar*/}
        {/*  open={this.state.openSb}*/}
        {/*  message={this.state.messageSb}*/}
        {/*  severity={this.state.severitySb}*/}
        {/*  setClose={() => this.setState({openSb: false})}/>*/}
        {children}
      </Context.Provider>
    )
  }
}

export {GlobalProvider, Context as GlobalContext}
