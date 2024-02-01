import React, { useState } from 'react';


const AnagramChecker = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [areAnagrams, setAreAnagrams] = useState(null);

  const checkAnagrams = () => {
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');

    setAreAnagrams(sortedWord1 === sortedWord2);
  };

  const resetInputs = () => {
    setWord1('');
    setWord2('');
    setAreAnagrams(null);
  };

  return (
    <div>
      <h2>Anagram Checker</h2>
      <div>
        <label>Word 1: </label>
        <input
          type="text"
          value={word1}
          onChange={(e) => setWord1(e.target.value)}
        />
      </div>
      <div>
        <label>Word 2:</label>
        <input
          type="text"
          value={word2}
          onChange={(e) => setWord2(e.target.value)}
        />
      </div>
      <button onClick={checkAnagrams}>Check Anagrams</button>
      <button onClick={resetInputs}>Reset</button>
      {areAnagrams !== null && (
        <p>
          {word1} and {word2} are {areAnagrams ? 'anagrams' : 'not anagrams'}.
        </p>
      )}
    </div>
  );
};

export default AnagramChecker;
