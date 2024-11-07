import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Error Occured! No Page Found...</h2>
            {error && <p>{error.data}</p>}
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}

export default Error;