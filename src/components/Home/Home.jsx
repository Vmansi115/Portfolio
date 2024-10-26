
import avtarImg from '../../assets/female-developer-background_665280-9658.avif';
const Home = () => {
  return (
    <div className='text-[#771d7a] flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-5xl font-bold font-serif flex leading-normal tracking-tighter'>Hello, I am Mansi Verma</h1>
        <br></br>
        <p className='text-sm md:text-2xl tracking-tight font-mono text-[#dc73de]'>
        Passionate problem-solver and aspiring software engineer with a knack for coding and a love for innovation. Looking forward to 
build impactful solutions of real world problems in order to escalate user experience along with continuous learning and 
adapting to changing technologies to drive ahead in the flourishing world of Tech.
<br></br>
<b>
“Turning ideas into reality”.
</b>
</p>
<button className='mt-5 md:md-10 text-purple py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465191'>Contact Me</button>
        </div>
        <div><img className='w-4/5 right-0' src={avtarImg} alt=""/></div>
    </div>
  )
}

export default Home;
