import Placeholder from "react-bootstrap/Placeholder";
import LazyLoad from "react-lazy-load"
import { useState, useEffect } from "react";

function LazyLoadImage({src, fallback, style, offset=512, ...props}) {

    const [isLoaded, setLoaded] = useState(false);
    const [source, setSource] = useState(src);

    return (
        <>
            {isLoaded ? null : 
                <Placeholder animation="glow">
                    <Placeholder style={style} />
                </Placeholder>
            }

            {src &&
                <LazyLoad offset={offset}>
                    <img
                        src={source}
                        style={isLoaded ? style : {display: "none"}} 
                        onLoad={() => setLoaded(true)}
                        onError={() => setSource(fallback)}
                        {...props}
                    />
                </LazyLoad>
            }
        </>
    )
}

export default LazyLoadImage;