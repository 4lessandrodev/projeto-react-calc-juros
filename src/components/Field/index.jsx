import 'materialize-css';
import {TextInput} from 'react-materialize'

export function Field (props) {
 const { type, label, max, min, value, id, handleChange } = props;
 return (
  <>
  <TextInput
   type={type} label={label}
       min={min} max={max}
       value={value} id={id}
    onChange={handleChange}
   />
   </>
 )
};