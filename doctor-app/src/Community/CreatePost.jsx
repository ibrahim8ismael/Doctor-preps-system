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
                            <textarea name="" rows="5" className="w-full h-28 resize-none focus:outline-none px-4 py-2.5 text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-start gap-2 inline-flex" placeholder="What is happening?!"></textarea>
                            <div className="w-full px-4 py-2.5 opacity-80 bg-white rounded-bl-lg rounded-br-lg shadow border-l border-r border-b border-gray-300 justify-end items-center inline-flex">
                                <div className="h-6 justify-end items-center gap-3 flex">
                                    <div className="justify-start items-start gap-2.5 flex">
                                        <a href="">
                                            <FontAwesomeIcon icon={faBold} />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faItalic} />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faUnderline} />
                                        </a>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 flex border-x border-gray-200 px-3">
                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignLeft} />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignJustify} />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignRight} />
                                        </a>

                                        <a href="">
                                            <FontAwesomeIcon icon={faAlignCenter} />
                                        </a>

                                    </div>


                                    <div className="justify-start items-center gap-2.5 flex">
                                        <a href="" className="px-[3px] justify-center items-center flex">
                                            <span className="text-black text-lg font-medium leading-6">@</span>
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faHashtag} />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faLink} />
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={faPaperclip} />
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