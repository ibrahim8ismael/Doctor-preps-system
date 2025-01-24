import Buttons from "./Buttons.jsx"
import CreatePost from "./CreatePost.jsx"
import PostBox from './PostBox';



function ComPage(){

    return (
        <div className="content w-[54rem] relative right-5 rounded-3xl bg-white dark:bg-gray-900 mt-5 p-5">
            <Buttons />
            <CreatePost />

            <hr className="mt-10" />

            <PostBox />


        </div>
    )
}

export default ComPage