import React from 'react'

const Dato = React.memo( ({value}) => {
    return (
      <p>
          {value}
      </p>
    )
  })

export default React.memo(Dato);