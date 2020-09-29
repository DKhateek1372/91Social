import Api from './api_config';

export default { 

    //get spaceX data
    spaceXDataHistory: () =>  Api.get(`https://api.spacexdata.com/v3/history`),

    //get spaceX payloads
    spaceXDataPayloads: () =>  Api.get(`https://api.spacexdata.com/v3/payloads`),

};