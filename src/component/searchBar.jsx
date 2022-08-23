import React from "react";

const SearchBar = ({ filterData, handleSubmit,setFilterData}) => { 
    return (
        <section id="searchBar" className="mb-5" style={{marginTop: "-50px"}}>
            <div className="container d-flex justify-content-center">
                <div className="card p-3" style={{boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)", width: "100%"}}>
                        <div className="row">
                            <div className="col-lg-3 d-flex flex-column justify-content-between">
                                <label htmlFor="carName">Nama Mobil</label>
                                <input className="p-1" type="text" id="carName" name="carName" style={{height: '35px'}} 
                                onChange={(e) => {setFilterData({carName : e.target.value})}} placeholder="Ketik nama/type mobil"/>
                            </div>

                            <div className="col-lg-3 d-flex flex-column justify-content-between">
                                <label htmlFor="category">Kategori</label>
                                <select onChange={(e)=>{setFilterData({...filterData,carCategory : e.target.value})}} name="category" id="category" style={{height: '35px'}} >
                                    <option value=""> Masukkan Kapasitas Mobil</option>
                                    <option value="2 - 4 orang"> 2 - 4 orang</option>
                                    <option value="4 - 6 orang"> 4 - 6 orang</option>
                                    <option value="6 - 8 orang"> 6 - 8 orang</option>
                                </select>
                            </div>

                            <div className="col-lg-3 d-flex flex-column justify-content-between">
                                <label htmlFor="price">Harga</label>
                                <select onChange={(e)=>{setFilterData({...filterData,carPrice : e.target.value})}} className="p-1" name="price" id="price" style={{height: '35px'}}>
                                    <option value=""> Masukkan Harga Sewa /Hari</option>
                                    <option value="400000"> &#60; Rp. 400.000</option>
                                    <option value="400000-600000"> Rp. 400.000 - Rp.600.000</option>
                                    <option value="600000"> &#62; Rp. 600.000 </option>
                                </select>
                            </div>

                            <div className="col-lg-2 d-flex flex-column justify-content-between">
                                <label htmlFor="status">Status</label>
                                <select className="p-1" name="status" id="status" style={{height: '35px'}}>
                                    <option value="disewa">Disewa</option>
                                </select>
                            </div>

                            <div className="col-lg-1 d-flex align-items-end">
                                <button className="btn btn-success p-1" style={{width: "100%"}} onClick={handleSubmit}>Cari</button>
                            </div>
                        </div>                    
                </div>
            </div>
        </section>
    )
}



export default SearchBar;