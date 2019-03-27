import React, { Component } from "react";
import ChildCard from "../components/ChildCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { allChildren } from "../actions/childActions";
import SearchBar from "../components/SearchBar";
import "./ChildrenList.scss";

class ChildrenList extends Component {
  state = {
    searchWord: ""
  };

  componentDidMount() {
    this.props.allChildren();
  }

  changeHandler = e => {
    this.setState({
      searchWord: e.target.value
    });
  };

  childrenFilteredList = () => {
    const listChildren = this.props.children
      .filter(child =>
        child.name.toLowerCase().includes(this.state.searchWord.toLowerCase())
      )
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map(child => <ChildCard key={child.id} child={child} />);
    return listChildren;
  };

  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar
            searchWord={this.state.searchWord}
            onChange={this.changeHandler}
          />
        </div>
        <div className="children-list">{this.childrenFilteredList()}</div>
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
