import { getAllJurusan } from "./JurusanDataService";


export const ProfilData = [
    {
        "title": "Sejarah",
        "endpoint": "/sejarah"
    },
    {
        "title": "Daftar Guru",
        "endpoint": "/daftar-guru"
    },
    {
        "title": "Daftar Karyawan",
        "endpoint": "/daftar-karyawan"
    },
    {
        "title": "Visi dan Misi",
        "endpoint": "/visi-misi"
    },
    {
        "title": "Struktur Organisasi",
        "endpoint": "/struktur-organisasi"
    },
];

export const PembelajaranData = [
    {
        "title": "Fasilitas",
        "endpoint": "/fasilitas"
    },
    {
        "title": "Kegiatan Mahasiswa",
        "endpoint": "/kegiatan-mahasiswa"
    },
    {
        "title": "Kurikulum",
        "endpoint": "/kurikulum"
    },
];

export const jurusanData = await getAllJurusan();

export const PrestasiData = [
    {
        "title": "Prestasi Sekolah",
        "endpoint": "/prestasi-sekolah"
    },
    {
        "title": "Prestasi Siswa",
        "endpoint": "/prestasi-siswa"
    },
    {
        "title": "Prestasi Guru",
        "endpoint": "/prestasi-guru"
    },
];
