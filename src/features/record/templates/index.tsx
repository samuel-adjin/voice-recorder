import React from 'react'
import RecordVoice from '../components/play-record'

const RecordTemplate = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-30rem)]">
      <RecordVoice />
    </div>
  )
}

export default RecordTemplate