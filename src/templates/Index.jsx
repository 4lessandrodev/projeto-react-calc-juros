import React, { useState } from 'react';
import { Title } from '../components/Title/Index';
import { Field } from '../components/Field/index';
import { calculate } from '../domain/calculator';
import { CardsCollection } from '../components/Card/CardsCollection';


export function Template(props) {
  
  const [rendimentos, definirRendimentos] = useState([]);
  const [taxa, definirTaxa] = useState('');
  const [capitalInicial, definirCapitalInicial] = useState('');
  const [periodo, definirPeriodo] = useState('');
  
  const handleChange = async () => {
    const results = await calculate(
      parseFloat(capitalInicial),
      parseFloat(taxa),
      parseFloat(periodo))
      definirRendimentos(results);  
      console.table(results)
    }
    
    
    const handleTaxa = ({ target }) => {
      definirTaxa(target.value);
      handleChange();
    }
    
    const handleCapital = ({ target }) => {
      definirCapitalInicial(target.value);
      handleChange();
    }
    
    const handlePeriodo = ({ target }) => {
      definirPeriodo(target.value);
      handleChange();
    }
    
    
    
    return (
      <>
      <div className="container">
      <Title title="Juros Compostos"></Title>
      <Field type="number" label="Capital Inicial" min={100} max={90000} id="capital"
      onChange={handleCapital} value={capitalInicial} />
      <Field type="number" label="Taxa Mensal" min={1} max={12} id="taxa"
      onChange={handleTaxa} value={taxa} />
      <Field type="number" label="Período (Meses)" min={1} max={96} id="periodo"
      onChange={handlePeriodo} value={periodo} />
      <CardsCollection itens={rendimentos} />
      </div>
      </>
      )
    } 