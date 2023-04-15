import { useState } from 'react'

import { Image } from './components'

function App() {
  return (
    <div className='flex justify-center items-center h-96'>
      <Image
        width={1426}
        height={858}
        className='border border-slate-300'
        src='/mo-architecture-en.png'
        alt="MO Architecture"
      />
      {/* <picture className='border border-slate-300'>
        <source
          width={1426}
          height={858}
          srcSet="/api/mo-architecture-en.webp"
          type="image/webp"
        />
        <source
          width={1426}
          height={858}
          srcSet="/api/mo-architecture-en.avif"
          type="image/avif"
        />
        <source
          width={1426}
          height={858}
          srcSet="/api/mo-architecture-en.png"
          type="image/png"
        />
        <img src="/api/mo-architecture-en.png" alt="MO Architecture" />
      </picture> */}
    </div>
  )
}

export default App
