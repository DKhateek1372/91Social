/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { SpaceXActions } from '../store/home/actions';
import Searchbar from '../components/UiSearch/index';
import 'antd/dist/antd.css'
import '../styles/index.css';
import {columns} from './tableData';

const SpaceX = (props) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => {
    return state.SpaceX.loading;
  });

  const spaceXHistory = useSelector((state) => {
    return state.SpaceX.SpaceXHistory;
  });

  const spaceXPayload = useSelector((state) => {
    return state.SpaceX.SpaceXPayload;
  });


  const [state, setState] = React.useState([]);

  useEffect(() => {
    dispatch(SpaceXActions.fetchSpaceXHistoryRequest());
    dispatch(SpaceXActions.fetchSpaceXPayloadRequest());
    // eslint-disable-next-line
  }, []);

  const [search, setSearchState] = React.useState({
    searchText: "",
  });

  useEffect(() => {
    setState(
      spaceXHistory  
    )
  }, [spaceXHistory]);

  let { searchText } = search;

  const SearchHandler = (e) => {
    setSearchState(e.target.value);
    const text = e.target.value;
    const searchText = text.toLowerCase();
    const data =
      !!state &&
      Array.isArray(state) &&
      state.length > 0 &&
      state.filter(data =>
        data.title.toLowerCase().includes(searchText)
      );
    searchText !== '' ? setState(data) : setState(spaceXHistory);
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">91 Social Space data</h1>{' '}
            <hr className="border mtl-6"></hr>
            <Searchbar searchHandler={SearchHandler} searchBar={searchText} />
          </Col>
          <Col lg={12} md={12} className="p-4 inFlex parent margin">
           <Table columns={columns} dataSource={state} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

SpaceX.propTypes = {
  flight_numberL: PropTypes.number,
  titleL:PropTypes.string,
  image_uriL:PropTypes.string,
  detailsL:PropTypes.string,
  linksL:PropTypes.string,
  createdAtL:PropTypes.string
};

export default SpaceX;
