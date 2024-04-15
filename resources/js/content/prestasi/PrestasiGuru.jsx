import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import AppTable from '../../assets/component/AppTable'

function PrestasiGuru() {
  return (
    <div className='w-full'>
      <ContentTitle title='PRESTASI' subTitle='GURU' />
      <AppTable contents={[["Nama", 'Prestasi', 'Tahun']]} />
    </div>
  )
}

export default PrestasiGuru