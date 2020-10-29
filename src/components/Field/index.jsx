import React from 'react';
import 'materialize-css';
import {TextInput} from 'react-materialize'

export function Field (props) {
 const { type, label, max, min, value, id, onChange } = props;
 return (
  <>
  <TextInput key={id}
   type={type} label={label}
       min={min} max={max}
       value={value} id={id}
       onKeyUp={onChange}
       onChange={onChange}
   />
   </>
 )
};