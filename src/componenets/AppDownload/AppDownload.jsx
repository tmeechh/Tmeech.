import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
      <>
          <div className='app-download m-auto mt-[100px] text-[max(3vw,20px)] font-[500] text-center' id='app-download'>
              <p>For Better Experience Download <br /> Tmeech. App</p>
              <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-[40px]">
                  <img className='cursor-pointer w-[max(30vw,120px)] max-w-[180px] ' src={assets.play_store} alt="" />
                  <img className='cursor-pointer w-[max(30vw,120px)] max-w-[180px]' src={assets.app_store} alt="" />
              </div>
          </div>   
    </>
  )
}

export default AppDownload