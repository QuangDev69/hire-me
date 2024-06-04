import Link from 'next/link'
import {FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/QuangDev69"},
    {icon: <FaFacebook/>, path:"https://www.facebook.com/quangnguyen3010/"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/quangdev69/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return <Link key={index} href={item.path} target='blank' className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
