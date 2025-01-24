import Replay from './Replay.jsx'


function PostBox(){

    return(

    <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
                <div className="w-full flex-col justify-start items-start lg:gap-10 gap-8 flex">
                    <div className="w-full flex-col justify-start items-end gap-5 flex">
                    {/* Comment 1 */}
                        <div className="w-full flex-col justify-center items-start flex">
                            <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-tl-2xl rounded-tr-2xl border-l border-r border-t border-gray-200 dark:border-gray-600 flex-col justify-start items-start gap-8 flex">
                                <div className="w-full flex-col justify-center items-start gap-5 flex">
                                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                                        <img className="w-10 h-10 rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710226776.png" alt="Emily Jones"/>
                                            <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
                                                <div className="w-full justify-between items-center gap-2.5 inline-flex">
                                                    <h5 className="text-gray-900 dark:text-white text-base font-semibold leading-relaxed">Emily Jones</h5>
                                                    <h6 className="text-right text-gray-500 dark:text-gray-400 text-sm font-normal leading-snug">24 April, 12:20 PM</h6>
                                                </div>
                                                <h6 className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-snug">Surgeon doctor at Banha University</h6>
                                            </div>
                                        </div>

                    <p className="text-gray-800 dark:text-gray-100 text-sm font-normal leading-snug">
                      {"Great job on the presentation today, everyone! The client was really impressed with our work. Your dedication and teamwork truly shone through, making a significant impact. Let's keep this momentum going and continue to deliver outstanding results. I'm proud of what we've achieved together and excited about the opportunities ahead. Keep up the excellent work!"}
                    </p>
                  </div>

                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">

                    {/* Likes Logo */}
                    <div className="justify-start items-center gap-1 flex">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 20 20"fill="none"><path d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"fill="url(#paint0_linear_1983_4089)"/><defs><linearGradient id="paint0_linear_1983_4089"x1="0.999512"y1="18.1673"x2="21.6539"y2="6.55364"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug cursor-default">20k</span>
                    </div>

                    {/* Comment logo */}
                     <div className="justify-start items-center gap-1.5 flex">
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg"width="18"height="17"viewBox="0 0 18 17"fill="none"><path fillRule="evenodd"clipRule="evenodd"d="M7.70647 0.833008H10.2929C11.626 0.832997 12.6859 0.832988 13.5252 0.932197C14.3883 1.03422 15.1045 1.24902 15.7039 1.74097C15.9065 1.90718 16.0922 2.0929 16.2584 2.29544C16.7504 2.89488 16.9652 3.61108 17.0672 4.47416C17.1664 5.31343 17.1664 6.37328 17.1664 7.70632L17.1664 9.52437C17.1667 10.5828 17.1668 11.2671 16.989 11.8442C16.5993 13.1091 15.6091 14.0992 14.3442 14.489C13.7672 14.6668 13.0828 14.6666 12.0244 14.6664L11.8978 14.6663C11.5413 14.6663 11.4501 14.6691 11.3724 14.6838C11.1715 14.7218 10.987 14.8205 10.8439 14.9666C10.7886 15.0231 10.7357 15.0975 10.538 15.3941L10.4685 15.4984C10.3404 15.6905 10.2247 15.8641 10.1188 15.9999C10.0079 16.1422 9.86771 16.2974 9.6727 16.4094C9.2592 16.647 8.75738 16.6738 8.32092 16.4816C8.11508 16.391 7.95915 16.2517 7.83372 16.122C7.71396 15.9982 7.58042 15.8379 7.43265 15.6606L7.06221 15.2161C6.89529 15.0157 6.85147 14.9655 6.80808 14.9261C6.65925 14.7909 6.47313 14.7037 6.27401 14.6759C6.21595 14.6678 6.14931 14.6663 5.88856 14.6663L5.78327 14.6664C4.903 14.6665 4.3343 14.6667 3.84846 14.5433C2.42701 14.1823 1.31709 13.0724 0.956105 11.6509C0.832716 11.1651 0.832836 10.5964 0.833022 9.71609L0.833036 7.70644C0.833025 6.37333 0.833016 5.31347 0.932225 4.47416C1.03424 3.61108 1.24904 2.89488 1.74099 2.29544C1.90721 2.0929 2.09293 1.90718 2.29546 1.74097C2.89491 1.24902 3.61111 1.03422 4.47419 0.932197C5.31349 0.832988 6.37337 0.832997 7.70647 0.833008ZM4.94074 7.99194C5.3071 7.9553 5.5744 7.62861 5.53776 7.26225C5.50113 6.89588 5.17443 6.62859 4.80807 6.66522L4.76672 6.66936C4.40036 6.706 4.13306 7.03269 4.1697 7.39905C4.20634 7.76542 4.53303 8.03271 4.89939 7.99608L4.94074 7.99194ZM9.66293 7.26632C9.69956 7.63268 9.43227 7.95937 9.0659 7.99601L9.02456 8.00014C8.65819 8.03678 8.3315 7.76948 8.29486 7.40312C8.25823 7.03676 8.52552 6.71006 8.89189 6.67343L8.93323 6.66929C9.2996 6.63266 9.62629 6.89995 9.66293 7.26632ZM13.2326 7.99601C13.5989 7.95937 13.8662 7.63268 13.8296 7.26632C13.793 6.89995 13.4663 6.63266 13.0999 6.66929L13.0586 6.67343C12.6922 6.71006 12.4249 7.03676 12.4615 7.40312C12.4982 7.76948 12.8249 8.03678 13.1912 8.00014L13.2326 7.99601Z"fill="url(#paint0_linear_2091_183)"/><defs><linearGradient id="paint0_linear_2091_183" x1="0.833008"y1="16.6088"x2="20.1185"y2="6.42151"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug cursor-default">12</span>
                    </div>

                    {/* Share Logo */}
                    <div className="justify-start items-center gap-1.5 flex">
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg"width="18"height="18"viewBox="0 0 18 18"fill="none"><path d="M9.42916 0.140904C9.22824 -0.0157322 8.95562 -0.0441704 8.7267 0.067628C8.49779 0.179426 8.3526 0.411912 8.3526 0.666672V4.007C6.46526 4.11302 4.96414 4.67225 3.78655 5.55105C2.47961 6.52639 1.62031 7.85847 1.05816 9.28015C-0.0570943 12.1006 -0.0478449 15.3937 0.0294148 17.3595C0.0436736 17.7223 0.345643 18.007 0.70866 17.9999C1.07168 17.9927 1.36223 17.6964 1.36223 17.3333C1.36223 17.2088 1.40097 16.9855 1.5124 16.6619C1.62035 16.3485 1.78352 15.978 1.99851 15.572C2.42862 14.7597 3.04819 13.8391 3.79305 12.9928C4.53966 12.1445 5.39286 11.3927 6.28396 10.8938C6.97921 10.5045 7.67478 10.2811 8.3526 10.2644V13.6296C8.3526 13.8844 8.49779 14.1169 8.7267 14.2287C8.95562 14.3405 9.22824 14.312 9.42916 14.1554L17.7429 7.67392C17.9049 7.5476 17.9997 7.35361 17.9997 7.14815C17.9997 6.94269 17.9049 6.74871 17.7429 6.62239L9.42916 0.140904Z"fill="url(#paint0_linear_2091_333)"/><defs><linearGradient id="paint0_linear_2091_333"x1="-0.000488281"y1="18"x2="21.5687"y2="6.99523"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug cursor-default">10</span>
                    </div>


                    {/* Leave Comment Section */}
                    




                     </div>
                </div>
            </div>
            <div className="w-full flex justify-between relative">
                        <div className="w-full flex justify-between relative">
                            <input type="text"className="relative dark:bg-gray-700 w-full h-14 focus:outline-none border-x border-gray-200 dark:border-gray-600 border-b rounded-b-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-3 pr-5 pl-[50px] bg-gray-50 placeholder-gray-400 text-gray-900 dark:text-white text-lg font-normal leading-8"placeholder="Write comment reply..."/>
                            <img className="w-6 h-6 rounded-full absolute top-3.5 left-5 mr-2 object-cover"src="https://pagedone.io/asset/uploads/1710307723.png"alt="Avatar image"/>
                        </div>
                        <a href="#" className="absolute right-6 top-[18px]"><svg xmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 20 20"fill="none"><path d="M15.9468 0.767895C16.9499 0.589454 17.933 0.614418 18.6592 1.34067C19.3855 2.06693 19.4104 3.05001 19.232 4.05309C19.055 5.04807 18.6261 6.33479 18.0931 7.93357L16.3147 13.2689C15.7296 15.0242 15.2619 16.4274 14.7732 17.4017C14.2866 18.3716 13.6399 19.203 12.5608 19.313C11.4818 19.4229 10.6807 18.739 10.0085 17.8871C9.33338 17.0314 8.59229 15.7513 7.66527 14.15L7.42719 13.7388C7.42289 13.7313 7.41864 13.724 7.41444 13.7168L11.8977 9.23349C12.2101 8.92107 12.2101 8.41454 11.8977 8.10212C11.5853 7.7897 11.0788 7.7897 10.7663 8.10212L6.28306 12.5854C6.27583 12.5812 6.26853 12.577 6.26114 12.5727L5.8498 12.3346C4.24859 11.4076 2.96851 10.6665 2.11282 9.99137C1.26091 9.31922 0.576999 8.51814 0.686927 7.43907C0.796853 6.36 1.62825 5.71329 2.59821 5.22673C3.57247 4.73802 4.97573 4.27028 6.73102 3.68522L12.0663 1.90678C13.6651 1.37382 14.9518 0.944894 15.9468 0.767895Z"fill="url(#paint0_linear_30859_3615)"/><defs><linearGradient id="paint0_linear_30859_3615"x1="0.675293"y1="19.3246"x2="23.0223"y2="7.92306"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                    </div>
        </div>

            {/* Add more comments if necessary */}


            <Replay />
            <Replay />
            <Replay />
            <Replay />
            <Replay />
            <Replay />
            <Replay />

            </div>
          </div>
        </div>
      </div>
    </section>
  




    );
}

export default PostBox;