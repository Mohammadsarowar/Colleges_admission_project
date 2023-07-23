import { useEffect } from "react";


const useTitle = (title) => {
   useEffect(()=>{
    document.title = `${title}-Colleges Admission` ;
   },[title])
};

export default useTitle;