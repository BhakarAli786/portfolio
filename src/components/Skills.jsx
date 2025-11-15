import React from 'react'
const data={
frontend:["React ⚛️","JavaScript","jQuery","HTML/CSS","TailwindCSS 🌈","Kendo UI"],
backend:["C#",".NET Core","ASP.NET MVC","Entity Framework","ADO.NET"],
db:["SQL Server 🛢️","Oracle SQL"]
}
export default function Skills(){
return (
<section id='skills'>
<h2 className='text-2xl font-bold text-primary'>💡 Skills</h2>
<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
{Object.entries(data).map(([title,list])=>(
<div key={title} className='bg-white p-4 rounded shadow'>
<h3 className='font-semibold capitalize'>{title}</h3>
<ul className='mt-2 space-y-1 text-gray-700'>
{list.map(i=><li key={i}>• {i}</li>)}
</ul>
</div>
))}
</div>
</section>
)}