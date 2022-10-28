import { createContext, ReactNode, useEffect, useState } from "react";

interface CardProps {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
  price: number;
  defaultPriceId: string;

}


interface CoffeePropsTypes {
    setCardFunction: (data?: CardProps[], deleteCard?: CardProps) => void;
    card: CardProps[];
    setDeleteCard: (data?: CardProps[]) => void
}

interface CoffeProviderProps {
  children: ReactNode; // qualquer html valido
}


export const IgniteShopContext = createContext({} as CoffeePropsTypes);

export function IgniteShopProvider({ children }: CoffeProviderProps) {
    const [card, setCard] = useState([])

    function setCardFunction(data: [], deleteCard: CardProps) {
        setCard([...card, data])
    }

    function setDeleteCard(data) {
      setCard(data)
  }

  return (
    <IgniteShopContext.Provider
      value={{
        setCardFunction,
        card,
        setDeleteCard
      }}
    >
      {children}
    </IgniteShopContext.Provider>
  );
}
