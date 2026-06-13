import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const SERVICES = [
  { title: 'Legal Guidance',    desc: 'Rights, documentation, civil disputes & tenant protections.' },
  { title: 'Financial & Tax',   desc: 'ITR filing, PAN assistance & govt. scheme eligibility.' },
  { title: 'Tech & Career',     desc: 'Digital literacy, career mentorship & opportunity guidance.' },
  { title: 'Life Guidance',     desc: 'Personal counseling & traditional wisdom, with care.' },
  { title: 'Community Aid',     desc: 'Food kits, medical referrals & welfare connections.' },
  { title: 'Guidance Desk',     desc: "Not sure where to start? Just ask — we'll listen." },
]

const ACRONYM = [
  { letter: 'S', word: 'Support',       desc: 'Practical, reliable support — cutting through complexity so people can access their rights and entitlements.' },
  { letter: 'K', word: 'Kindness',      desc: 'Every person who reaches us is received with patience, warmth, and without judgment — regardless of circumstance.' },
  { letter: 'E', word: 'Encouragement', desc: 'We believe in the strength of every person. We uplift and instill confidence alongside practical advice.' },
  { letter: 'T', word: 'Troubleshoot',  desc: 'From legal tangles to tax forms, tech barriers to life decisions — we work through every problem with you.' },
]

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '100px 20px 80px' : '100px 24px 140px',
        textAlign: 'center', background: '#f6f1ea', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(186,125,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="fade-up" style={{ position: 'relative' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '5px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '28px' }}>
            Chennai, Tamil Nadu · Est. 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(72px, 17vw, 176px)', fontWeight: 700, color: '#8b3525', letterSpacing: isMobile ? '10px' : '18px', lineHeight: 1, marginBottom: '24px', textIndent: isMobile ? '10px' : '18px' }}>
            SKET
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(13px, 2vw, 20px)', fontWeight: 400, color: '#9e9089', letterSpacing: '3px', marginBottom: '52px' }}>
            Support · Kindness · Encouragement · Troubleshoot
          </p>
          <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, #ba7d4c, transparent)', margin: '0 auto 52px' }} />
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', color: '#5e5248', maxWidth: '520px', lineHeight: 1.85, marginBottom: '56px', marginLeft: 'auto', marginRight: 'auto' }}>
            Lawyers, Chartered Accountants, Engineers, and Counselors — friends who decided to offer their expertise, freely, to Chennai's most in need.
          </p>
        </div>

        <div className="fade-up-delay" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', padding: '0 16px' }}>
          <HoverButton href="#help" bg="#8b3525" hoverBg="#6e2a1d" color="#fffcf7" label="Request Help" fullWidth={isMobile} />
          <OutlineButton href="#volunteer" label="Volunteer With Us" fullWidth={isMobile} />
        </div>

        {!isMobile && (
          <div className="fade-in-delay" style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.3 }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#5e5248' }}>Scroll</p>
            <div style={{ width: '1px', height: '36px', background: '#5e5248' }} />
          </div>
        )}
      </section>

      {/* SKET Acronym Grid */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 24px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', border: '1px solid #dfd6ca' }}>
          {ACRONYM.map(({ letter, word, desc }, i) => (
            <div key={letter} style={{
              padding: isMobile ? '36px 28px' : '52px 48px',
              background: '#fffcf7',
              borderRight: !isMobile && i % 2 === 0 ? '1px solid #dfd6ca' : undefined,
              borderBottom: isMobile ? (i < 3 ? '1px solid #dfd6ca' : undefined) : (i < 2 ? '1px solid #dfd6ca' : undefined),
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '96px', fontWeight: 700, color: 'rgba(139,53,37,0.07)', lineHeight: 1, marginBottom: '16px', userSelect: 'none' }}>{letter}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600, color: '#1c1812', marginBottom: '12px' }}>{word}</h3>
              <p style={{ fontSize: '14px', color: '#5e5248', lineHeight: 1.85 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services on dark */}
      <section style={{ background: '#253525', padding: isMobile ? '56px 16px' : '80px 24px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '10px' }}>Our Services</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: '#f6f1ea', lineHeight: 1.15 }}>Six ways we help</h2>
            </div>
            <ViewAllLink href="#services" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
            {SERVICES.map(({ title, desc }) => (
              <ServiceCard key={title} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 24px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '96px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '16px' }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: '#1c1812', lineHeight: 1.2, marginBottom: '28px' }}>
              Friends who decided to do something
            </h2>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '20px' }}>
              SKET began as a conversation between friends — professionals who noticed real hardship around them and asked: what if we pooled our expertise for those who cannot afford it?
            </p>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '40px' }}>
              We are not a large institution. We are a group of people who care deeply about Chennai and its most vulnerable residents.
            </p>
            <VolunteerLink href="#volunteer" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
            <FounderCard initial="N" name="Naman Mehta" bg="#8b3525" />
            <FounderCard initial="A" name="Aravind G" bg="#253525" />
            <FounderCard initial="R" name="Rishabh Soni" bg="#4a2c6e" />
            <FounderCard initial="I" name="Ishan Verma" bg="#1a3a5c" />
            <FounderCard initial="S" name="Sankrut Anand" bg="#744210" />
            <FounderCard initial="N" name="Nilay Jain" bg="#2d4a3a" />
            <FounderCard initial="M" name="Madhusudhan" bg="#5c3520" />
            <FounderCard initial="A" name="Adithya Kamilla" bg="#3a5c4a" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: '#8b3525', padding: isMobile ? '56px 20px' : '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>Take the First Step</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 600, color: '#fffcf7', marginBottom: '48px', lineHeight: 1.2 }}>
          How can we help today?
        </h2>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', padding: '0 16px' }}>
          <CTABtn href="#help" bg="#fffcf7" hoverBg="#f6f1ea" color="#8b3525" label="I Need Help" fullWidth={isMobile} />
          <CTAOutlineBtn href="#donate" label="Support Our Work" fullWidth={isMobile} />
        </div>
      </section>
    </>
  )
}

function HoverButton({ href, bg, hoverBg, color, label, fullWidth }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ display: 'inline-block', padding: '16px 44px', background: hov ? hoverBg : bg, color, fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '1px', transition: 'background 0.2s', width: fullWidth ? '100%' : 'auto', textAlign: 'center' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}

function OutlineButton({ href, label, fullWidth }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ display: 'inline-block', padding: '16px 44px', border: '1.5px solid #8b3525', color: '#8b3525', fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '1px', transition: 'all 0.2s', background: hov ? 'rgba(139,53,37,0.05)' : 'transparent', width: fullWidth ? '100%' : 'auto', textAlign: 'center' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}

function ViewAllLink({ href }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ fontSize: '13px', color: '#ba7d4c', borderBottom: `1px solid ${hov ? '#ba7d4c' : 'rgba(186,125,76,0.4)'}`, paddingBottom: '2px', whiteSpace: 'nowrap', transition: 'border-color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >View all →</a>
  )
}

function ServiceCard({ title, desc }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div style={{ background: hov ? '#2c4a2c' : '#253525', padding: '32px 28px', transition: 'background 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={{ width: '28px', height: '2px', background: '#ba7d4c', marginBottom: '18px' }} />
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#f6f1ea', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '13px', color: 'rgba(246,241,234,0.5)', lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

function VolunteerLink({ href }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ fontSize: '12px', color: '#8b3525', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, borderBottom: `1px solid ${hov ? '#8b3525' : 'rgba(139,53,37,0.3)'}`, paddingBottom: '3px', transition: 'border-color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >Join Our Volunteer Network →</a>
  )
}

function FounderCard({ initial, name, bg }) {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '28px 32px', background: '#fffcf7', border: '1px solid #dfd6ca' }}>
      <div style={{ width: '52px', height: '52px', background: bg, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600 }}>{initial}</span>
      </div>
      <div>
        <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#1c1812', marginBottom: '4px' }}>{name}</h4>
        <p style={{ fontSize: '12px', color: '#ba7d4c', letterSpacing: '1px', textTransform: 'uppercase' }}>Co-founder, SKET</p>
      </div>
    </div>
  )
}

function CTABtn({ href, bg, hoverBg, color, label, fullWidth }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ display: 'inline-block', padding: '16px 44px', background: hov ? hoverBg : bg, color, fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '1px', transition: 'background 0.2s', width: fullWidth ? '100%' : 'auto', textAlign: 'center' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}

function CTAOutlineBtn({ href, label, fullWidth }) {
  const [hov, setHov] = React.useState(false)
  return (
    <a href={href}
      style={{ display: 'inline-block', padding: '16px 44px', border: `1.5px solid ${hov ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)'}`, color: '#fffcf7', fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '1px', transition: 'border-color 0.2s', width: fullWidth ? '100%' : 'auto', textAlign: 'center' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</a>
  )
}
