import { Card } from '../components/Card/Index'
import { Title } from '../components/Title/Index'
import { Field} from '../components/Field/index'

export function Template(props) {
 return (
  <>
   <div className="container">
    <Title title="Juros Compostos"></Title>
    <Field type="number" label="Capital Inicial" min={100} max={90000} id="capital"/>
    <Field type="number" label="Taxa Mensal" min={100} max={90000} id="taxa"/>
    <Field type="number" label="Período (Meses)" min={100} max={90000} id="periodo"/>
     <Card></Card>
    </div>
   </>
 )
}