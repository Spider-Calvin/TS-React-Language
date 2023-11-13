import { useEffect, useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import './Learning.css'
import { fetchAudio, translatewords } from '../../utils/features'
import { useDispatch, useSelector } from "react-redux"
import { getWordsFail, getWordsRequest, getWordsSuccess } from "@/redux/slice"
import Loader from '../Loader/Loader'
import Lottie from "lottie-react"
import language from '../../animations/language.json'

const Learning = () => {
  const [count, setCount]= useState<number>(0)
  const params = useSearchParams()[0].get('language') as LangType
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, words } = useSelector((state:{ root: rootstate})=>state.root)
  const [audio, setAudio] = useState<string>('')
  const audioRef = useRef(null)

  useEffect(()=>{
    dispatch(getWordsRequest())
    translatewords(params || 'hi').then((arr)=>dispatch(getWordsSuccess(arr)))
    .catch((err)=>dispatch(getWordsFail(err.message)))
  },[])

  const NextHandler = ():void =>{
    setCount(prev=>prev+1)
    setAudio('')
  }

  const Previous = ():void =>{
    setCount(prev=>prev-1)
    setAudio('')
  }

  const audioHandler = async ()=>{
    const player:HTMLAudioElement = audioRef.current!
    if(player){
      player.play()
    }else{
      const data = await fetchAudio(words[count]?.word,params)
      setAudio(data)
    }
  }

  if(loading) return <Loader/>

  return (
    <div className="leaningblock">
      {audio && <audio src={audio} autoPlay ref={audioRef} /> }
      <div className="flex gap-x-4 items-center">
        <a className="LearnSmallbtn" onClick={count===0 ? ()=>Navigate('/') : ()=>Previous()}>Back</a>
        <p className="text-base ld:text-lg">Learning made Easy</p>
      </div>
      <div className="lg:flex lg:flex-row-reverse gap-x-4">
        <Lottie animationData={language} loop={true} className='languageanimation' />
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <div className="textbox">
              <p>{count+1} )</p>
              <p>{words[count]?.word}</p>
              <p>-</p>
              <p>{words[count]?.meaning}</p>
              <svg onClick={()=>audioHandler()} className='speaker w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>

              <a className="LearnSmallbtn leading-7 self-end  ml-auto" onClick={count===words.length-1 ? ()=>Navigate(`/quiz?language=${params}`) : ()=>NextHandler()}>{count===words.length-1 ?'Test':'Next'}</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Learning