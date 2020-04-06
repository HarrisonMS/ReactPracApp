import React from 'react';

const DateMesseage = ({name}) => {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 28
  }
  if (hours < 12) {
    timeOfDay = 'morning'
    styles.color = 'green'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
    styles.color = 'red'
  } else {
    timeOfDay = 'night'
    styles.color = 'blue'
  }
  return (
  <h2 style={styles}>Good {timeOfDay} {name}</h2>
  )
}
export default DateMesseage