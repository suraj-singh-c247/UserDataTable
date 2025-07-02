import { useEffect, useState } from "react";

function useDebounce({ text, delay = 300 }) {
  const [searchValue, setSearchValue] = useState("");    
  useEffect(() => {   
     const timeoutId = setTimeout(() => {
        setSearchValue(text);
     }, delay);  
     return () => clearTimeout(timeoutId);  
  }, [text, delay]);
 
  
  return searchValue;
}

export default useDebounce;
