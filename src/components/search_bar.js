import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input  onChange={(ev) => {this.setState({ term : ev.target.value }); this.props.onSearch(this.state.term);}} value={this.state.term} />
            </div>
        );
    }
};

export default SearchBar;