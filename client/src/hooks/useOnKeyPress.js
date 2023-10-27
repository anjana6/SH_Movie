import { useEffect } from 'react'

export const useOnKeyPress = (callback, targetKey) => {
    useEffect(() => {
        const keyPressHandler = (event) => {
            if (event.key === targetKey) {
                event.preventDefault()
                callback()
            }
        }

        window.addEventListener('keyup', keyPressHandler)
        return () => {
            window.removeEventListener('keydown', keyPressHandler)
        }
    }, [callback, targetKey])

}

