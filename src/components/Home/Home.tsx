import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const languages = [
    {
      name:'Japanese',
      code:'ja',
    },
    {
      name:'Hindi',
      code:'hi'
    },
    {
      name:'Spanish',
      code:'es'
    },
    {
      name:'French',
      code:'fr'
    },
  ]
  const navigate = useNavigate()

  const HandleLangugaeSelected = (language:string):void => {
    navigate(`/learn?language=${language}`)
  };

  return (
    <div>
      <p className="title">Welcome, Begin your journey of learning</p>
      <div className='languagebox'>
        {
          languages.map((item, i)=> <a className='languages' key={i} onClick={()=>HandleLangugaeSelected(item.code)}>{item.name}</a> )
        }
      </div>
      <p className="subtitle">Select any language from above to start learning</p>
    </div>
  )
}

export default Home