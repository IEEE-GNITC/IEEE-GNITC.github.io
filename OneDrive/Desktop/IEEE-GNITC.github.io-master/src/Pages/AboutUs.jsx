import React from 'react'
import './../index.css'


function AboutUs() {

  const data1= "IEEE is a non-profit organization, and the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe "


  const data2= "The IEEE Student Branch at our institution is an active technical community, functioning with the support and encouragement of the institution’s leadership and faculty, and is affiliated with the global IEEE organization. It offers students opportunities to enhance their technical skills, foster innovation, and engage in interdisciplinary learning through workshops, seminars, hackathons, and other events. Guided by experienced mentors, the branch promotes research, leadership, and global networking, effectively bridging the gap between academics and industry."

  return (
    <div id='aboutus'>
    <div  className=' md:min-h-screen '>
      <p>.</p>
      <div className="heading  mt-10 text-center mr-8">About Us</div>
      <div className=" flex gap-2 m-1 flex-col md:flex-row  p-4 ">
        <span className='border-2 p-4 md:w-3/5 m-5 bg-slate-900 border-white rounded-2xl txt'>{data1}</span>
        <span className='border-2 p-4 md:w-3/5 m-5 bg-slate-900 border-white rounded-2xl txt'>{data2}</span>
      </div>
     
    </div> 
    </div>
  )
}

export default AboutUs
