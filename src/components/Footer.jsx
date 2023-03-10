import React from 'react'

const Footer = () => {

  return (
    <div className='footer'>
      <h1>Footer</h1>

      <style jsx>
        {`
          .footer {
            background-color: red;
            color: black;
            height: 100px;
            width: 100%;
            position: fixed;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}

export default Footer