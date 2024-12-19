'use client'

import React from 'react'
import HandSignWrapper from '@/components/hand-sign/organisms/HandSignWrapper'

const HandSign = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <HandSignWrapper id={params.id} />
    </div>
  )
}

export default HandSign
