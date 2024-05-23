import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Post from './views/Post/Post'
import { BlogProvider } from './providers/BlogProvider'

function App() {

  return (
    <BlogProvider>
      <BrowserRouter>
        <div className='flex justify-center w-full px-8'>
          <div className='max-w-[900px] w-full'>
            <Routes>
              <Route exact path="/" element={<Post />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </BlogProvider>
  )
}

export default App
