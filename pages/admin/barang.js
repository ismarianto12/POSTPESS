import Link from "next/link"
import Router from 'next/router'
import { useEffect, useState } from "react"
import Template from "../../components/template"

import { useSelector, useDispatch } from 'react-redux'
import { createbarang, deletebarang, updatebarang } from '../../actions/barang'
import * as Icon from 'react-feather'
import DataTable from "react-data-table-component"
import Modal from 'react-modal';
import SlideDrawer from "../../components/drawer/Slidedrawer"
import Backdrop from "../../components/drawer/Backdrop"

const Barang = () => {
    const [username, setUsername] = useState('')
    const dispacth = useDispatch()

    const [show, setShow] = useState(false)

    const data = useSelector((state) => state.barang.value)
    const ll = typeof window != 'undefined' ? localStorage.getItem('username') : null
    const [value, setValue] = useState({
        kode: '',
        nama: '',
        jenis: '',
        hargajual: '',
        hargabeli: '',
        stok: '',
    })
    useEffect(() => {
        setUsername(ll)
        return () => {
            if (ll == '' || ll == null) {
                Router.push('/');
            }
        }
    }, [])
    const customStyles = {
        rows: {
            style: {
                // minHeight: '72px',
            },
        },
        headCells: {
            style: {
                // paddingLeft: '8px', // override the cell padding for head cells
                // paddingRight: '8px',
                fontSize: '15px',
                fontWeight: 'bold'// override the row height

            },
        },
        cells: {
            style: {
                // paddingLeft: '8px', // override the cell padding for data cells
                // paddingRight: '8px',
            },
        },
    };

    const modalStyle = {
        content: {
            // with: '150px',
            top: '30%',
            left: '80%',
            right: 'auto',
            bottom: 'auto',
            // marginRight: '-150%',
            transform: 'translate(-50%, -50%)',
        },
    }

    const columns = [
        {
            name: '#',
            selector: row => row.kode,
        },
        {
            name: 'Kode',
            selector: row => row.kode,
        },
        {
            name: 'Nama',
            selector: row => row.nama,
        },
        {
            name: 'Jenis',
            selector: row => row.jenis,
        },
        {
            name: 'Harga Jual',
            selector: row => row.hargajual,
        },
        {
            name: 'Harga Beli',
            selector: row => row.hargabeli,
        },
        {
            name: 'Harga Beli',
            selector: row => row.stok,
        },
        {
            name: 'Action',
            button: true,
            cell: row => (
                <>
                    <button className="btn btn-primary btn-sm" onClick={() => { Editdata(row.id) }}><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-danger btn-sm" onClick={() => { Hapusdata(row.id) }}><i className="fa fa-trash"></i></button>
                </>
            ),
        },


    ]
    const closeModal = () => {
        setShow(false);
    }
    const afterOpenModal = () => {
    }
    function handleBackdropClick() {
        setShow(false);
    }
    return (<>

        <SlideDrawer show={show} content={
            <>
                <div style={{
                    'margin-top': '50px',
                    // 'margin-left': '50px'
                }} />
                <h4><Icon.List></Icon.List> Data master barang</h4>
                <div className="container" style={{
                    'overflow': 'auto'
                }}  >
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-info" onClick={() => {
                                setShow(true)
                            }}>Simpan</button>
                            <button type="button" className="btn btn-sm btn-danger">Reset</button>
                        </div>
                    </form>
                    <br /> <br /> <br />
                </div>
            </>
        } />
        {show && <Backdrop closeDrawer={handleBackdropClick} />}

        <Template container={
            <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2"> <Icon.Calendar />Master Data Barang</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-info" onClick={() => {
                                setShow(true)
                            }}>Add Data</button>
                            <button type="button" className="btn btn-sm btn-danger">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            {/* <span data-feather="calendar" />  */}
                            <Icon.Calendar />
                        </button>
                    </div>
                </div>

                <div className="table-responsive">
                    <DataTable
                        title={'Data master barang'}
                        data={data}
                        columns={columns}
                        style={customStyles}
                        pagination
                        subHeader
                        selectableRows
                        persistTableHead
                        contextMessage={'Tidak ada data'}

                    />

                </div>
            </>
        } />

    </>
    )
}

export default Barang