import React from 'react'


const NewsItem = ({item}) =>{
    return(
        <div className = "single-news">       
            <h4>{item.title}</h4>
            <p>{item.feed}</p>
            <hr/>
        </div>
    )
}

export default NewsItem