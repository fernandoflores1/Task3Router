import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const useGifts = () => {
    return useContext(GiftContext);
};

export function GiftProvider({ children }) {
    const [gifts, setGifts] = useState([]);

    const generateId = () => {
        const part1 = Date.now().toString(35)
        const part2 = Math.random().toString(36).slice(2)
        return part1 + part2
    }

    const addGift = (name, description) => {
        if (!name.trim()) return;

        const newGift = {
        id: generateId(),
        name,
        description,
        };

        setGifts([...gifts, newGift]);
    };

    const getGiftById = (id) => {
        return gifts.find((gift) => gift.id === id);
    };

    return (
        <GiftContext.Provider value={{ gifts, addGift, getGiftById }}>
        {children}
        </GiftContext.Provider>
    );
}