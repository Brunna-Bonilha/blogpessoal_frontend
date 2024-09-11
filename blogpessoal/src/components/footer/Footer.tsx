import AuthContext from '../../contexts/AuthContext'
import { ReactNode, useContext } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode;

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="flex flex-col items-center py-4 container">
                <p className='font-bold text-xl'>
  Blog Pessoal Brunna Bonilha | Copyright: {data}
</p>
<p className='text-lg'>Acesse nossas redes sociais</p>
<div className='flex gap-2'>
  <a href="https://www.linkedin.com/in/bbonilha/" target="_blank">
    <FaLinkedin size={48} />
  </a>
  <a href="https://github.com/Brunna-Bonilha" target="_blank">
    <FaGithub size={48}  />
  </a>
</div>

                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer