import React from "react";
import './styles/styles.scss';
import DialogOperation from "./DialogOperation";
import _ from "lodash";
import * as htmlToImage from 'html-to-image';
import {Download} from "react-feather";
import Footer from "./Footer";
import Header from "./Header";
import {GlobalContext, GlobalProvider} from "../context";
import {saveAs} from '@progress/kendo-file-saver';
import Content from "./Content";

class AccountingDiary extends React.Component {
  
  state = {
    toFunc: 'toPng'
  }
  
  getArray(data) {
    let myArray = []
    let grp = _.groupBy(data, 'date')
    let keys = Object.keys(grp);
    keys.forEach(date => {
      myArray.push({date, content: grp[date]})
    })
    return myArray
  }
  
  render() {
    
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {context => (
            <div style={{
              border: '1px solid whitesmoke',
              minHeight: '100%',
              padding: 24,
              borderRadius: 4,
              boxSizing: 'border-box'
            }}>
              <select value={this.state.toFunc} onChange={e => this.setState({toFunc: e.target.value})}>
                <option value="toJpeg">JPEG</option>
                <option value="toPng">PNG</option>
                <option value="toSvg">SVG</option>
                <option value="toBlob">BLOB</option>
              </select>
              <div id='diary' style={{padding: 8}}>
                <div style={{textAlign: 'center', marginBottom: 8, fontWeight: 600, fontSize: 18}}>
                  Accounting diary for {this.props.title}
                </div>
                {this.getArray(context.state.data).map((elt, i) => (
                  <>
                    <Header date={elt.date} index={i} account={this.props.account} amount={this.props.amount}/>
                    {_.orderBy(elt.content, 'isDebit', "desc").map(row => (
                      <Content value={row} account={this.props.account} amount={this.props.amount}/>
                    ))}
                    <Footer account={this.props.account} amount={this.props.amount}/>
                  </>
                ))}
              </div>
              <div style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'end',
                display: 'flex',
                flexDirection: 'column',
                right: 24,
                bottom: 16
              }}>
                {/*size='small'*/}
                <DialogOperation/>
                <button className='btn-save-accounting'
                        style={{marginTop: 16, backgroundColor: this.props.saveColor}} onClick={() => {
                  let node = document.getElementById('diary');
                  htmlToImage[this.state.toFunc](node, {backgroundColor: '#fff'})
                    .then(function (dataUrl) {
                      var arr = dataUrl.split(','),
                        mime = arr[0].match(/:(.*?);/)[1],
                        bstr = atob(arr[1]),
                        n = bstr.length,
                        u8arr = new Uint8Array(n);
                      while (n--) {
                        u8arr[n] = bstr.charCodeAt(n);
                      }
                      const file = new File([u8arr], 'filename', {type: mime})
                      saveAs(file, 'img.' + mime.split('/')[1])
                    })
                    .catch(function (error) {
                      console.error('oops, something went wrong!', error);
                    });
                }
                }>
                  {this.props.saveIcon}
                </button>
              </div>
            </div>
          )}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );
  }
}

AccountingDiary.defaultProps = {
  saveColor: "#ffffff",
  saveIcon: <Download size={16}/>,
  title: "Test Model",
  account: {
    width: 128,
    color: '#646464',
  },
  amount: {
    width: 128,
    color: '#646464',
  },
}

export default AccountingDiary;