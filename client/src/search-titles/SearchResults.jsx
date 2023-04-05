import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import SearchResultPlaceholder from "./SearchResultPlaceholder";


function SearchResults({query, ...props}) {

    const [isLoaded, setLoaded] = useState(true);
    const [results, setResults] = useState({results: []});

    useEffect(() => {

        if (query.trim().length === 0) {
            
            setLoaded(true);
            setResults({results: []});
            return;
        }

        setLoaded(false);

        fetch("/titles?" + new URLSearchParams({query: query}))
            .then(res => res.json())
            .then((res) => {
                setResults(res);
                setLoaded(true);
            });
            
    }, [query]);

    return (
        <>
            <ListGroup>
                {isLoaded
                    ? results.results.map(result => <SearchResult key={result.id} result={result} />) 
                    : [0, 1].map(i => <SearchResultPlaceholder key={i} />)
                }
            </ListGroup>
        </>
    )
}

export default SearchResults;