import ComPage from "./ComPage.jsx";
import Trending from "./Trending.jsx";


function Community(){

    return (
        <div className="flex justify-between">
            <ComPage />
            <Trending />
        </div>
    );
}

export default Community