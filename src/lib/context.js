import React from "react";
// import Snackbar from "./Snackbar";

const Context = React.createContext();

class GlobalProvider extends React.Component {

  constructor(props, context, state) {
    super(props, context);
    this.state = {
      data: [],
      doIndex: 1,
      openSb: false,
      messageSb: "",
      history: [[]],
      severitySb: 'success'
    };
  }

  undo() {
    this.setState({data: this.state.history[this.state.doIndex - 1], doIndex: this.state.doIndex - 1})
  }

  redo() {
    let newIndex = this.state.doIndex + 1
    if (newIndex < this.state.history.length)
      this.setState({data: this.state.history[this.state.doIndex + 1], doIndex: this.state.doIndex + 1})
  }

  render() {
    const {children} = this.props
    return (
      <Context.Provider
        value={{
          state: this.state,
          undo: this.undo,
          redo: this.redo,
          setState: e => {
            if (!!e.data && !e.doIndex) {
              let history = [...this.state.history].slice(0, this.state.doIndex + 1)
              this.setState({
                history: [...history, e.data],
                doIndex: history.length
              }, () => this.setState({...e}))
            } else
              this.setState({...e})

          },
        }}>
        {children}
      </Context.Provider>
    )
  }
}

export {GlobalProvider, Context as GlobalContext}
