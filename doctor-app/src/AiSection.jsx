import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";

const AiSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chats] = useState([
    { id: 1, user: 'AI Assistant', message: 'How can I help you today?', unread: 0, time: 'Now' },
    { id: 2, user: 'Support Bot', message: 'System updates available', unread: 1, time: '2m' },
  ]);

  return (
    <div className="fixed -bottom-[19rem] -right-44 z-50">
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(!isOpen)}className="flex items-center h-10 p-5 rounded-full justify-between bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500 hover:text-indigo-100">
        <FontAwesomeIcon icon={faRobot} />
        <p className='font-bold ml-1'>Ask anything...</p>
      </button>

      {/* Chat Modal */}
      <div className={`transition-all duration-300 transform ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">AI Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* Chat List */}
          <div className="max-h-96 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-500 dark:text-blue-300">AI</span>
                  </div>
                  {chat.unread > 0 && (
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{chat.user}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{chat.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSection;