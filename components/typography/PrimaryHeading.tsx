import React, { FC } from 'react'

type PrimaryHeadingProps = {
  children?: React.ReactNode
}

const PrimaryHeading: FC<PrimaryHeadingProps> = ({ children }) => {
  return <h2 className="text-3xl text-gray-800 font-bold">{children}</h2>
}

export default PrimaryHeading
