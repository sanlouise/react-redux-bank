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

export default

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}


/*

You will need to create a mapDispatchToProps function here and
return the action creator selectAccount - HINT: see the UserList
component.

*/

//
// export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
