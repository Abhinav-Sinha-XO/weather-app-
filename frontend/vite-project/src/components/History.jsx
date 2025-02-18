import React from 'react';


const History = ({ items = [], onSelect = () => {} }) => {
  
  const formatTimeStamp = (timeStamp) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const date = new Date(timeStamp);
    
    return date.toLocaleDateString('en-US', options);
  };
  

  return (
    <div className="history-container bg-blue-400 rounded-t-full shadow-2xl shadow-amber-300">
      <h3 className="pb-5 underline font-semibold dark:text-gray-700 pl-4 text-2xl flex justify-center">Search History</h3>
      {items.length === 0 ? (
        <p className="empty-message flex justify-center text-3xl">No search history yet......</p>
      ) : (
        <ul className="history-list cursor-pointer flex flex-col sm:flex-row pl-9">
          {items.map((item) => (
            <li
              key={item._id}
              className="history-item mb-10 ms-4 flex flex-col items-center sm:items-start"
              onClick={() => onSelect(item.city)}
            >
              <div className="absolute w-4 h-3 rounded-full mt-1.5 -start-1.5 dark:bg-gray-700"></div>
             
              <h3 className="text-xl font-semibold text-gray-900">{item.city}</h3>
              <p className="text-base font-normal text-gray-600">
                {item.timeStamp ? formatTimeStamp(item.timeStamp) : 'Invalid date'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



export default History;