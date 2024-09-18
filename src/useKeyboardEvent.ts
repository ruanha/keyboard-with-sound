import { useEffect } from 'react';

export const useKeyboardEvent = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            console.log(key);
        };
        document.addEventListener('keydown', handleKeyDown, true);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })
}