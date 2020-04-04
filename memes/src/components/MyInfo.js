import React from 'react';

const MyInfo = () => {
  const info = {
    name: 'Harrison',
    about: 'Something about me',
    list: ['spokane', 'not spokane', 'less Spokane', 'something else']
  }
  return (
    <div className='content-wrapper'>
      <div className='myInfo'>
        <h1>{info.name}</h1>
        <p>{info.about}</p>
        <ul>A List of things: {info.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  )
}
export default MyInfo