import React from 'react'

const Shorts = () => {
async function fetchapi() {
  await fetch('https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY]').then((e)=>{
    console.log(e)
  })
}

  return (
    <div className='w-full h-[1600px] flex justify-center'>
        <div className='w-96 h-96 bg-blue-300 flex justify-center items-center'>
        <button onClick={fetchapi} className='w-5 h-3 bg-red-500 '>fetch</button></div>
        <div></div>
    </div>
  )
}

export default Shorts;