import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) =>{
    
    const news = props.news.map(item => {
        return(
            <NewsItem key = {item.id} item = {item}/>
        )
    });

    return (
        <div className = "news-container">
            {news}
        </div>
    )
    
}

export default NewsList;