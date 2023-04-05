import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchResults from "./SearchResults";

function SearchTitlesPage() {

    const [query, setQuery] = useState("");
    const debounced = useDebouncedCallback((value) => setQuery(value), 500);
    
    const handleChange = ({target:{value}}) => {
        
        debounced(value);

        if (value.trim().length === 0) {
            debounced.flush();
        }
    }

    const handleSearch = (e) => {

        e.preventDefault();
        debounced.flush();
    }

    return (
        <>
            <h1>Search titles</h1>
            <p>Powered by <a href="https://www.themoviedb.org">The Movie Database</a></p>
            <Form onSubmit={handleSearch}>
                <Form.Control type="text" placeholder="Search for a film or TV show" onChange={handleChange} />
            </Form>
            <br />
            <SearchResults query={query} />
            <br />
        </>
    );
}

export default SearchTitlesPage;