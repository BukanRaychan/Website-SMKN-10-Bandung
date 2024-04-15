import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import AppTable from '../../assets/component/AppTable'

function PrestasiSiswa() {
  return (
    <div className='w-full'>
      <ContentTitle title='PRESTASI' subTitle='SISWA' />
      <AppTable contents={[["Nama", 'Prestasi', 'Juara', 'Penyelenggara', 'Tahun', 'Tingkat']]} />
    </div>
  )
}

export default PrestasiSiswa