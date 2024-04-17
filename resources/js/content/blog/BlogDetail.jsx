import React from 'react'
import ContentTitle from '../../assets/component/ContentTitle'
import { useParams } from 'react-router-dom';

function BlogDetail() {
    let { id } = useParams();

    return (
        <div className='w-full'>
            <ContentTitle subTitle={id} />
        </div>
    )
}

export default BlogDetail