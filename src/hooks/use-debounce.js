import { useEffect, useState } from "react";

function useDebounce({ text, delay = 300,router }) {
  const [searchValue, setSearchValue] = useState("");    
  useEffect(() => {   
    const timeoutId = setTimeout(() => {
      setSearchValue(text); 
      router.push({
         pathname: router.pathname,
         query:{...router.query,search:text}
       })
      if (!text) {
        router.push({
          pathname: router.pathname,
          query:{}
        })
      }
     }, delay);  
     return () => clearTimeout(timeoutId);  
  }, [text, delay]);
 
  
  return searchValue;
}

export default useDebounce;
