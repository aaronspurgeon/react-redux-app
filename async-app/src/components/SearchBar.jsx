import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/search';
import Location from './Location'

const SearchBar = (props) => {
    const [query, setQuery] = useState('san');

    const handleChanges = e => {
        setQuery(e.target.value)
    }
    useEffect(() => {
        props.fetchWeather()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        props.fetchWeather(query)
    }
    console.log(props.searchResults)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='search for a cities weather' name='query' value={query} onChange={handleChanges} />
                <button type='submit'>Search</button>
            </form>
            {/* <Location searchResults={props.searchResults} /> */}
            {props.searchResults.map((item, index) => {
                return <h2 key={index}>{item.title}</h2>
            })}
        </div>

    )
}

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = {
    fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

