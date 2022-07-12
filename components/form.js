import style from '../styles/Home.module.css'
const Form = ({ value, handleChange, handleSubmit, info, reset, error }) => {
    return (
        <>   <div className={`row ${style._over_flow}`}>
            <div className="col-md-7" id={style.bangsat}>
                <div className="container">
                    <h3 className="heading" style={{
                        color: '#000',
                        'margin-top': '30px',
                        'text-align': 'center'
                    }}><b><i className="fa fa-users"></i> Login Aplikasi</b></h3>
                    <img src="https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png" className={`img-responsive ${style.__sebelah}`}></img>
                </div>
            </div>

            <div className="col-md-5" id={style.__login_app}>
                <div className={`${style.___posisi}`}>

                    <div className={style.container__text}>


                        <br /><br />
                        <form action="" className="form-horizontal" method="POST" onSubmit={handleSubmit}>
                            <div className="form-group row">
                                <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Username</b></label>
                                <div className="col-md-7">
                                    <input type={'text'} name="username" className="form-control" onChange={handleChange} value={value.username}></input>
                                    {error && value.username == '' ? <div className="text-danger">wajib di isi</div> : ''}

                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Password</b></label>
                                <div className="col-md-7">
                                    <input type={'password'} name="password" className="form-control" onChange={handleChange} value={value.password}></input>
                                    {error && value.password == '' ? <div className="text-danger">wajib di isi</div> : ''}
                                </div>
                            </div>
                            <div id={style.adasdsad}>
                                <label className="col-md-3"></label>
                                <button className="btn btn-primary col-md-7" type="submit"><i className="fa fa-save"></i> Login</button>
                            </div>
                            <div id={style.adasdsad}>
                                <label className="col-md-3"></label>
                                <button className="btn btn-warning col-md-7" type="reset" onClick={reset}><i className="fa fa-save"></i> Reset</button>

                            </div>
                        </form>

                        {info}
                    </div>
                </div>
            </div>

        </div >

        </>
    )
}

export default Form;