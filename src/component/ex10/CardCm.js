import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CardCm.css';

export default function CardCm() {
    const [showCard, cardTitle] = useState([]);
    const [loading, loadingTime] = useState(false);

    function getPosts() {
        loadingTime(true);
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts",
            params:{
                _limit:50
            }
        }).then((response) => {
            const responseShow = response.data.map(posts => {
                return {
                    userId: posts.userId,
                    id: posts.id,
                    title: posts.title,
                    body:posts.body
                };
            });
            cardTitle(responseShow);
            loadingTime(false);
        }).catch((error) => {
            toast(error.message);
            loadingTime(false)
        });
    };
    
    return (
        <>       
            <button className='but' onClick={getPosts}>click</button>

            {loading && <div className='loading'>loading...</div>}

            { showCard.map(finalShow => {
                return( 
                    <div className='titlediv' key={finalShow.id}>
                        {finalShow.title}
                    </div>
                    )
            })}

            <ToastContainer />
        </>
    )
}
