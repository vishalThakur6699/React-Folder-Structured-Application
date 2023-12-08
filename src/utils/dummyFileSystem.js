const dummyFileSystem = {
  '1382b6993e9f270cb1c29833be3f5750': {
    type: '__folder__',
    name: 'root',
    path: '/',
    size: 0,
    date: '2019-04-07',
    creatorName: 'admin',
    parentPath: null,
    parentID: null,
    children: [
      '9b6739960c1ac83251046da2c718019b',
      '147d0ef33fe657ce53a83de6a630473d',
      'a55cfa9e1bf87138edd25c4b1553104d',
      '5f2b4d35489a8617e574060b19b7cad9',
      'ab7e413a3798155e37a9361140522e39',
      '891debd77d0bc40d30ff7d7e6c628e9f'
    ]
  },
  '9b6739960c1ac83251046da2c718019b': {
    type: '__folder__',
    name: 'apps',
    creatorName: 'vishal Thakir',
    size: 223,
    date: '2023-12-07',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/apps',
    children: []
  },
  '147d0ef33fe657ce53a83de6a630473d': {
    type: '__folder__',
    name: 'pictures',
    creatorName: 'vishal Thakur',
    size: 23,
    date: '2023-12-07',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/pictures',
    children: []
  },
  
};

const generatedummyFileSystem = () => {
  localStorage.setItem('fileSystem', JSON.stringify(dummyFileSystem));
  return dummyFileSystem;
};

export default generatedummyFileSystem;
