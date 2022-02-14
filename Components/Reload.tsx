import React from 'react'

const Reload = () => {
  const handleReload = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
      window.location.reload();        
      }, 100);
  }
  return (
    <div className="text-center">
      <button onClick={handleReload} className="buttonGreenBigger">ページを再読込</button>
    </div>
  )
}

export default Reload