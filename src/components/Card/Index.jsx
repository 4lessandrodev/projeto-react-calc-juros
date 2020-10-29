import React from 'react';
import 'materialize-css';

export function Card(props) {
  const {taxa, rendimentos, acumulado, mes } = props;
  return (
      <div className="col s3 m3" key={mes}>
        <div className="card">
          <div className="card-content">
            <h4>{mes}</h4>
            <p><strong>{acumulado}</strong></p>
            <p>{rendimentos}</p>
          </div>
          <div className="card-action">
            <p>{taxa}</p>
        </div>
       </div>
     </div>
    )
  }