import React from 'react'

const List = ({list, onRemove}) => {
    return(
      <ul>
      {
          list.map(item => {
            return<li key={item.id}> 
              {item.title} 
              <button onClick={() => onRemove(item.id)}>x</button>
              </li>

          })
      }
      </ul>
    )
}
export default List