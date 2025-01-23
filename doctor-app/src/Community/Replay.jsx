

function Replay(){

    return(
            <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                    <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                            <img className="w-10 h-10 rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710225753.png"alt="John smith image" />
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                        </div>
                        <span className="text-right text-gray-500 text-xs font-normal leading-5">Feb. 09,2024</span>
                    </div>

                    {/* Comment Content */}
                    <p className="text-gray-800 text-sm font-normal leading-snug">Aliquam sed diam tellus purus nulla consequat fermentum pulvinar. Erat consequat cras eget sed sed rhoncus auctor. Vel est est turpis vehicula natoque hendrerit id a elementum. Pellentesque viverra nibh eget morbi lorem risus augue. Donec risus curabitur quis pulvinar gravida pellentesque. Purus cras consectetur nisl a lacus. Non adipiscing proin lorem at eu. Adipiscing urna arcu neque ut eu ultrices ac libero. Est consequat dictumst arcu convallis.</p>

                        {/* Like and comments Logoa */}
                        <div className="justify-start items-start gap-6 inline-flex">
                            {/* Like */}
                            <div className="justify-center items-center gap-2 flex">
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 20 20"fill="none"><path d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"fill="url(#paint0_linear_1983_4089)"/><defs><linearGradient id="paint0_linear_1983_4089"x1="0.999512"y1="18.1673"x2="21.6539"y2="6.55364"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                                <h5 className="text-black text-sm font-normal leading-snug">100 Likes</h5>
                            </div>

                            {/* Comment */}
                            <div className="justify-center items-center gap-2 flex">
                                    <a href=""><svg xmlns="http://www.w3.org/2000/svg"width="18"height="17"viewBox="0 0 18 17"fill="none"><path fillRule="evenodd"clipRule="evenodd"d="M7.70647 0.833008H10.2929C11.626 0.832997 12.6859 0.832988 13.5252 0.932197C14.3883 1.03422 15.1045 1.24902 15.7039 1.74097C15.9065 1.90718 16.0922 2.0929 16.2584 2.29544C16.7504 2.89488 16.9652 3.61108 17.0672 4.47416C17.1664 5.31343 17.1664 6.37328 17.1664 7.70632L17.1664 9.52437C17.1667 10.5828 17.1668 11.2671 16.989 11.8442C16.5993 13.1091 15.6091 14.0992 14.3442 14.489C13.7672 14.6668 13.0828 14.6666 12.0244 14.6664L11.8978 14.6663C11.5413 14.6663 11.4501 14.6691 11.3724 14.6838C11.1715 14.7218 10.987 14.8205 10.8439 14.9666C10.7886 15.0231 10.7357 15.0975 10.538 15.3941L10.4685 15.4984C10.3404 15.6905 10.2247 15.8641 10.1188 15.9999C10.0079 16.1422 9.86771 16.2974 9.6727 16.4094C9.2592 16.647 8.75738 16.6738 8.32092 16.4816C8.11508 16.391 7.95915 16.2517 7.83372 16.122C7.71396 15.9982 7.58042 15.8379 7.43265 15.6606L7.06221 15.2161C6.89529 15.0157 6.85147 14.9655 6.80808 14.9261C6.65925 14.7909 6.47313 14.7037 6.27401 14.6759C6.21595 14.6678 6.14931 14.6663 5.88856 14.6663L5.78327 14.6664C4.903 14.6665 4.3343 14.6667 3.84846 14.5433C2.42701 14.1823 1.31709 13.0724 0.956105 11.6509C0.832716 11.1651 0.832836 10.5964 0.833022 9.71609L0.833036 7.70644C0.833025 6.37333 0.833016 5.31347 0.932225 4.47416C1.03424 3.61108 1.24904 2.89488 1.74099 2.29544C1.90721 2.0929 2.09293 1.90718 2.29546 1.74097C2.89491 1.24902 3.61111 1.03422 4.47419 0.932197C5.31349 0.832988 6.37337 0.832997 7.70647 0.833008ZM4.94074 7.99194C5.3071 7.9553 5.5744 7.62861 5.53776 7.26225C5.50113 6.89588 5.17443 6.62859 4.80807 6.66522L4.76672 6.66936C4.40036 6.706 4.13306 7.03269 4.1697 7.39905C4.20634 7.76542 4.53303 8.03271 4.89939 7.99608L4.94074 7.99194ZM9.66293 7.26632C9.69956 7.63268 9.43227 7.95937 9.0659 7.99601L9.02456 8.00014C8.65819 8.03678 8.3315 7.76948 8.29486 7.40312C8.25823 7.03676 8.52552 6.71006 8.89189 6.67343L8.93323 6.66929C9.2996 6.63266 9.62629 6.89995 9.66293 7.26632ZM13.2326 7.99601C13.5989 7.95937 13.8662 7.63268 13.8296 7.26632C13.793 6.89995 13.4663 6.63266 13.0999 6.66929L13.0586 6.67343C12.6922 6.71006 12.4249 7.03676 12.4615 7.40312C12.4982 7.76948 12.8249 8.03678 13.1912 8.00014L13.2326 7.99601Z"fill="url(#paint0_linear_2091_183)"/><defs><linearGradient id="paint0_linear_2091_183" x1="0.833008"y1="16.6088"x2="20.1185"y2="6.42151"gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#93C5FD" /></linearGradient></defs></svg></a>
                                    <h5 className="text-black text-sm font-normal leading-snug">Replay</h5>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default Replay;