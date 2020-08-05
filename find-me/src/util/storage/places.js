const likedPlacesKey = "LikedPlaces";

function like(place) {
    var likedPlaces = getFavorites();

    if (!likedPlaces) {
        likedPlaces = [];
    }

    likedPlaces.push(place);
    localStorage.setItem(likedPlacesKey, JSON.stringify(likedPlaces));
}

function dislike(place) {
    var likedPlaces = getFavorites();
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
    var likedPlaces = getFavorites();
    if (!likedPlaces) {
        return false;
    }
    var place = likedPlaces.find(x => x.name === place.name);
    return (place != null);
}

function getFavorites() {
    return JSON.parse(localStorage.getItem(likedPlacesKey));
}

export { like, dislike, getFavorites, checkIsLike };