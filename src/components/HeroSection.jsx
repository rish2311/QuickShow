import { assets } from '../assets/assets'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>

      <img
        src={assets.marvelLogo}
        alt=""
        className="max-h-11 lg:h-11 mt-20"
      />

      <h1 className='text-5xl md:text-[70px] md:leading-[72px] font-semibold max-w-110'>
        Guardians <br /> of the Galaxy
      </h1>

      <div className='flex items-center gap-4 text-gray-300'>

        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4 h-4' />
          2018
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4' />
          2h 8m
        </div>

      </div>

      <p className='max-w-xl text-gray-300'>
        In a post-apocalyptic universe, a group of unlikely heroes
        unite to protect the galaxy from powerful enemies and
        unexpected threats.
      </p>

      <div className='flex gap-4 mt-4'>

        <button
          onClick={() => navigate('/movies')}
          className='px-6 py-3 bg-red-600 rounded-md font-medium hover:bg-red-700'
        >
          Watch Now
        </button>

        <button
          className='px-6 py-3 border border-white rounded-md font-medium'
        >
          Explore Movies
        </button>
      </div>

      <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRightIcon className='w-5 h-5' />
      </button>
    </div>
  )
}

export default HeroSection