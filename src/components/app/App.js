import React, { Component } from "react";
import axios from "axios";
import SearchInput from "../searchInput/SearchInput";
import ImageList from "../imageList/ImageList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=21690108-75276e5f75df11246c14ef633&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
