import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import useItems from '../hooks/useItems'
import TictokVideo from './TictokVideo'

const Tictok = () => {

    const [url, setUrl] = useState("")
    const [page, setPage] = useState(0)
    const [index, setIndex] = useState(0)
    const[response, data, isLoading] = useFetch(url, "json")
    const items = useItems(data);

    useEffect(() =>{
        setUrl('http://localhost:4000/page/' + page)
    },[page])

    function nextVideo(){
        if(index + 2 === items.length){
            setPage(page + 1)
        }
        setIndex(index + 1);
        
        
    }

    function preVideo(){
        if(index > 0){
            setIndex(index - 1);
        }
        
    }



  return (
    <div>
        <div>{isLoading ? "Cargando..." : ""}</div>
        <button disabled={isLoading} onClick={() => nextVideo()}>Siguiente Video</button>
        <button disabled={isLoading}onClick={() => preVideo()}>Vudeo Anterior</button>

        <div className='tiktoksContainerView'>
            <div className="tiktoksContainer" style={{transform: `translateY(${-1 * index * 960 + 'px'})`}}>
                <Videos items={items} index={index} />
            </div>
        </div>
    </div>
  )
  
}

const Videos = React.memo(({items, index}) => {
    return <>
    {items ?.map((item, i) => (<TictokVideo key={item.id} item={item} current={index === i}/>))}
    </>
})

export default Tictok