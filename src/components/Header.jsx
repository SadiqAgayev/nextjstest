import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  const router = useRouter()
  return (
    <div className='header'>
      <ul>
        <li onClick={() => router.push('/')}>Home</li>
        <li onClick={() => router.push('/about')}>About</li>
        <li onClick={() => router.push('/blog')}>Blog</li>
      </ul>

      <style jsx>
        {`
          .header {
            background-color: red;
            color: black;
            height: 100px;
            width: 100%;
          }

          .header ul {
            display: flex;
            list-style-type: none;
            gap: 50px;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .header ul li {
            font-size: 30px;
          }
          .header ul li:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Header