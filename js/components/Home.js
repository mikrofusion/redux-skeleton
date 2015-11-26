import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    /* eslint-disable no-alert */
    return (
      <main>
        <h1>Welcome {title}!</h1>
        <button onClick={() => actions.changeTitle(prompt())}>
          Update Title
        </button>
      </main>
    );
    /* eslint-enable no-alert */
  }
}

Home.propTypes = {
  title: React.PropTypes.string,
  dispatch: React.PropTypes.func
};

export default connect(state => state.Sample)(Home);
