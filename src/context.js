import { useContext,createContext, useState } from "react";
const itemContext = createContext();
function ContextProvider({children}){
    const [isLoggedIn,setisLoggedIn]= useState(false);
    const handleSignIn=()=>{
        setisLoggedIn(true);
    }
    return(
        <itemContext.Provider value={{isLoggedIn,setisLoggedIn}}>
            {children}
        </itemContext.Provider>
    )
}
function useValue() {
  const value = useContext(itemContext);
  return value;
}
export {useValue};
export default ContextProvider;
