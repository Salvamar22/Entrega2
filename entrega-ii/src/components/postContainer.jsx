import React from 'react'
import Post from './post'
import { BrowserRouter } from 'react-router-dom'
import './postcontainer.css'

const postContainer = (props) => {
    return (
        <div className="cards-container ">
            {
                console.log(props.cards)
            }

                    {
                        props.cards.map((card) => (
                            <Post title={card.title}
                            imgUrl={card.imgUrl} />
                            ))
                    };
        </div>
    )
}

export default postContainer
