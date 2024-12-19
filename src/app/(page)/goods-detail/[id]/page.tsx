'use client'

import React from 'react'
import GoodsDetailContainer from '@/components/goods-detail/organisms/GoodsDetailContainer'

interface Props {
  params: { id: number }
}

const GoodsDetail = ({ params }: Props) => {
  console.log(params)
  return (
    <div>
      <GoodsDetailContainer params={params} />
    </div>
  )
}

export default GoodsDetail
