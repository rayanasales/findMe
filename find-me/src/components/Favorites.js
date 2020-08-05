import React from 'react';
import './../assets/css/Style.css';
import strings from '../util/strings';
import dislikeIcon from '../assets/images/dislike.jpg';
import likeIcon from '../assets/images/like.png';
import MenuAppBar from "./MenuAppBar";
import { getSession } from "./../util/storage/auth";
import { like, dislike, getFavorites } from "./../util/storage/places";

class ListPlaces extends React.Component {

    constructor() {
        super();
        this.likePlace = this.likePlace.bind(this);
        this.dislikePlace = this.dislikePlace.bind(this);
    }

    likePlace(p) {
        like(p);
        this.render();
    }

    dislikePlace(p) {
        dislike(p);
        this.render();
    }

    render() {
        var session = getSession();
        if (!session) {
            window.location.href = "http://" + window.location.host + "/";
            return (null);
        }

        const places = getFavorites();

        return (
            <div>
                <MenuAppBar />
                <div className="favorites-places-content" style={{ marginTop: "80px" }}>
                    {
                        places.map((p, key) =>
                            <div key={key} className="place-card">
                                <div className="place-info">
                                    {
                                        !p.isLiked ? <img className="like-icon" src={dislikeIcon} onClick={() => { this.likePlace(p) }} /> :
                                            <img className="like-icon" src={likeIcon} onClick={() => { this.dislikePlace(p) }} />
                                    }
                                    <h3 className="place-name label" title={p.name}>{p.name}</h3>
                                    <div className="place-vicinity" title={p.vicinity}>
                                        <span>{strings.address}</span>
                                        {p.vicinity}
                                    </div>
                                    {
                                        p.rating ? <div className="place-rating label" title={p.rating}>
                                            <span>{strings.popular_rating}</span>
                                            {p.rating}
                                        </div> : null
                                    }
                                    <div className="place-type label" title={p.tags}>{p.tags}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ListPlaces;
