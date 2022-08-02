import { useEffect, useState } from "react"

const useFetch = (url, type) => {

  const [data, setData] = useState(null)
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(!!url){
        fechtData();
    }
    
    async function fechtData(){

        try {
            setIsLoading(true);
            const res = await fetch(url);
            setResponse(res);
            console.log(res)

            switch (type) {
                case "text":
                  const text = await res.text();
                  setData(text);
                  setIsLoading(false);
                  break;
                case "json":
                  const json = await res.json();
                  setData(json);
                  console.log({ json });
                  setIsLoading(false);
                  break;
            }
            
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
        
    } 
  }, [url])

  return[response, data, isLoading]
}

export default useFetch