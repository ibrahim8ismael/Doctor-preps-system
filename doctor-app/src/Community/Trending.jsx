

function Trending(){
    const trendingTopics = [
        { id: 1, hashtag: "#ArtificialIntelligence", tweets: "12.5K Tweets" },
        { id: 2, hashtag: "#WebDevelopment", tweets: "9.3K Tweets" },
        { id: 3, hashtag: "#ReactJS", tweets: "15.7K Tweets" },
        { id: 4, hashtag: "#TailwindCSS", tweets: "8.1K Tweets" },
        { id: 5, hashtag: "#DoctorPreps", tweets: "3.2K Tweets" },
      ];
    
      return (
        <div className="w-[15rem] h-fit bg-white dark:bg-gray-900 mr-5 mt-5 rounded-2xl shadow-md p-4">
          {/* Header */}
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            {"What's Happening"}
          </h2>
  
          {/* Trending Topics */}
          <ul className="space-y-3">
            {trendingTopics.map((topic) => (
              <li key={topic.id}className="flex flex-col p-1">
                <a href="#" className="font-medium text-black dark:text-white hover:underline">
                  {topic.hashtag}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {topic.tweets}
                </span>
              </li>
            ))}
          </ul>
  
          {/* Show More Button */}
          <button className="mt-4 w-full text-sm font-medium text-blue-500 hover:underline">
            Show more
          </button>
        </div>
    )
}

export default Trending