import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Searchorder() {
const navigate = useNavigate();
    function handlesubmit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`)
        setquery("")
    }
    const [query, setquery] = useState("")
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 w-28  sm:w-44  sm:focus:w-48 focus:transition-all focus:transition-duration: 150ms focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-1 focus:ring-opacity-70" placeholder='Search Order:' value={query} onChange={(e) => setquery(e.target.value)}/>
            </form>
        </div>
    )
}
