import React from 'react';

const MyInfo = () => {
  const info = {
    name: 'Harrison',
    about: 'Something about me',
    list: ['spokane', 'notspokane', 'lessSpokane']
  }
  return (
    <div className='myInfo'>
    <h1>{info.name}</h1>
    <p>{info.about}</p>
    {info.list.map((item, i) => <ul key={i}>{item}</ul>)}
    </div>
  )
}
export default MyInfo