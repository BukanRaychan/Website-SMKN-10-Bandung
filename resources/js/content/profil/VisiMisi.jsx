import React, { useEffect, useState } from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import { getVisiMisi } from '../../data/VisiMisiDataService'


function VisiMisi() {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const json = await getVisiMisi()
      setData(json)
    }

    fetchData()
  }, [])

  const container = (containerClass, title, description = "") => (
    <div className={`${containerClass} flex-1  relative border-grey border-2 bg-white rounded-lg -z-50 h-auto`}>
      <div className='absolute top-0 left-8 font-medium text-[36px] rounded-full -translate-y-1/2 text-grey bg-white px-2'>
        {title}
      </div>
      <div className='p-8'>
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== description.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )

  return (
    <div className='w-full '>
      <ContentTitle title='PROFIL' subTitle='VISI MISI' />
      <div className='flex flex-col md:flex-row gap-12 mt-12'>
        {container('', "VISI", data.visi)}
        {container('', "MISI", data.misi)}
      </div>
    </div>
  )
}

export default VisiMisi