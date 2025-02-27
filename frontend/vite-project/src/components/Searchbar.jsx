import React, {useState} from 'react';

const Searchbar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = capitalizeFirstLetter(value);
    setInputValue(capitalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim()) {
      const capitalizedInput = capitalizeFirstLetter(inputValue.trim());
      onSearch(capitalizedInput);
      setInputValue('');
    }
  }

  return(
    <div className='max-w-2xl mx-auto p-4'>
      <form onSubmit={handleSubmit} className='flex gap-2 shadow-lg rounded-lg bg-white/20 p-4'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter city name..."
          className='flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200'
        />
        <button 
          type="submit" 
          aria-label='Search weather' 
          className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar;