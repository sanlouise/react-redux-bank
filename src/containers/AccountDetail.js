import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  render () {
    return (
      <div className=''>
        <h3>{this.props.account.accountType}</h3>
        <h4>{this.props.account.balance}</h4>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const userId = state.users.findIndex(user => user._id === props.match.params.id);
  const accountId = state.users[userId].accounts.filter(account =>
    account.id == props.match.params.accountID
  );

  console.log("This is the id " + props.match.params.accountID)
  console.log("This is the account id " + accountId[0].id)

  const accountIdx = state.users[userId].accounts.findIndex(account => account.id === state.selectedAccount);

  return {
    account: state.users[userId].accounts[accountId[0].id],
    user: state.users[userId],
    selectedUser: state.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
