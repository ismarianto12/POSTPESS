import Link from "next/link"
import Router from 'next/router'
import { useEffect, useState } from "react"
import Template from "../../components/template"
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux"
import { Provider } from "react-redux"
import jenis from "../../actions/jenis"
import { Modal } from "react-bootstrap"
import *  as  Icon from 'react-feather'
import {
    getJenis,
    addJenis,
    deleteJenis,
    updateJenis

} from '../../actions/jenis'

function Jenis() {
    const dispatch = useDispatch();
    const JenisList = useSelector((state) => { [] })
    const [value, setValue] = useState({
        jenis_barang: '',
        kode_barang: ''
    })
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(false)
    const [judul, setJudul] = useState('')

    const [username, setUsername] = useState('')
    const ll = typeof window != 'undefined' ? localStorage.getItem('username') : null
    useEffect(() => {
        setUsername(ll)
        return () => {
            if (ll == '' || ll == null) {
                Router.push('/')
            }
        }
    }, [])

    const Keluar = () => {
        localStorage.removeItem('username')
        localStorage.clear()
    }
    return (

        <Template container={
            <>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{'Master  jenis barang'}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-info btn-outline-secondary" onClick={() => {
                                setShow(true)
                                setJudul('Tambah data')
                                setStatus('_add')
                            }}><Icon.Plus></Icon.Plus>Add Data</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" />
                            This week
                        </button>
                    </div>
                </div>
                <p>Data Master Jenis Barang</p>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>


                <Modal
                    show={show}

                    onHide={() => {
                        setShow(false)
                    }}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <Icon.Box /> {judul}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal" method="post" onSubmit={(e) => {
                            e.preventDefault()
                            const jenis_barang = value.jenis_barang
                            const kode_barang = value.jenis_barang

                            status == '_add' ? dispatch(addJenis({
                                // value.jenis_barang
                                jenis_barang,
                                kode_barang
                            })) : dispatch(updateJenis({
                                jenis_barang,
                                kode_barang

                            }))

                        }}>
                            <div className="form-group row">
                                <label className="col-md-3">Jenis Barang</label>
                                <div className="col-md-3">
                                    <input type="text" name="jenis_barang" value={value.jenis_barang} className="form-control" onChange={(e) => {
                                        setValue({
                                            ...value,
                                            [e.target.name]: e.target.value,
                                        })
                                    }} />
                                </div>
                                <label className="col-md-3">Kode</label>
                                <div className="col-md-3">
                                    <input type="text" name="kode_barang" value={value.kode_barang} onChange={(e) => {
                                        setValue({
                                            ...value,
                                            [e.target.name]: e.target.value,

                                        })
                                    }} className="form-control" />
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-md">Simpan</button>
                                    <button className="btn btn-danger btn-md" type="reset" onClick={(e) => {
                                        setValue({
                                            jenis_barang: '',
                                            kode_barang: ''
                                        })
                                    }}>Reset</button>


                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        } />

    )
}

export default Jenis