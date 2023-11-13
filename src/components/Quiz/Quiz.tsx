import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import './Quiz.css'
import { useSelector, useDispatch } from "react-redux"
import { saveResult } from "@/redux/slice"

const Quiz = () => {
  const [result, setResult]= useState<string[]>([])
  const [count, setCount]= useState<number>(0)
  const [ans, setAns]= useState<string>('')
  const params = useSearchParams()[0].get('language') as LangType
  const { words } = useSelector((state:{ root: rootstate})=>state.root)
  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const NextHandler = ():void =>{
    if(ans==='') return
    setResult((prev)=>[...prev, ans])
    setCount(prev=>prev+1)
    setAns('')
  }

  useEffect(()=>{
    if(count+1>words.length)Navigate(`/result?language=${params}`)
    dispatch(saveResult(result))
  },[result])

  return (
    <div className="quizblock">
      <div className="flex gap-x-4 items-center">
        <a className="smallbtn bg-orange-600 hover:bg-red-600" onClick={()=>Navigate(`/learn?language=${params}`)}>Back</a>
        <p className="text-lg">Quizy</p>
      </div>
      <div className="textbox">
        <p>{count+1} )</p>
        <p>{words[count]?.word}</p>
        <p>-</p>
        <div className="flex flex-col">
          {words[count]?.options.map((option,i)=><a key={i} className="cursor-pointer" onClick={()=>{setAns(option)}}><input type="radio" value={option} checked={ans===option} onChange={()=>{setAns(option)}}/> {option}</a> )}
        </div>
        <a className={`smallbtn leading-7 self-end  ml-auto  ${ans==='' ? 'bg-orange-400' : 'bg-orange-600 hover:bg-red-600'}`} onClick={()=>NextHandler()}>{count===words.length-1 ?'Test':'Next'}</a>
      </div>
    </div>
  )
}

export default Quiz