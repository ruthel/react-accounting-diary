import React from "react";
import './styles/styles.scss';
import DialogOperation from "./DialogOperation";
import _ from "lodash";
import * as htmlToImage from 'html-to-image';
import {Download} from "react-feather";
import Footer from "./Footer";
import Header from "./Header";
import {GlobalContext, GlobalProvider} from "./context";
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
              minHeight: '100px',
              height: this.props.height,
              width: this.props.width,
              position: 'relative',
              padding: 24,
              borderRadius: 4,
              boxSizing: 'border-box'
            }}>
              <select value={this.state.toFunc} onChange={e => this.setState({toFunc: e.target.value})}>
                <option value="toJpeg">JPEG</option>
                <option value="toPng">PNG</option>
                {/*<option value="toBlob">BLOB</option>*/}
              </select>
              <div id='diary' style={{padding: 8}}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: 8,
                  fontWeight: 500,
                  padding: 8,
                  fontSize: 18,
                  color: this.props.titleColor || '#000',
                  border: `${this.props.titleBorder ? '1px' : '0'} solid rgba(0,0,0,.1)`,
                  background: this.props.titleBg,
                  textTransform: this.props.titleAllCaps ? 'uppercase' : '',
                  borderRadius: this.props.titleCorner
                }}>
                  Accounting diary for {this.props.title}
                </div>
                {this.getArray(context.state.data || this.props.data).map((elt, i, array) => (
                  <>
                    <Header date={elt.date} columnHeader={this.props.columnHeader}
                            columnHeaderColor={this.props.columnHeaderColor}
                            columnHeaderBgColor={this.props.columnHeaderBgColor} index={i} account={this.props.account}
                            amount={this.props.amount}/>
                    {_.orderBy(elt.content, 'isDebit', "asc").map((row, i) => (
                      <Content value={row}
                               length={array.length}
                               account={this.props.account} amount={this.props.amount}/>
                    ))}
                    <Footer account={this.props.account} columnHeader={this.props.columnHeader}
                            index={i}
                            footer={this.props.footer} amount={this.props.amount}/>
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
                  htmlToImage[this.state.toFunc](node, {backgroundColor: '#fff', quality: 1, pixelRatio: 10})
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
  height: 300,
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