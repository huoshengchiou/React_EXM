
import React from 'react'



export const myHOC = (Component) => () => {
    const HOCgift = 'HOCgift'

    return (<>

        <Component HOCgift={HOCgift} />

    </>)

}