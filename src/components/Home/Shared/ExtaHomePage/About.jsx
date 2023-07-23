import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className=' lg:w-1/2'><img src="https://thethemedemo.com/educen/wp-content/uploads/2017/07/about.png" className=" rounded-lg lg:w-full w-96" /></div>
    
    <div className='lg:w-1/2 font-serif' >
      <h1 className="text-5xl font-bold">ABOUT</h1>
      <h3 className='text-xl mt-2'>Fable daycare, preschool, and kindergarten</h3>
      <div className="divider"></div> 
      <p className="py-6">Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community… Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
<label>
<span>Playing Science</span>
<progress className="progress progress-primary w-full" value="70" max="100"></progress></label>
<label>
<span>Arts And Craft</span>
<progress className="progress progress-secondary w-full" value="80" max="100"></progress></label>
<label>
<span>Creative Writing</span>
<progress className="progress progress-success w-full" value="50" max="100"></progress></label>


    </div>
  </div>
</div>
        </div>
    );
};

export default About;