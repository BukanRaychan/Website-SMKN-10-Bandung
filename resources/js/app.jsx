import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Jurusan from './content/jurusan/Jurusan.jsx';
import Nav from "./navbar/Nav.jsx"
import Home from './content/Home.jsx';
import ContactUs from './content/ContactUs.jsx';
import Footer from './footer/Footer.jsx';
import Blog from './content/Blog.jsx';
import DaftarGuru from './content/profil/DaftarGuru.jsx';
import DaftarKaryawan from './content/profil/DaftarKaryawan.jsx';
import Sejarah from './content/profil/Sejarah.jsx';
import StrukturOrganisasi from './content/profil/StrukturOrganisasi.jsx';
import VisiMisi from './content/profil/VisiMisi.jsx';
import Fasilitas from './content/pembelajaran/Fasilitas.jsx';
import KegiatanMahasiswa from './content/pembelajaran/KegiatanMahasiswa.jsx';
import Kurikulum from './content/pembelajaran/Kurikulum.jsx';
import PrestasiGuru from './content/prestasi/PrestasiGuru.jsx';
import PrestasiSekolah from './content/prestasi/PrestasiSekolah.jsx';
import PrestasiSiswa from './content/prestasi/PrestasiSiswa.jsx';
import { jurusanData } from './data/NavSubItem.jsx';

function app() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className='flex flex-col min-h-[100vh] min-w-[100wh]'>
                    <div className='sticky top-0'>
                        <Nav />
                    </div>
                    <div className='flex flex-1 h-auto justify-center px-10 md:px-20 py-7' >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/daftar-guru' element={<DaftarGuru />} />
                            <Route path='/daftar-karyawan' element={<DaftarKaryawan />} />
                            <Route path='/sejarah' element={<Sejarah />} />
                            <Route path='/struktur-organisasi' element={<StrukturOrganisasi />} />
                            <Route path='/visi-misi' element={<VisiMisi />} />
                            <Route path='/fasilitas' element={<Fasilitas />} />
                            <Route path='/kegiatan-mahasiswa' element={<KegiatanMahasiswa />} />
                            <Route path='/kurikulum' element={<Kurikulum />} />
                            <Route path='/prestasi-guru' element={<PrestasiGuru />} />
                            <Route path='/prestasi-siswa' element={<PrestasiSiswa />} />
                            <Route path='/prestasi-sekolah' element={<PrestasiSekolah />} />
                            {jurusanData.map((jurusan) => (
                                <Route
                                    key={jurusan.title}
                                    path={jurusan.endpoint}
                                    element={<Jurusan title={jurusan.title} visi={jurusan.visi} misi={jurusan.misi} />}
                                />
                            ))}
                        </Routes>
                    </div>
                    <div className=''>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    )   
}

export default app