import { useState } from 'react'

import './App.css'
import PostsList from './features/posts/postsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddPostForm/>
      <PostsList/>
    </>
  )
}

export default App
