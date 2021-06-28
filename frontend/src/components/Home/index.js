import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Home.css';

export const HomeIndex = () => {


    return (
        <>
            <section className='top-section__container'>
                <div className='top-section__news'>
                    <h1>Kanye Wins Again</h1>
                    <div>
                        Kanye West won his first gospel Grammy, and his first honor from the Recording Academy in eight years, for his “Jesus Is King” album. It is his 22nd career Grammy.

                        At least for a moment, it made him the most awarded hip-hop performer in Grammy history. He and Jay-Z went into the 2021 Grammys with 21 wins each. However, his record could be short-lived. Jay-Z stands a very good chance of almost immediately tying and then surpassing West, as he is up for four awards this year, for “Black Parade” and “Savage (Remix).”
                    </div>
                </div>
                <div className='top-section__photo' style={{ backgroundImage: "url('https://ichef.bbci.co.uk/news/640/cpsprodpb/17FC/production/_114404160_gettyimages-87146405.jpg')" }}>
                    {/* Album/Artist photo will go here */}
                </div>
            </section>
            <section className='bottom-section__container'>
                <div className='bottom-section__news'>
                    <h1>Drake Bamboozled</h1>
                    <img className='drakeImage' src='https://www.rollingstone.com/wp-content/uploads/2019/10/Drake.jpg'></img>
                    "Drake?!?" - Soulja Boy. Drake found himself in hot water over the weekend when a fan...
                </div>
                <div className='bottom-section__news'>
                    <h1>Britney Breaks Her Silence...</h1>
                    <img className='drakeImage' src='https://pyxis.nymag.com/v1/imgs/169/5cc/461d24d02209e5b313c5f7701b580f50a9-britney-spears.rsquare.w1200.jpg'></img>
                    Britney shares how she really feels about her conservatorship. Her father...
                </div>
                <div className='bottom-section__news'>
                    <h1>CALL ME IF YOU GET LOST</h1>
                    <img className='drakeImage' src='https://pyxis.nymag.com/v1/imgs/e08/2f5/39c8c4ad4a1dcab4532335fba890eafad3-tyler-the-creator-album-review.2x.rsocial.w600.jpg'></img>
                    Tyler, the Creator's new album tops charts in classic Tyler fashion. Fans have been...
                </div>
                <div className='bottom-section__news' id='lastInNews'>
                    <h1>Cardi Expecting Baby #2</h1>
                    <img className='drakeImage' src='https://pagesix.com/wp-content/uploads/sites/3/2019/12/cardi-b-offset.jpg?quality=80&strip=all'></img>
                    Surprise!! Cardi and Offset made their announcement during their performance at the BETAwards...
                </div>

            </section>
        </>
    );
}





            // <div className='top-section__div'>
            //     a
            // </div>
            // <div className='top-section__div'>
            //     b
            // </div>
            // <div className='top-section__div'>
            //     c
            // </div>
