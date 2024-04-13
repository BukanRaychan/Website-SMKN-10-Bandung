import React from 'react'

function ContentTitle({title = "None", subTitle = "None"}) {
  return (
    <div className='text-center my-7 font-semibold'>
        <div className='text-[18px] text-grey'>
            {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
        </div>
        <div className='text-[54px]'>
            {subTitle}
        </div>
    </div>
  )
}

export default ContentTitle