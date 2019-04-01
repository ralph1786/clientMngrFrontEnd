import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allParents } from "../actions/parentActions";

class ParentSelect extends Component {
  componentDidMount() {
    this.props.allParents();
  }

  render() {
    console.log(this.props.parents);
    return (
      <div>
        <h2>hello</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parents: state.parents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allParents: () => dispatch(allParents())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ParentSelect)
);
