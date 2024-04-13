import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'

function Jurusan({title = "null", visi = "null", misi = "null"}) {
  return (
    <div>
      <ContentTitle title='JURUSAN' subTitle={title} />
      <h2>Title: {title}</h2>
      <p>Visi: {visi}</p>
      <p>Misi: {misi}</p>
    </div>
  )
}

export default Jurusan