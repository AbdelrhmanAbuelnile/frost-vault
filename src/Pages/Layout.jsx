import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

function Layout() {
  return (
    <div className='w-screen min-h-screen bg-primaryback overflow-x-hidden z-30'>
          <Header />

          <div className='w-full h-full py-4 px-2 md:px-7 flex flex-row justify-center items-start gap-6'>
            <div className='w-1/12 h-full md:block hidden'>
              <SideNav />
            </div>

            <div className='w-full md:w-11/12 h-full z-30'>
              <Outlet />
            </div>

          </div>

          {/* <Bubbles /> */}
      </div>
  )
}

export default Layout