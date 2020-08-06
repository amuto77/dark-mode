import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("Yes", true)
    return [darkMode, setDarkMode]
}