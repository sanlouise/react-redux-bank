import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  render () {
    return (
      <div className=''>
        ...
      </div>
    )
  }
}

function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
