import React from 'react'

const PrimaryBtn = ({lable}) => {
  return (
    <div>
        <button className='primaryBtn bg-green-400 hover:bg-green-800'>{lable}</button>
    </div>
  )
}

export default PrimaryBtn;