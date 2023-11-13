import './Loader.css'

const Loader = () => {
  return (
    <div className='flex w-full items-center justify-center h-96'>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    
  )
}

export default Loader