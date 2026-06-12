import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const NAV_LINKS = [
  { href: '#home',      label: 'Home' },
  { href: '#services',  label: 'Services' },
  { href: '#volunteer', label: 'Volunteer' },
  { href: '#help',      label: 'Request Help' },
  { href: '#donate',    label: 'Donate' },
]

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ background: '#1c1812', padding: isMobile ? '48px 16px 32px' : '64px 24px 40px' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
          gap: isMobile ? '40px' : '60px',
          marginBottom: '48px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 700, color: '#8b3525', letterSpacing: '6px', marginBottom: '6px' }}>SKET</p>
            <p style={{ fontSize: '11px', color: 'rgba(246,241,234,0.3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Support · Kindness · Encouragement · Troubleshoot
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(246,241,234,0.5)', lineHeight: 1.85, maxWidth: '280px' }}>
              A non-profit collective of professionals serving Chennai's most in need. Free guidance, freely given.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(246,241,234,0.2)', marginTop: '20px', letterSpacing: '1px', fontFamily: "'DM Sans', sans-serif" }}>
              அனைத்து சேவைகளும் இலவசம்
            </p>
          </div>

          <div style={{ display: isMobile ? 'grid' : 'block', gridTemplateColumns: isMobile ? '1fr 1fr' : undefined, gap: isMobile ? '40px' : undefined }}>
            <div>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(246,241,234,0.25)', marginBottom: '20px' }}>Navigate</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {NAV_LINKS.map(({ href, label }) => (
                  <FooterLink key={href} href={href} label={label} />
                ))}
              </div>
            </div>

            {isMobile && (
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(246,241,234,0.25)', marginBottom: '20px' }}>Contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <ContactItem label="Email" value="help@sket.in" />
                  <ContactItem label="Location" value="Chennai, Tamil Nadu, India" />
                  <ContactItem label="Founded by" value="Naman Mehta · Aravind G" />
                </div>
              </div>
            )}
          </div>

          {!isMobile && (
            <div>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(246,241,234,0.25)', marginBottom: '20px' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <ContactItem label="Email" value="help@sket.in" />
                <ContactItem label="Location" value="Chennai, Tamil Nadu, India" />
                <ContactItem label="Founded by" value="Naman Mehta · Aravind G" />
              </div>
            </div>
          )}

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(246,241,234,0.2)' }}>© 2026 SKET Foundation, Chennai, Tamil Nadu.</p>
          <p style={{ fontSize: '12px', color: 'rgba(246,241,234,0.2)' }}>All services are free of charge.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ fontSize: '14px', color: hov ? '#ba7d4c' : 'rgba(246,241,234,0.55)', transition: 'color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}

function ContactItem({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: '11px', color: 'rgba(246,241,234,0.28)', marginBottom: '3px', letterSpacing: '0.5px' }}>{label}</p>
      <p style={{ fontSize: '14px', color: 'rgba(246,241,234,0.6)' }}>{value}</p>
    </div>
  )
}
