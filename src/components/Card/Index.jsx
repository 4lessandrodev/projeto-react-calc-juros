import React from 'react';
import 'materialize-css'

export function Card(props) {
  const {taxa, rendimentos, acumulado, mes } = props;
  return (
    <div className="row" key={mes}>
      <div className="col s3 m3">
        <div className="card">
          <div className="card-content">
            <h2>{mes}</h2>
            <p><strong>{acumulado}</strong></p>
            <p>{rendimentos}</p>
            <p>{taxa}</p>
          </div>
          <div className="card-action">
        </div>
       </div>
     </div>
    </div>
    )
  }