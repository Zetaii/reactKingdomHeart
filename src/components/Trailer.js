import React, { useEffect } from "react"
import "./Trailer.css"

const Trailer = () => {
  useEffect(() => {
    const videoElement = document.querySelector(".trailer")
    if (videoElement) {
      videoElement.volume = 0.5
    }
  }, [])

  return (
    <div className="trailerContainer">
      <video className="trailer" src="/videos/video-4.mp4" controls autoPlay />
    </div>
  )
}

export default Trailer
