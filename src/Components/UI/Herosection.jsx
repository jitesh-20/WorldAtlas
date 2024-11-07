import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation.Sort,
                        Search and Filter through countries to find the details you need.
                    </p>
                    <NavLink to="/country">
                        <button className="btn btn-darken btn-inline bg-white-box">
                            Start Exploring <FaLongArrowAltRight />
                            {/* <NavLink to="/country">Start Exploring <FaLongArrowAltRight /></NavLink> */}
                        </button>
                    </NavLink>
                </div>

                <div className="hero-image">
                    {/* <img src="/images/pexels-pixabay-87651.jpg" alt="Image Not Loaded" className="banner-image"/> */}
                    <img src="/images/world.png" alt="Image Not Loaded" className="banner-image" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection