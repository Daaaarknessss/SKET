import React from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const IMPACT = [
  { amount: '₹500',   desc: 'covers a complete legal consultation for one family' },
  { amount: '₹1,500', desc: 'sponsors a full tax filing session for a low-income earner' },
  { amount: '₹5,000', desc: 'funds a community guidance camp serving 20+ families' },
]

const OTHER_WAYS = [
  'Volunteer your skills — even 2 hours a month makes a difference',
  'Spread the word — share our contact with those who need us',
  'Connect us with corporates for CSR partnerships',
  'Donate materials — stationery, devices, or printed pamphlets',
]

export default function Donate() {
  const isMobile = useIsMobile()

  return (
    <div style={{ paddingTop: '64px' }}>

      <section style={{ padding: isMobile ? '56px 16px 48px' : '80px 24px 64px', background: '#253525' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '16px' }}>Support Our Work</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 600, color: '#f6f1ea', lineHeight: 1.1, maxWidth: '600px', marginBottom: '24px' }}>
            Help us reach more families
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(246,241,234,0.6)', maxWidth: '500px', lineHeight: 1.9 }}>
            Every rupee funds the reach. 100% volunteer-run. No overhead. All services remain permanently free.
          </p>
        </div>
      </section>

      <section style={{ padding: isMobile ? '48px 16px' : '64px 24px', background: '#fffcf7', borderBottom: '1px solid #dfd6ca' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '48px', textAlign: 'center' }}>
            What Your Support Enables
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2px', background: '#dfd6ca' }}>
            {IMPACT.map(({ amount, desc }) => (
              <div key={amount} style={{ background: '#fffcf7', padding: isMobile ? '32px 24px' : '44px 36px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '44px' : '54px', fontWeight: 700, color: '#8b3525', marginBottom: '8px' }}>{amount}</p>
                <p style={{ fontSize: '13px', color: '#5e5248', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '48px 16px 64px' : '80px 24px 100px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'start' }}>

          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600, color: '#1c1812', marginBottom: '28px' }}>How to Donate</h2>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '32px' }}>
              We accept donations via UPI, bank transfer, and cheque. All donations are acknowledged with receipts.
            </p>

            <div style={{ padding: '28px 32px', background: '#fffcf7', border: '1px solid #dfd6ca', marginBottom: '16px' }}>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#9e9089', marginBottom: '12px' }}>UPI</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '22px' : '26px', fontWeight: 600, color: '#1c1812' }}>sket.ngo@[bank]</p>
              <p style={{ fontSize: '12px', color: '#9e9089', marginTop: '8px' }}>UPI ID to be confirmed after registration</p>
            </div>

            <div style={{ padding: '28px 32px', background: '#fffcf7', border: '1px solid #dfd6ca', marginBottom: '24px' }}>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#9e9089', marginBottom: '20px' }}>Bank Transfer</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <BankRow label="Account Name" value="SKET Foundation" />
                <BankRow label="Account No." value="[To be updated]" />
                <BankRow label="IFSC Code" value="[To be updated]" />
                <BankRow label="Location" value="Chennai, Tamil Nadu" last />
              </div>
            </div>

            <div style={{ padding: '20px 24px', background: 'rgba(139,53,37,0.05)', borderLeft: '3px solid #8b3525' }}>
              <p style={{ fontSize: '13px', color: '#5e5248', lineHeight: 1.8 }}>
                SKET is being registered as a Trust / Section 8 Company under Tamil Nadu law. <strong>80G tax exemption</strong> will apply once registration is complete. All donations eligible retroactively.
              </p>
            </div>
          </div>

          <div>
            <div style={{ padding: isMobile ? '28px 24px' : '36px', background: '#fffcf7', border: '1px solid #dfd6ca', marginBottom: '24px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '20px' : '22px', fontStyle: 'italic', color: '#1c1812', lineHeight: 1.8, marginBottom: '28px' }}>
                "We are not here to replace institutions. We are here to fill the gaps they leave behind — with expertise, with kindness, and with our time."
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid #dfd6ca' }}>
                <div style={{ display: 'flex' }}>
                  <Avatar initial="N" bg="#8b3525" zIndex={1} />
                  <Avatar initial="A" bg="#253525" marginLeft="-12px" />
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#1c1812' }}>Naman Mehta &amp; Aravind G</p>
                  <p style={{ fontSize: '12px', color: '#9e9089' }}>Co-founders, SKET</p>
                </div>
              </div>
            </div>

            <div style={{ padding: isMobile ? '28px 24px' : '32px', background: '#f6f1ea', border: '1px solid #dfd6ca' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 600, color: '#1c1812', marginBottom: '20px' }}>Other Ways to Support</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {OTHER_WAYS.map((text) => (
                  <div key={text} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', background: '#8b3525', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }} />
                    <p style={{ fontSize: '14px', color: '#5e5248', lineHeight: 1.7 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

function BankRow({ label, value, last }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', paddingBottom: last ? 0 : '12px', borderBottom: last ? 'none' : '1px solid #f0ebe3' }}>
      <span style={{ color: '#9e9089' }}>{label}</span>
      <span style={{ color: '#1c1812', fontWeight: 500 }}>{value}</span>
    </div>
  )
}

function Avatar({ initial, bg, zIndex, marginLeft }) {
  return (
    <div style={{ width: '44px', height: '44px', background: bg, borderRadius: '50%', border: '2px solid #fffcf7', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: zIndex || 'auto', position: 'relative', marginLeft: marginLeft || 0 }}>
      <span style={{ color: 'white', fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600 }}>{initial}</span>
    </div>
  )
}
