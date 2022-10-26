import { createContext, ReactNode, useEffect, useState } from "react";




interface CoffeePropsTypes {
    setCardFunction: ([]) => void;
    card: any;
}

interface CoffeProviderProps {
  children: ReactNode; // qualquer html valido
}


export const IgniteShopContext = createContext({} as CoffeePropsTypes);

export function IgniteShopProvider({ children }: CoffeProviderProps) {
    const [card, setCard] = useState([])


    function setCardFunction(data: []) {
        setCard([...card, data])
    }

  return (
    <IgniteShopContext.Provider
      value={{
        setCardFunction,
        card
      }}
    >
      {children}
    </IgniteShopContext.Provider>
  );
}
