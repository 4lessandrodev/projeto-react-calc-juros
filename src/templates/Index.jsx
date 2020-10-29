import React, { useState, useEffect } from 'react';
import { Title } from '../components/Title/Index';
import { Field } from '../components/Field/index';
import { calculate } from '../domain/calculator';
import { CardsCollection } from '../components/Card/CardsCollection';


export function Template() {
  
  const [rendimentos, definirRendimentos] = useState([]);
  const [taxa, definirTaxa] = useState('');
  const [capitalInicial, definirCapitalInicial] = useState('');
  const [periodo, definirPeriodo] = useState('');
  
  
  useEffect(
    () => {
    const calculateResult = () =>
      calculate(
      parseFloat(capitalInicial),
      parseFloat(taxa),
      parseFloat(periodo)
     )
        const result = calculateResult();
        definirRendimentos(Object.assign([], result));
      }, [taxa, capitalInicial, periodo]
  )
    
    
    
    return (
      <>
      <div className="container">
        <Title title="Juros Compostos"></Title>
        <Field type="number" label="Capital Inicial" min={100} max={90000} id="capital"
          onChange={(event)=> definirCapitalInicial(event.target.value)} value={capitalInicial} />
        <Field type="number" label="Taxa Mensal" min={1} max={12} id="taxa"
          onChange={(event)=> definirTaxa(event.target.value)} value={taxa} />
        <Field type="number" label="Período (Meses)" min={1} max={96} id="periodo"
          onChange={(event)=> definirPeriodo(event.target.value)} value={periodo} />
          <div className="row">
            {rendimentos.length > 0 ? <CardsCollection itens={rendimentos} />:''}
          </div>
      </div>
      </>
      )
    } 