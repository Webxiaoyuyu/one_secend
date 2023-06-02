import React, { useState, useEffect } from 'react'
import { getSongListType, getTopPlaylist } from '@/service'
import { useRequest } from 'ahooks'
// import type { ISongListTypeResponseData } from '@/service'

export default function Home() {
  const [songListType, setSongListType] = useState<
    Awaited<ReturnType<typeof getSongListType>>['data']['sub']
  >([])
  useEffect(() => {
    getSongListType()
      .then((res) => {
        setSongListType(res.data.sub)
      })
      .catch(() => {})
  }, [])
  const { data: topPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }))
  return (
    <div>
      <ul>
        {topPlaylist?.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <ul>
        {songListType.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
