import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../Firebase/setup'


const Home = (props) => {
    const [news, setNews] = useState([])
   
    const addNews=async(data)=>{
        const newsDoc = doc(database,"News",`${data.url.substr(-10,10)}`)
       try {
        await setDoc(newsDoc,{
            title:data.title,
            description:data.description
        })
        
       } catch (error) {
        console.error(error)
       }
    }



    const getNews = () => {
        fetch(`https://newsapi.org/v2/everything?q=${props.menu ? props.menu : "All"}&sortBy=popularity&apiKey=b27fe0ea9cfc4fd9b31137b506555009`)
            .then(res => res.json())
            .then(json => setNews(json.articles))
    }
    useEffect(() => {
        getNews()
    }, [props.menu])

    return (
        <div className='mt-12 p-7 grid grid-cols-4'>
            {
                news?.filter(data=>data.title.includes(props.search)).map((data) => {
                    return <>


                      <Link onClick={()=>addNews(data)} to={"/details" } state={{data:data}}>
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={data.urlToImage} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.content}</p>
                                    
                                </div>
                            </div>
                      </Link>

                    </>
                })
            }
        </div>
    )
}

export default Home