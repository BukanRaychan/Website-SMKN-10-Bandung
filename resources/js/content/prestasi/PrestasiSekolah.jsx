import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import AppTable from '../../assets/component/AppTable'

function PrestasiSekolah() {
  return (
    <div className='w-full'>
      <ContentTitle title='PRESTASI' subTitle='SEKOLAH' />
      <AppTable contents={[["Prestasi yang diterima", 'Tahun']]} />
    </div>
  )
}

export default PrestasiSekolah