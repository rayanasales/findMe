import React from 'react';
import './../assets/css/Style.css';
import strings from '../util/strings';
import dislikeIcon from '../assets/images/dislike.jpg';
import likeIcon from '../assets/images/like.png';
import Empty from '../util/empty';
import MenuAppBar from "./MenuAppBar";
import { getSession } from "./../util/storage/auth";
import { like, dislike, getFavorites } from "./../util/storage/places";
import GoogleMap from "./GoogleMap";

class ListPlaces extends React.Component {

    constructor() {
        super();
        this.state = {
            places: (getFavorites() || [])
        };
        this.likePlace = this.likePlace.bind(this);
        this.dislikePlace = this.dislikePlace.bind(this);
        this.refreshState = this.refreshState.bind(this);
    }

    likePlace(p) {
        p.isLiked = true;
        like(p);
        this.refreshState();
    }

    dislikePlace(p) {
        p.isLiked = false;
        dislike(p);
        this.refreshState();
    }

    refreshState() {
        this.setState({
            places: getFavorites()
        });
    }

    render() {
        const { places } = this.state;

        var session = getSession();
        if (!session) {
            window.location.href = "http://" + window.location.host + "/";
            return (null);
        }

        return (
            <div className="app">
                <MenuAppBar />
                <div className="content">
                    {places.length === 0 ? <Empty message={strings.empty_favs_places} /> :
                        <div className="places-content">
                            {
                                places.map((p, key) =>
                                    <div key={key} className="place-card">
                                        <div className="place-info">
                                            {
                                                !p.isLiked ? <img className="like-icon" alt="icon" src={dislikeIcon} onClick={() => { this.likePlace(p) }} /> :
                                                    <img className="like-icon" alt="icon" src={likeIcon} onClick={() => { this.dislikePlace(p) }} />
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
                    }
                    <GoogleMap markers={places} />
                </div>
            </div>
        );
    }
}

export default ListPlaces;
