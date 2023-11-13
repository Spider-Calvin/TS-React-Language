import { useNavigate, useSearchParams } from "react-router-dom"
import './Result.css'
import { useSelector, useDispatch } from "react-redux"
import { clearState } from "@/redux/slice"
import { countMatchingElement } from "@/utils/features"

const Result = () => {
  const { words, result } = useSelector((state:{ root: rootstate})=>state.root)
  const correctAns = countMatchingElement(result, words.map(word => word.meaning))
  const percentage = (correctAns / words.length) * 100
  const params = useSearchParams()[0].get('language') as LangType
  const languages = {
    ja:'Japanese',
    hi:'Hindi',
    es:'Spanish',
    fr:'French'
  }
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const resetHandler = ()=>{
    Navigate('/')
    dispatch(clearState())
  }


  return (
    <div className="resultblock">
      <div className="flex gap-x-4 items-center">
        <a className="smallbtn bg-indigo-500 hover:bg-red-600" onClick={()=>Navigate(`/quiz?language=${params}`)}>Back</a>
        <p className="text-lg">You have scored {correctAns} out of {words.length}</p>
      </div>
      <div className="resulttextbox">
        <div className="flex flex-col">
          <h6 className="font-semibold">{languages[params]}</h6>
          {words.map((word,i)=><a key={i}>{i+1} {word.word}</a> )}
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold">Your Answers</h6>
          {result.map((option,i)=><a key={i} className={`${ option === words[i].meaning ? 'text-green-800' : 'text-red-800' }`}>{option}</a> )}
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold">Correct Answers</h6>
          {words.map((word,i)=><a key={i} className='text-green-800'>{word.meaning}</a> )}
        </div>
      </div>
      <div className="flex gap-x-4 items-center lg:w-6/12">
        <a className={`smallbtn leading-7 self-end ${percentage >50 ? 'bg-green-600' :'bg-red-600'}`}>{percentage >50?'Pass':'Fail'}</a><a className={`smallbtn leading-7 self-end  ml-auto bg-indigo-500 hover:bg-red-600`} onClick={resetHandler}>Learn Again</a>
      </div>
    </div>
  )
}

export default Result