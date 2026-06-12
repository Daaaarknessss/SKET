import React, { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const NAV_LINKS = [
  { page: 'home',      label: 'Home' },
  { page: 'services',  label: 'Services' },
  { page: 'volunteer', label: 'Volunteer' },
  { page: 'help',      label: 'Request Help' },
  { page: 'donate',    label: 'Donate' },
]

export default function Nav({ page }) {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(246,241,234,0.97)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #dfd6ca',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 48px',
      }}>
        <a href="#home" onClick={close} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 700, color: '#8b3525', letterSpacing: '5px', lineHeight: 1 }}>SKET</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', color: '#ba7d4c', letterSpacing: '2.5px', textTransform: 'uppercase' }}>Chennai</span>
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: menuOpen ? 'transparent' : '#1c1812', transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#1c1812', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(3px, -3px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#1c1812', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(3px, 3px)' : 'none', marginTop: menuOpen ? '-11px' : '0' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {NAV_LINKS.filter(l => l.page !== 'donate').map(({ page: p, label }) => (
              <DesktopLink key={p} href={`#${p}`} active={page === p} label={label} />
            ))}
            <DonateBtn active={page === 'donate'} />
          </div>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(246,241,234,0.99)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #dfd6ca',
          padding: '8px 0 20px',
        }}>
          {NAV_LINKS.map(({ page: p, label }) => (
            <a
              key={p}
              href={`#${p}`}
              onClick={close}
              style={{
                display: 'block', padding: '14px 24px',
                fontSize: p === 'donate' ? '12px' : '15px',
                fontWeight: page === p ? 600 : 400,
                color: p === 'donate' ? '#fffcf7' : (page === p ? '#8b3525' : '#1c1812'),
                background: p === 'donate' ? '#8b3525' : 'transparent',
                letterSpacing: p === 'donate' ? '1.5px' : 'normal',
                textTransform: p === 'donate' ? 'uppercase' : 'none',
                margin: p === 'donate' ? '12px 24px 0' : '0',
                borderRadius: p === 'donate' ? '1px' : '0',
                textAlign: p === 'donate' ? 'center' : 'left',
                borderBottom: p !== 'donate' ? '1px solid rgba(223,214,202,0.5)' : 'none',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

function DesktopLink({ href, active, label }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href}
      style={{
        textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
        letterSpacing: '0.3px', paddingBottom: '3px',
        borderBottom: active ? '1.5px solid #8b3525' : (hov ? '1.5px solid rgba(139,53,37,0.35)' : '1.5px solid transparent'),
        color: active ? '#8b3525' : (hov ? '#8b3525' : '#5e5248'),
        fontWeight: active ? 600 : 400,
        transition: 'color 0.2s, border-color 0.2s',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}

function DonateBtn({ active }) {
  const [hov, setHov] = useState(false)
  return (
    <a href="#donate"
      style={{
        textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
        fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase',
        background: active || hov ? '#6e2a1d' : '#8b3525',
        color: '#fffcf7', padding: '10px 22px', borderRadius: '1px', transition: 'background 0.2s',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >Donate</a>
  )
}
