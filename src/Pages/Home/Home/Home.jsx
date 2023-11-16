import Banner from "../Banner/Banner";
import Bistroboss from "../BistroBoss/Bistroboss";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistroboss></Bistroboss>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;