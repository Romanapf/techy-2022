import type { NextPage } from 'next'
import { Grid } from '../components/Grid'
import { Meta } from '../components/Meta'


const Home: NextPage = () => {
  


  return (
    <>
    <Meta/>
  <div className='flex flex-col justify-center items-center pt-6 relative pb-5'>
      <img src="/logo-techy.svg" alt="logo" className="w-max pt-10 lg:pt-5" />
       <div className='px-5 lg:px-20  py-10 h-full m-auto flex flex-col justify-center items-center'>
           <img className='fixed top-0 right-0 -z-10' src='/corner-top-right.png'/>
           <img className='fixed top-0 left-0 -z-10' src='/corner-top-left.png'/>
            <Grid />
            <img className='fixed bottom-0 right-0 -z-10' src='/corner-bottom-right.png'/>
           <img className='fixed bottom-0 left-0 -z-10' src='/corner-bottom-left.png'/>
      </div>
      <a className="bg-black text-white p-2 top-1/2 right-0 z-50 rounded-md border-black hover:border hover:bg-white hover:text-black cursor-pointer">👀 Cartel Techy 2022</a>
    </ div>
    </>
  )
}

export default Home
