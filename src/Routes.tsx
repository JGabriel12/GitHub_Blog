import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { Blog } from './pages/Blog'
import { Issues } from './pages/Issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/Issues" element={<Issues />} />
      </Route>
    </Routes>
  )
}
