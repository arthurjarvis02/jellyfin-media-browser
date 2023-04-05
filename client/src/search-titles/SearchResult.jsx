import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LazyLoadImage from "../components/LazyLoadImage";

function SearchResultItem({result, ...props}) {

    const year = (result.first_air_date || result.release_date)?.split("-")[0];

    return (
        <ListGroupItem action href="/">
            <Row>
                <Col md="auto">
                    <LazyLoadImage
                        style={{width: "154px", height: "231px"}}
                        src={"https://image.tmdb.org/t/p/w154" + result.poster_path}
                        fallback={"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png"}
                    />
                    
                </Col>
                <Col>
                    <h4>{result.title || result.name}</h4>
                    {year && <p>{year}</p>}
                    <p>{result.overview}</p>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

const hi = "<img src={\"https://image.tmdb.org/t/p/w154\" + result.poster_path} />"

export default SearchResultItem;