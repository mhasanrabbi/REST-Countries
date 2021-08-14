import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/GlobalState';

const Countries = () => {
  const { loading, searchResults} = useGlobalContext();
  
  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      
      {searchResults.map((country) => {
        const {name, population, region, capital, flag, numericCode} = country
        return (
          <Row gutter = {[16,24]} key={numericCode}>
          <Link to={`/countries/${name}` }>
              <Col span={6}>
              <img src={flag} alt={name}/>
              <h3>{name}</h3>
              <h4>{population}</h4>
              <h4>{region}</h4>
              <h4>{capital}</h4>
              </Col>
          </Link>
        </Row>
        )
      })}
    </div>
  )
}

export default Countries;