import { useNavigate } from "react-router-dom";

export default function Button({children,disabled,type,to,onClick}) {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate(to)
  }

  const base = 'bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-wait';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2.5 md:px-5 md:py-2.5 text-xs',
    secondary:'border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-wait md:px-6 md:py-4 p-3',
    round:base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm px-3'
  }
  if(onClick) 
  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  )


  return (
    <button disabled={disabled} onClick={handleClick} className={styles[type]}>
      {children}
    </button>
  )
}
