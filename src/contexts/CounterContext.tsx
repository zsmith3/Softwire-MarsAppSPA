import React from 'react'

const CounterContext = React.createContext({count: 0, increment: () => {}})
export default CounterContext

//custom provider
export const CounterProvider : React.FC = ({children}) => {
    const {Provider} = CounterContext
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(count + 1)
    return (
        <Provider value={{count, increment}}>
            {children}
        </Provider>
    )
}
