const likedPlacesKey = "LikedPlaces";

function like(place) {
    var likedPlaces = JSON.parse(localStorage.getItem(likedPlacesKey));

    if (!likedPlaces) {
        likedPlaces = [];
    }

    likedPlaces.push(place);
    localStorage.setItem(likedPlacesKey, JSON.stringify(likedPlaces));
}

function dislike(place) {
    var likedPlaces = JSON.parse(localStorage.getItem(likedPlacesKey));
    var index = 0;

    for (var i = 0; i < likedPlaces.length; i++) {
        if (likedPlaces[i].name === place.name) {
            index = i;
        }
    }

    likedPlaces.splice(index, 1);
    localStorage.setItem(likedPlacesKey, JSON.stringify(likedPlaces));
}

function checkIsLike(place) {
    var likedPlaces = JSON.parse(localStorage.getItem(likedPlacesKey));
    var place = likedPlaces.find(x => x.name === place.name);
    return (place != null);
}

export { like, dislike, checkIsLike };