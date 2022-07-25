
import Link from "next/link"
import Router from 'next/router'
import { useEffect, useState, useMemo } from "react"
import Template from "../../components/template"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux"
import { Modal } from "react-bootstrap"
import *  as  Icon from 'react-feather'
import DataTable from 'react-data-table-component'
import { useSelector, useDispatch } from "react-redux";

import {
    createJenis, updateJenis, deleteJenis

} from '../../actions/jenis'
import { axios } from "axios"


function Jenis({ lsdata }) {
    const dispacth = useDispatch()
    const jenisList = useSelector((state) => state.jenis.value);

    const [value, setValue] = useState({
        kode: '',
        jenis: ''
    })
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(false)
    const [judul, setJudul] = useState('')

    const [username, setUsername] = useState('')
    const ll = typeof window != 'undefined' ? localStorage.getItem('username') : null
    const [data, setData] = useState([])

    const fetchData = () => {
        const config = {
            url: `${process.env.HOSTNAME}/api/jenis`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer`,
                'Content-Type': 'application/json'
            },
        }
        axios(config).then((response) => {
            setData(response.data)

        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        fetchData
    }, [])

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    // const filteredItems = lsdata.filter(
    //     item => item.year && item.title.toLowerCase().includes(filterText.toLowerCase()),
    // );
    const Empty = () => {
        setValue({
            kode: '',
            jenis: ''
        })
    }

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <div className="col-md-3">
                <input type={'text'} className="form-control" onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} placeholder={'Search data here ...'} />
            </div>
        );
    }, [filterText, resetPaginationToggle]);

    const namajdl =
        (<><Icon.Copy /> Jenis Barang </>)

    console.log(lsdata)
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

    const columns = [
        {
            name: 'Kode',
            selector: row => row.kode,
        },
        {
            name: 'Jenis Barang',
            selector: row => row.jenis,
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

    return (
        console.log('asda' + process.env.HOSTNAME),
        <Template container={
            <>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0" style={{ 'float': 'right' }}>
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
                <div className="table-responsive">
                    <DataTable
                        title={namajdl}
                        columns={columns}
                        data={jenisList}
                        pagination
                        subHeader
                        selectableRows
                        persistTableHead
                    />
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
                            const jenis = value.jenis
                            const kode = value.kode
                            dispacth(createJenis({
                                id: Math.random(),
                                jenis: jenis,
                                kode: kode
                            }))
                            Empty
                            setShow(false)
                        }}>
                            <div className="form-group row">
                                <label className="col-md-3">Jenis Barang</label>
                                <div className="col-md-3">
                                    <input type="text" name="jenis_barang" value={value.jenis} className="form-control" onChange={(e) => {
                                        setValue({
                                            ...value,
                                            jenis: e.target.value,
                                        })
                                    }} />
                                </div>
                                <label className="col-md-3">Kode</label>
                                <div className="col-md-3">
                                    <input type="text" name="kode_barang" value={value.kode} onChange={(e) => {
                                        setValue({
                                            ...value,
                                            kode: e.target.value,

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


export async function getStaticProps() {
    const rest = await fetch(process.env.HOSTNAME + `/api/jenis`);
    const lsdata = await rest.json();
    return {
        props: {
            lsdata,
        }
    }
}

export default Jenis