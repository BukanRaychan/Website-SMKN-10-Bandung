import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import AppTable from '../../assets/component/AppTable'
import { getAllDaftarGuru } from '../../data/DaftarGuruDataService'

const daftarGuru = await getAllDaftarGuru();

function DaftarGuru() {

  return (
    <div className='w-full'>
      <ContentTitle title='PROFIL' subTitle='DAFTAR GURU' />
      <AppTable contents={[["Nama", 'NIK', 'pangkat', 'jabatan', 'pendidikan'], ...daftarGuru]}/>
    </div>
  )
}

export default DaftarGuru