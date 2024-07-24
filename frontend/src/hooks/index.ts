import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface Blogtype{ 
    title : string, 
    content : string, 
    id: number,
    author : {
        name:string
    } 
}

export interface Blog{ 
    title : string, 
    content : string, 
    id: number,
    author : {
        name:string
    } 
}


export const useBlog =({id} : {id :number})=>{
    const[loading , setloading] = useState(true)
    const [blog , setblog]= useState<Blog>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/blog/${id}`, {
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(response=>{
            setblog(response.data.blog)
            setloading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs = ()=>{
    const[loading , setloading] = useState(true)
    const [blogs , setblogs]= useState<Blogtype[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/blog/bulk`, {
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(response=>{
            setblogs(response.data.blogs)
            setloading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}