import React from 'react'

const Page=({ params }: { params: { id: string } }) =>{
    return <div>My Post: {params.id}</div>
  }

export default Page