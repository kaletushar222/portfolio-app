import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typeSpeed = 150, delay = 500 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      const currentWord = words[wordIndex % words.length];
      if (isTyping) {
        // Typing logic
        if (text.length < currentWord.length) {
          const typingTimer = setTimeout(() => {
            setText((prev) => currentWord.slice(0, prev.length + 1));
          }, typeSpeed);
          return () => clearTimeout(typingTimer);
        } else {
          // Finished typing, wait before deleting
          const waitBeforeDelete = setTimeout(() => {
            setIsTyping(false);
          }, delay);
          return () => clearTimeout(waitBeforeDelete);
        }
      } else {
        // Deleting logic
        if (text.length > 0) {
          const deletingTimer = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
          }, typeSpeed / 2);
          return () => clearTimeout(deletingTimer);
        } else {
          // Finished deleting, move to next word
          setWordIndex((prev) => prev + 1);
          setIsTyping(true);
        }
      }
    }, [text, isTyping, words, wordIndex, typeSpeed, delay]);
  
    return (
      <span style={{ alignItems: 'center' }}>
        {text}
        <span className="cursor" />
      </span>
    );
}
  

export default Typewriter;