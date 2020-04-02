import React, { useState, createContext } from 'react'

export const ThemeContext = createContext({
    theme: 'white',
    onChangeTheme: () => { }
})

export const LocaleContext = createContext({
    locale: 'id',
    onChangeLocale: () => { }
})

export default (props) => {
    const [state, setState] = useState({
        theme: "white",
        locale: "id"
    })

    const onChangeTheme = () => {
        setState({
            ...state,
            theme: state.theme === 'white' ? 'dark' : 'white'
        })
    }

    const onChangeLocale = () => {
        setState({
            ...state,
            locale: state.locale === 'id' ? 'en' : 'id'
        })
    }

    return (
        <ThemeContext.Provider value={{
            theme: state.theme,
            onChangeTheme
        }}>
            <LocaleContext.Provider value={{
                locale: state.locale,
                onChangeLocale
            }}>
                {props.children}
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    )
}