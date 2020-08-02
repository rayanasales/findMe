import React from 'react';
import './../assets/css/ListPlaces.css';
import Strings from './../util/strings';

class ListPlaces extends React.Component {

  render() {
    const { places } = this.props;

    return (
      <div className="places-content">
        {
          places.map((p, key) =>
            <div key={key} className="place-card">
              <div className="place-info">
                <h3 className="place-name label" title={p.name}>{p.name}</h3>
                <div className="place-vicinity" title={p.vicinity}>
                  <span>{Strings.address}</span>
                  {p.vicinity}
                </div>
                {
                  p.rating ? <div className="place-rating label" title={p.rating}>
                    <span>{Strings.popular_rating}</span>
                    {p.rating}
                  </div> : null
                }
                <div className="place-type label" title={p.tags}>{p.tags}</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListPlaces;
