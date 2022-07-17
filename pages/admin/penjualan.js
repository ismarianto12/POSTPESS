import Template from "../../components/template"
import * as Icon from 'react-feather'
import { useState } from "react"
import Cpenjualan from "../../components/penjualan/Cpenjualan"

const Penjualan = () => {

    const [show, setShow] = useState(false)
    const onClick = (e) => {
        console.log('ON CLICK, clientX:', e.clientX)
    }

    return (<>

        <Template container={<>
            <Cpenjualan />
        </>} />

    </>)
}

export default Penjualan