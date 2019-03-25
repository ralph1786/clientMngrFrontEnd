import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import ChildCard from "../components/ChildCard";

class ParentDashboard extends Component {
  render() {
    console.log(this.props.parent.children);

    // let myChildren = this.props.parent.children.map(child => (
    //   <ChildCard key={child.id} child={child} />
    // ));

    return (
      <div>
        <h3>Parent Dashboard</h3>
        {/* {myChildren} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parent: state.provider.parent
  };
};

export default withRouter(connect(mapStateToProps)(ParentDashboard));
