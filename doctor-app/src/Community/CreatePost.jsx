import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHashtag,
    faLink,
    faPaperclip,
    faAlignLeft,
    faAlignJustify,
    faAlignRight,
    faAlignCenter,
    faBold,
    faItalic,
    faUnderline,
  
} from "@fortawesome/free-solid-svg-icons";

function CreatePost(){

    return(
        <div className="post-box">
            <div className="w-full flex-col justify-center items-end gap-6 flex mt-8">
                        <div className="w-full flex-col justify-start items-start flex">
                            <textarea name="" rows="5" className="w-full h-28 resize-none focus:outline-none px-4 py-2.5 text-gray-900 dark:text-white dark:bg-gray-900 placeholder-gray-400 text-lg font-normal leading-8 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-start gap-2 inline-flex" placeholder="What is happening?!"></textarea>
                            <div className="w-full px-4 py-2.5 opacity-80 bg-white dark:bg-gray-900 rounded-bl-lg rounded-br-lg shadow border-l border-r border-b border-gray-100 justify-end items-center inline-flex">
                                <div className="h-6 justify-end items-center gap-3 flex">
                                    <div className="justify-start items-start gap-2.5 flex">
                                        <a href="">
                                            <FontAwesomeIcon icon={faBold} className="dark:text-white text-black" />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faItalic} className="dark:text-white text-black" />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faUnderline} className="dark:text-white text-black" />
                                        </a>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 flex border-x border-gray-100 px-3">
                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignLeft} className="dark:text-white text-black" />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignJustify} className="dark:text-white text-black" />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignRight} className="dark:text-white text-black" />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignCenter} className="dark:text-white text-black" />
                                        </a>

                                    </div>


                                    <div className="justify-start items-center gap-2.5 flex">
                                        <a href="" className="px-[3px] justify-center items-center flex">
                                            <span className="dark:text-white text-black text-lg font-medium leading-6">@</span>
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faHashtag} className="dark:text-white text-black" />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faLink} className="dark:text-white text-black" />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faPaperclip} className="dark:text-white text-black" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-36 px-5 py-2.5 bg-gradient-to-tr from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">Post</span>
                        </button>
                    </div>
                </div>
    );
}

export default CreatePost;