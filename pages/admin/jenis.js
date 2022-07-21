import Link from "next/link"
import Router from 'next/router'
import { useEffect, useState, useMemo } from "react"
import Template from "../../components/template"
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux"
import { Provider } from "react-redux"
import { Modal } from "react-bootstrap"
import *  as  Icon from 'react-feather'
import DataTable from 'react-data-table-component'


import {
    getJenis,
    addJenis,
    deleteJenis,
    updateJenis

} from '../../actions/jenis'
import { axios } from "axios"

const customStyles = {
    rows: {
        style: {
            minHeight: '72px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize: '25px',
            fontWeight: 'bold'// override the row height

        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const columns = [
    {
        name: 'Kode',
        selector: row => row.title,
    },
    {
        name: 'Jenis Barang',
        selector: row => row.year,
    },
    {
        name: 'action',
        selector: row => row.action,
    },

]

const kkk = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        action: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        action: '1984',

    },
]

function Jenis() {
    const jenisList = useSelector((state) => state.jenis);

    const dispatch = useDispatch();
    const [value, setValue] = useState({
        jenis_barang: '',
        kode_barang: ''
    })
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(false)
    const [judul, setJudul] = useState('')

    const [username, setUsername] = useState('')
    const ll = typeof window != 'undefined' ? localStorage.getItem('username') : null
    const [data, setData] = useState([])

    const fetchData = () => {
        const config = {
            url: '/api/jenis',
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
    const filteredItems = kkk.filter(
        item => item.year && item.title.toLowerCase().includes(filterText.toLowerCase()),
    );

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

    console.log(jenisList)
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
                <div className="table-responsive">
                    <DataTable
                        title="Jenis Barang"
                        columns={columns}
                        data={filteredItems}
                        pagination
                        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                        subHeader
                        subHeaderComponent={subHeaderComponentMemo}
                        selectableRows
                        persistTableHead
                        customStyles={customStyles}
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
                            const jenis_barang = value.jenis_barang
                            const kode_barang = value.jenis_barang

                            status == '_add' ? dispatch(addJenis({
                                ...value,
                                jenis_barang,
                                kode_barang
                            })) : dispatch(updateJenis({
                                ...value,

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