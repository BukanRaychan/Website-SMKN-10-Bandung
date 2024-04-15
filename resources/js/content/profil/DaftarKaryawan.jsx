import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import AppTable from '../../assets/component/AppTable'

function DaftarKaryawan() {
  return (
    <div className='w-full'>
      <ContentTitle title='PROFIL' subTitle='DAFTAR KARYAWAN' />
      <AppTable contents={[["Nama", 'NIK', 'pangkat', 'jabatan', 'pendidikan']]} />
    </div>
  )
}

export default DaftarKaryawan