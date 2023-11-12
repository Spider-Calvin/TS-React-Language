import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Quiz.css'

const Quiz = () => {
  const [result, setReesult]= useState<string[]>([])
  const [count, setCount]= useState<number>(0)
  const [ans, setAns]= useState<string>('')

  const Navigate = useNavigate()

  const NextHandler = ():void =>{
    setReesult((prev)=>[...prev, ans])
    setCount(prev=>prev+1)
  }
console.log(ans,'ans')
  return (
    <div className="quizblock">
      <div className="flex gap-x-4 items-center">
        <a className="smallbtn bg-orange-600 hover:bg-red-600" onClick={()=>Navigate('/')}>Back</a>
        <p className="text-lg">Quizy</p>
      </div>
      <div className="textbox">
        <p>{count+1} )</p>
        <p>Sample</p>
        <p>-</p>
        <div className="flex flex-col">
          <a className="cursor-pointer" onClick={()=>{setAns('lol')}}><input type="radio" value={'lol'} checked={ans==='lol'} onChange={()=>{setAns('lol')}}/> lol</a>
          <a className="cursor-pointer" onClick={()=>{setAns('lol1')}}><input type="radio" value={'lol1'} checked={ans==='lol1'} onChange={()=>{setAns('lol1')}}/> lol</a>
          <a className="cursor-pointer" onClick={()=>{setAns('lol2')}}><input type="radio" value={'lol2'} checked={ans==='lol2'} onChange={()=>{setAns('lol2')}}/> lol</a>
          <a className="cursor-pointer" onClick={()=>{setAns('lol3')}}><input type="radio" value={'lol3'} checked={ans==='lol3'} onChange={()=>{setAns('lol3')}}/> lol</a>
        </div>

        <a className={`smallbtn leading-7 self-end  ml-auto  ${ans==='' ? 'bg-orange-400' : 'bg-orange-600 hover:bg-red-600'}`} onClick={count===7 ? ()=>Navigate('/quiz') : ()=>NextHandler()}>{count===7?'Test':'Next'}</a>
      </div>
    </div>
  )
}

export default Quiz