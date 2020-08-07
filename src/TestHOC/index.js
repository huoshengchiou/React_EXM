import React from 'react'



const HOC = (Component1, Component2) => ({ name = 'sheng' }) => {

    //   設計原則遵循functional programming (FP)  pure no sideeffect
    // 假設當有多個 component 都要做 say good morning 這件事，只要都掛入 HOC 即可，不用在每個元件都重寫 say 的代碼
    return (
        <>
            {Component1 && <Component1 name={name} />}
            {Component2 && <Component2 name={name} />}
        </>
    )


}

export default HOC