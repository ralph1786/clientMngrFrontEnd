import React, { Component, Fragment } from "react";
import ChildCard from "../components/ChildCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { allChildren, searchWord } from "../actions/childActions";
import SearchBar from "../components/UX/SearchBar";
import "./ChildrenList.scss";

export class ChildrenList extends Component {
  componentDidMount() {
    this.props.allChildren();
  }

  changeHandler = e => {
    this.props.search(e.target.value);
  };

  childrenFilteredList = () => {
    const listChildren = this.props.children
      .filter(child =>
        child.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
      )
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map(child => <ChildCard key={child.id} child={child} />);
    return listChildren;
  };

  render() {
    return (
      <Fragment>
        <div className="search-bar">
          <SearchBar
            searchWord={this.props.searchWord}
            onChange={this.changeHandler}
          />
        </div>
        <ul className="children-list">{this.childrenFilteredList()}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.children.children,
    searchTerm: state.children.searchWord
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allChildren: () => dispatch(allChildren()),
    search: word => dispatch(searchWord(word))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChildrenList)
);
