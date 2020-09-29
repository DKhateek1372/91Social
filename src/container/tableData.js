import React from 'react';
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';
import '../styles/index.css';

const renderCell = (object, type, key, nestedKey) => {
    const imageUrl = '';
    const keyValue = key.split('-');
    const key0 = keyValue[0];
    const key1= keyValue[1];
    const ObjKey = nestedKey !== null ? object[key0][nestedKey] : object[key0];
    const image = ObjKey === null && type === 'ImageCell' ? imageUrl : ObjKey;
    const text = ObjKey === null && type === 'textCell' ? '-' : ObjKey;
    const linkCell = ObjKey === null && type === 'linkCell' ? '-' : ObjKey;
    const arrayVal = ObjKey === null && type === 'arrayCell' ? '-' : ObjKey;
    const  briefData = key1 === null && type === 'briefData' ? '-' : object[key1];
    switch (type) {
        case 'ImageCell':
            return (<img src={image} alt="" width="100px" height="75px" />);
        case 'linkCell':
            return (<a className="cursor-pointer" href={linkCell ? linkCell : '#'} target="__blank">{linkCell}</a>);
        case 'DateCell': return (<p>{text ? text.toLocaleString() : '-'}</p>);
        case 'briefDataCell' : return (<Tooltip title={briefData}> <p className="cursor-pointer">{text}</p>  </Tooltip>);
        case 'arrayCell':
            return (
                Array.isArray(arrayVal) &&
                    arrayVal.length > 0 ?
                    arrayVal.map(item => <p>{item}</p>) :
                    '-'
            );
        default:
            return (<p>{text}</p> );
    }
};

export const columns = [
    {
        title: 'Flight Number',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'textCell', 'flight_number', null),
    },
    {
        title: 'Title',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'textCell', 'title', null),
    },
    {
        title: 'Details',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'briefDataCell', 'detailsBrief-details', null),
    },
    // {
    //     title: 'Image',
    //     width: '25%',
    //     className: 'isoImageCell',
    //     render: object => renderCell(object, 'ImageCell', 'image_uri'),
    // },
    {
        title: 'Article',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'linkCell', 'links', 'article'),
    },
    {
        title: 'Wikipedia',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'linkCell', 'links', 'wikipedia'),
    },
    {
        title: 'Date Of Creation',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'DateCell', 'createdAt', null),
    }
];
