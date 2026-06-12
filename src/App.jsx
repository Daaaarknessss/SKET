import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Volunteer from './pages/Volunteer'
import RequestHelp from './pages/RequestHelp'
import Donate from './pages/Donate'

const VALID_PAGES = ['home', 'services', 'volunteer', 'help', 'donate']

function getPage() {
  const hash = window.location.hash.slice(1)
  return VALID_PAGES.includes(hash) ? hash : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Nav page={page} />
      <main>
        {page === 'home'      && <Home />}
        {page === 'services'  && <Services />}
        {page === 'volunteer' && <Volunteer />}
        {page === 'help'      && <RequestHelp />}
        {page === 'donate'    && <Donate />}
      </main>
      <Footer />
    </>
  )
}
