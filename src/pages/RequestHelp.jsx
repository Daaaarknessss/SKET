import React, { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { SuccessCard } from './Volunteer'

const WA_NUMBER = '919381202355'

export default function RequestHelp() {
  const isMobile = useIsMobile()
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{ paddingTop: '64px', background: '#f6f1ea', minHeight: '100vh' }}>
      <div style={{ padding: isMobile ? '48px 16px 64px' : '80px 24px 100px', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? '40px' : '96px', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#ba7d4c', marginBottom: '16px' }}>Get Help</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 600, color: '#1c1812', lineHeight: 1.2, marginBottom: '24px' }}>
              You are not alone in this
            </h1>
            <p style={{ fontSize: '15px', color: '#5e5248', lineHeight: 1.9, marginBottom: '36px' }}>
              Fill in this form and a SKET volunteer will contact you within 48 hours. All services are completely free. Everything you share is confidential.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <ContactItem icon="📱" title="WhatsApp / Call" value="+91 93812 02355" />
              <ContactItem icon="✉️" title="Email" value="help@sket.in" />
            </div>

            <div style={{ padding: '20px 24px', background: 'rgba(139,53,37,0.05)', borderLeft: '3px solid #8b3525' }}>
              <p style={{ fontSize: '13px', color: '#5e5248', lineHeight: 1.8 }}>
                All information shared with SKET is treated with complete confidentiality. We will never share your details without your explicit consent.
              </p>
            </div>
          </div>

          <div>
            {!submitted ? (
              <HelpForm onSubmit={() => setSubmitted(true)} isMobile={isMobile} />
            ) : (
              <SuccessCard
                title="We've Got Your Request"
                message="A SKET volunteer will reach out within 48 hours on the number you provided. Please stay available on WhatsApp."
                sub="All services are free. Your information is confidential."
              />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon, title, value }) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px 24px', background: '#fffcf7', border: '1px solid #dfd6ca' }}>
      <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
      <div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#1c1812', marginBottom: '3px' }}>{title}</p>
        <p style={{ fontSize: '13px', color: '#5e5248' }}>{value}</p>
      </div>
    </div>
  )
}

function HelpForm({ onSubmit, isMobile }) {
  const [fields, setFields] = useState({
    name: '', phone: '', language: 'Tamil', category: '', situation: '', area: '',
  })

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `*SKET Help Request*`,
      ``,
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Preferred language: ${fields.language}`,
      `Type of help: ${fields.category}`,
      `Situation: ${fields.situation}`,
      fields.area ? `Area: ${fields.area}` : null,
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: '#fffcf7', padding: isMobile ? '28px 20px' : '44px', border: '1px solid #dfd6ca' }}>
      <div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#1c1812', marginBottom: '4px' }}>Request for Help</h3>
        <p style={{ fontSize: '13px', color: '#9e9089' }}>In Tamil, English, or Hindi.</p>
      </div>

      <FormField label="Full Name *" type="text" required placeholder="Your name" value={fields.name} onChange={set('name')} />
      <FormField label="Phone Number *" type="tel" required placeholder="+91 XXXXX XXXXX" value={fields.phone} onChange={set('phone')} />

      <SelectField label="Preferred Language" value={fields.language} onChange={set('language')}>
        <option>Tamil</option>
        <option>English</option>
        <option>Hindi</option>
      </SelectField>

      <SelectField label="Type of Help Needed *" required value={fields.category} onChange={set('category')}>
        <option value="">Select a category</option>
        <option>Legal — Rights &amp; Documentation</option>
        <option>Financial — Tax &amp; Govt. Schemes</option>
        <option>Technology &amp; Career</option>
        <option>Life &amp; Personal Guidance</option>
        <option>Food / Medical / Community Aid</option>
        <option>I'm not sure — just want to talk</option>
      </SelectField>

      {fields.category === 'Legal — Rights & Documentation' && (
        <div style={{ padding: '14px 16px', background: 'rgba(139,53,37,0.05)', borderLeft: '3px solid #8b3525' }}>
          <p style={{ fontSize: '12px', color: '#5e5248', lineHeight: 1.75, fontStyle: 'italic' }}>
            <strong style={{ fontStyle: 'normal' }}>Please note:</strong> Guidance provided by SKET volunteers is general legal information only. It does not constitute legal advice and does not create an advocate–client relationship. SKET does not solicit legal work. For formal legal representation, please engage a licensed advocate independently.
          </p>
        </div>
      )}

      <TextareaField
        label="Tell Us About Your Situation *"
        rows={5} required
        placeholder="Describe what you need help with. Even a few lines is enough. You can write in Tamil."
        value={fields.situation} onChange={set('situation')}
      />

      <FormField label="Area / Locality in Chennai" type="text" placeholder="e.g. Tambaram, Anna Nagar, T. Nagar, Perambur..." value={fields.area} onChange={set('area')} />

      <SubmitButton label="Send My Request" />
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
