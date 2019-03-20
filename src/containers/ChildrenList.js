import React, { Component } from "react";
import ChildCard from "../components/ChildCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { allChildren } from "../actions/childActions";
import SearchBar from "../components/SearchBar";
import "./ChildrenList.scss";

class ChildrenList extends Component {
  state = {
    searchWord: "",
    filteredList: this.props.children
  };

  componentDidMount() {
    this.props.allChildren();
  }

  changeHandler = e => {
    let newArray = this.props.children.filter(child =>
      child.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      searchWord: e.target.value,
      filteredList: newArray
    });
  };

  render() {
    // console.log(this.props.children);
    // console.log(this.state.filteredList);
    // const listChildren = this.state.filteredList.map(child => (
    //   <ChildCard key={child.id} child={child} />
    // ));
    const listChildren = this.props.children.map(child => (
      <ChildCard key={child.id} child={child} />
    ));
    return (
      <div>
        <div className="search-bar">
          <SearchBar
            searchWord={this.state.searchWord}
            onChange={this.changeHandler}
          />
        </div>
        <div className="children-list">{listChildren}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.children
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allChildren: () => dispatch(allChildren())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChildrenList)
);
