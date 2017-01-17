import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={(ev) => this.setState({ term: ev.target.value })} value={this.state.term} />
            </div>
        );
    }
};

export default SearchBar;