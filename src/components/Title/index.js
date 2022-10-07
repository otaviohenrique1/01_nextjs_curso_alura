import React from 'react'

export default function Title({ children, as/* , ...props */ }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag /* {...props} */>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  )
}
