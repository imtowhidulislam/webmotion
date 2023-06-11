import React from 'react'

const AccentBtn = ({lable}) => {
  return (
    <div>
        <button className='primaryBtn bg-orange-400 hover:bg-orange-800'>{lable}</button>
    </div>
  )
}

export default AccentBtn