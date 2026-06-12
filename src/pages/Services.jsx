import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const SERVICES = [
  {
    num: '01', title: 'Legal Guidance', sub: 'Know Your Rights', vol: 'By our Legal Volunteers',
    desc: 'Our volunteer lawyers provide free consultations on civil disputes, tenant rights, consumer protection, family matters, and documentation. Clear guidance in Tamil and English — no courthouse jargon.',
    disclaimer: 'Information shared is general in nature and does not constitute legal advice or create an advocate–client relationship. SKET does not solicit legal work. For formal representation, please engage a licensed advocate independently.',
  },
  {
    num: '02', title: 'Financial & Tax', sub: 'Clarity With Money', vol: 'By our CA Volunteers',
    desc: 'Our Chartered Accountants guide you through income tax filing, PAN card assistance, ITR corrections, Tamil Nadu and Central government welfare scheme eligibility, and basic financial planning.',
  },
  {
    num: '03', title: 'Tech & Career', sub: 'Open New Paths', vol: 'By our Tech Volunteers',
    desc: 'Software engineers mentor on digital literacy, smartphone usage, accessing government portals, online safety, career options in technology, and free pathways to reskilling and online employment.',
  },
  {
    num: '04', title: 'Life Guidance', sub: 'For the Whole Person', vol: 'By our Counseling Volunteers',
    desc: "Thoughtful personal guidance drawing on traditional wisdom, vedic knowledge, and compassionate listening. Offered with deep respect for each person's beliefs, culture, and circumstances. No judgment.",
  },
  {
    num: '05', title: 'Community Aid', sub: 'Direct, Real Support', vol: 'SKET Network',
    desc: 'Emergency food kit drives, referrals to medical camps and health programs, help accessing Tamil Nadu welfare schemes (PM-JAY, Amma Schemes), and community outreach across underserved areas of Chennai.',
  },
]

const HOW_IT_WORKS = [
  { step: '1', title: 'Reach Out',    desc: 'Fill our form, call, or WhatsApp us — in Tamil, English, or Hindi.' },
  { step: '2', title: 'We Listen',    desc: 'A volunteer contacts you within 48 hours to understand your situation.' },
  { step: '3', title: 'Get Guidance', desc: 'We connect you with the right expert from our volunteer network.' },
  { step: '4', title: 'Follow Up',    desc: 'We stay with you until your matter is fully resolved or referred.' },
]

export default function Services() {
  const isMobile = useIsMobile()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ padding: isMobile ? '48px 16px 40px' : '80px 24px 56px', maxWidth: '1040px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '16px' }}>What We Offer</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 600, color: '#1c1812', lineHeight: 1.1, maxWidth: '600px' }}>
          Free guidance, from those who know best
        </h1>
      </section>

      <section style={{ padding: isMobile ? '0 16px 56px' : '0 24px 80px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2px', background: '#dfd6ca' }}>
          {SERVICES.map(({ num, title, sub, vol, desc, disclaimer }) => (
            <div key={num} style={{ background: '#fffcf7', padding: isMobile ? '36px 28px' : '52px 44px' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', color: '#ba7d4c', marginBottom: '20px' }}>{num}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '34px', fontWeight: 600, color: '#1c1812', marginBottom: '8px' }}>{title}</h3>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#8b3525', marginBottom: '20px', letterSpacing: '0.5px' }}>{sub}</p>
              <p style={{ fontSize: '14px', color: '#5e5248', lineHeight: 1.9, marginBottom: '28px' }}>{desc}</p>
              <p style={{ fontSize: '11px', color: '#9e9089', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: disclaimer ? '16px' : '0' }}>{vol}</p>
              {disclaimer && (
                <p style={{ fontSize: '11px', color: '#9e9089', lineHeight: 1.7, borderTop: '1px solid #f0ebe3', paddingTop: '14px', fontStyle: 'italic' }}>
                  {disclaimer}
                </p>
              )}
            </div>
          ))}
          <GuidanceDeskCard isMobile={isMobile} />
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: isMobile ? '56px 16px' : '80px 24px', background: '#fffcf7', borderTop: '1px solid #dfd6ca', borderBottom: '1px solid #dfd6ca' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '56px' }}>How It Works</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '36px 24px' : '48px' }}>
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '60px', fontWeight: 700, color: 'rgba(139,53,37,0.1)', lineHeight: 1, marginBottom: '18px' }}>{step}</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#1c1812', marginBottom: '10px' }}>{title}</h4>
                <p style={{ fontSize: '13px', color: '#5e5248', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function GuidanceDeskCard({ isMobile }) {
  const [hov, setHov] = React.useState(false)
  return (
    <div style={{ background: '#8b3525', padding: isMobile ? '36px 28px' : '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>06</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '34px', fontWeight: 600, color: '#fffcf7', marginBottom: '8px' }}>Guidance Desk</h3>
        <p style={{ fontSize: '13px', fontWeight: 500, color: '#f0c4a8', marginBottom: '20px', letterSpacing: '0.5px' }}>Just Ask Us</p>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, marginBottom: '32px' }}>
          Not sure what kind of help you need? Simply reach out. We listen without judgment, understand your situation, and connect you with the right expert — in Tamil, English, or Hindi.
        </p>
      </div>
      <a href="#help"
        style={{ display: 'inline-block', padding: '14px 28px', border: `1px solid ${hov ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)'}`, color: '#fffcf7', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '1px', width: 'fit-content', transition: 'border-color 0.2s' }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      >Request Help →</a>
    </div>
  )
}
