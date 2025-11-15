import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
return (
<div className='max-w-4xl mx-auto p-6 space-y-10'>
<Hero/>
<About/>
<Skills/>
<Experience/>
<Projects/>
<Contact/>
</div>
)}
