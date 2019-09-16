import React from 'react'
import style from './Progress.module.css'

const Progress = ({ color, value }) => (
  <progress
    className={`${style.progress} ${color}`}
    max='100'
    value={value}
  />
)

export default Progress
