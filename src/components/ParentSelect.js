import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allParents } from "../actions/parentActions";

class ParentSelect extends Component {
  componentDidMount() {
    this.props.allParents();
  }

  render() {
    // console.log(this.props);
    const { name, value, handleSelectChange } = this.props;
    const listParents = this.props.parents.map(parent => (
      <option key={parent.id} value={parent.id}>
        {parent.name}
      </option>
    ));
    return (
      <select name={name} value={value} onChange={handleSelectChange}>
        {listParents}
      </select>
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
