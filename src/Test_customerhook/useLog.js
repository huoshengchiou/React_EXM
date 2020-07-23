import { useEffect } from 'react'



export default (val) => {

    useEffect(() => { console.log(val) }, [val])

}