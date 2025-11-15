import React from 'react'
export default function Projects(){
return (
<section id='projects'>
<h2 className='text-2xl font-bold text-primary'>🚀 Projects</h2>

<div className='mt-4 grid gap-4'>

<div className='bg-white p-4 rounded shadow'>
<h3 className='font-semibold'>KACP — Kentucky Assigned Claims Plan</h3>
<p className='mt-1 text-gray-700'>
Support, debugging, UI fixes, SQL validations, workflow enhancements.
</p>
</div>

<div className='bg-white p-4 rounded shadow'>
<h3 className='font-semibold'>KIAA — Kentucky Insurance Arbitration Association</h3>
<p className='mt-1 text-gray-700'>
Arbitration workflow fixes, UI improvements, evidence uploads, ticket handling.
</p>
</div>

</div>
</section>
)}