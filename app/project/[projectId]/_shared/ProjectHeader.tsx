import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function ProjectHeader() {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
        <div className='flex gap-2 items-center'>
                <Image src={'/logo1.png'} alt='Logo' width={60} height={80}/>
                <h2 className='text-xl font-semibold'> <span className='text-primary'>UIUX</span> Mock</h2>
        </div>
        <Button>Save</Button>
    </div>
    
  )
}

export default ProjectHeader