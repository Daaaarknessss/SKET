import React, { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const WA_NUMBER = '919381202355'

export default function Volunteer() {
  const isMobile = useIsMobile()
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{ paddingTop: '64px', background: '#f6f1ea', minHeight: '100vh' }}>
      <div style={{ padding: isMobile ? '48px 16px 64px' : '80px 24px 100px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '96px', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '16px' }}>Join Us</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 600, color: '#1c1812', lineHeight: 1.2, marginBottom: '24px' }}>
              Your skills can change a life
            </h1>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '20px' }}>
              Whether you are a lawyer, accountant, engineer, counselor, or simply someone who cares — there is a meaningful place for you at SKET.
            </p>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '40px' }}>
              Give a few hours a month. The impact, for the person you help, can last a lifetime.
            </p>
            <div style={{ padding: '32px', background: '#fffcf7', borderLeft: '3px solid #8b3525', marginBottom: '32px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: '#1c1812', lineHeight: 1.75, marginBottom: '16px' }}>
                "The best way to find yourself is to lose yourself in the service of others."
              </p>
              <p style={{ fontSize: '12px', color: '#9e9089', letterSpacing: '1px' }}>— Mahatma Gandhi</p>
            </div>
            {!isMobile && (
              <div style={{ aspectRatio: '4/3', background: '#edeae3', border: '1px dashed #cfc8bc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #cfc8bc' }} />
                <p style={{ fontSize: '11px', color: '#9e9089', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>
                  Photo —<br />Volunteers at Work
                </p>
              </div>
            )}
          </div>

          <div>
            {!submitted ? (
              <VolunteerForm onSubmit={() => setSubmitted(true)} isMobile={isMobile} />
            ) : (
              <SuccessCard
                title="Thank You!"
                message="We've received your application. A member of our team will reach out within 2–3 days. Welcome to the SKET family."
                sub="Chennai, Tamil Nadu"
              />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

function VolunteerForm({ onSubmit, isMobile }) {
  const [fields, setFields] = useState({
    name: '', phone: '', email: '', profession: '', hours: '2–4 hours', note: '',
  })

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `*SKET Volunteer Application*`,
      ``,
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      fields.email ? `Email: ${fields.email}` : null,
      `Profession: ${fields.profession}`,
      `Hours/month: ${fields.hours}`,
      fields.note ? `Note: ${fields.note}` : null,
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: '#fffcf7', padding: isMobile ? '28px 20px' : '44px', border: '1px solid #dfd6ca' }}>
      <div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#1c1812', marginBottom: '4px' }}>Volunteer Application</h3>
        <p style={{ fontSize: '13px', color: '#9e9089' }}>Free to join. No commitment too small.</p>
      </div>

      <FormField label="Full Name *" type="text" required placeholder="Your full name" value={fields.name} onChange={set('name')} />
      <FormField label="Phone Number *" type="tel" required placeholder="+91 XXXXX XXXXX" value={fields.phone} onChange={set('phone')} />
      <FormField label="Email Address" type="email" placeholder="you@email.com" value={fields.email} onChange={set('email')} />

      <SelectField label="Profession *" required value={fields.profession} onChange={set('profession')}>
        <option value="">Select your profession</option>
        <option value="Lawyer / Legal Professional">Lawyer / Legal Professional</option>
        <option value="Chartered Accountant / Finance">Chartered Accountant / Finance</option>
        <option value="Software Engineer / Tech">Software Engineer / Tech</option>
        <option value="Astrologer / Counselor">Astrologer / Counselor</option>
        <option value="Doctor / Medical Professional">Doctor / Medical Professional</option>
        <option value="Teacher / Educator">Teacher / Educator</option>
        <option value="Social Worker">Social Worker</option>
        <option value="Other">Other</option>
      </SelectField>

      <SelectField label="Hours Available per Month" value={fields.hours} onChange={set('hours')}>
        <option>2–4 hours</option>
        <option>4–8 hours</option>
        <option>8–12 hours</option>
        <option>12+ hours</option>
      </SelectField>

      <TextareaField label="A Note (optional)" rows={3} placeholder="Tell us a little about yourself and how you'd like to help..." value={fields.note} onChange={set('note')} />

      <SubmitButton label="Apply to Volunteer" />
    </form>
  )
}

function FormField({ label, type, required, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#5e5248' }}>{label}</label>
      <input
        type={type} required={required} placeholder={placeholder} value={value} onChange={onChange}
        style={{ padding: '14px 16px', background: focused ? '#fff' : '#f6f1ea', border: `1px solid ${focused ? '#8b3525' : '#dfd6ca'}`, borderRadius: '1px', fontSize: '14px', color: '#1c1812', outline: 'none', transition: 'border-color 0.2s, background 0.2s' }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
    </div>
  )
}

function SelectField({ label, required, value, onChange, children }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#5e5248' }}>{label}</label>
      <select
        required={required} value={value} onChange={onChange}
        style={{ padding: '14px 16px', background: focused ? '#fff' : '#f6f1ea', border: `1px solid ${focused ? '#8b3525' : '#dfd6ca'}`, borderRadius: '1px', fontSize: '14px', color: '#1c1812', outline: 'none', appearance: 'none', cursor: 'pointer', transition: 'border-color 0.2s' }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      >{children}</select>
    </div>
  )
}

function TextareaField({ label, rows, placeholder, required, value, onChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#5e5248' }}>{label}</label>
      <textarea
        rows={rows} required={required} placeholder={placeholder} value={value} onChange={onChange}
        style={{ padding: '14px 16px', background: focused ? '#fff' : '#f6f1ea', border: `1px solid ${focused ? '#8b3525' : '#dfd6ca'}`, borderRadius: '1px', fontSize: '14px', color: '#1c1812', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s, background 0.2s', fontFamily: "'DM Sans', sans-serif" }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
    </div>
  )
}

function SubmitButton({ label }) {
  const [hov, setHov] = useState(false)
  return (
    <button type="submit"
      style={{ padding: '16px', background: hov ? '#6e2a1d' : '#8b3525', color: '#fffcf7', border: 'none', fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s', borderRadius: '1px' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >{label}</button>
  )
}

export function SuccessCard({ title, message, sub }) {
  return (
    <div style={{ padding: '56px 32px', background: '#fffcf7', border: '1px solid #dfd6ca', textAlign: 'center' }}>
      <div style={{ width: '64px', height: '64px', background: '#253525', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
        <span style={{ color: 'white', fontSize: '24px', lineHeight: 1 }}>✓</span>
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '34px', fontWeight: 600, color: '#1c1812', marginBottom: '16px' }}>{title}</h3>
      <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.85, marginBottom: '20px' }}>{message}</p>
      <p style={{ fontSize: '13px', color: '#9e9089', letterSpacing: '0.5px' }}>{sub}</p>
    </div>
  )
}
