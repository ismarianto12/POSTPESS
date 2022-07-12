import Template from "../../components/template"
import * as Icon from 'react-feather'
import { useState } from "react"
import ModalBarang from "../../components/modalbarang"

const Penjualan = () => {

    const [show, setShow] = useState(false)
    const onClick = (e) => {
        console.log('ON CLICK, clientX:', e.clientX)
    }

    return (<>

        <Template container={<>
         
            <ModalBarang show={show} />

            <div className="container">
                <div className="row">
                    <div className='title' style={{
                        'margin-top': '30px',
                        'font-weight': 'bold'
                    }}>
                        <h3><Icon.Coffee /><span> Penjualan</span></h3>
                        <hr />


                    </div>
                    <div className="col-md-6">
                        <div className="cccard">
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <tr>
                                        <th>
                                            @
                                        </th>
                                        <th>
                                            Nama barang
                                        </th>
                                        <th>
                                            Harga
                                        </th> <th>
                                            Qty
                                        </th>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="cccard">
                            <div className="card-body">

                                <form action="" className="form-horizontal" method="POST">
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Barang</b></label>
                                        <div className="col-md-7">
                                            <input type={'text'} name="username" className="form-control" onClick={() => {
                                                setShow(true)
                                            }} value=""></input>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Qty</b></label>
                                        <div className="col-md-3">
                                            <input type={'text'} name="username" className="form-control col-md-3" onChange={''} value=""></input>

                                        </div>
                                        <div className="col-md-5">
                                            <button className="btn btn-info col-md-4" type="reset"><Icon.Minus /></button>
                                            <button className="btn btn-warning col-md-4" type="reset"><Icon.Plus></Icon.Plus> </button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Harga Satuan</b></label>
                                        <div className="col-md-7">
                                            NULL

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <div style={{ 'text-align': 'right' }}>
                                            <b>  Total</b>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <button className="btn btn-info col-md-5" type="reset"><Icon.Save /> Tambahkan</button>
                                        <button className="btn btn-warning col-md-6" type="reset"><Icon.RefreshCcw />  Reset</button>
                                    </div>


                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>} />

    </>)
}

export default Penjualan