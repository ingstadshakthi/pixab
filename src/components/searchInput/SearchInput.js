import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search"
                value={this.state.entry}
                onChange={(event) => {
                  this.setState({ entry: event.target.value });
                }}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
