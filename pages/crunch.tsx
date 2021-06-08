import React from 'react'
import { BtnLogo, BtnSeries, CabeçalhoComponent } from '../components/logo'
import { useRouter } from 'next/router'
// import Image from 'next/image'

export default function Crunch () {
  const router = useRouter()
  return (
    <div>
    <CabeçalhoComponent>
      <BtnLogo onClick={() => {
        router.push('/crunch')
      }}>Crunchyroll
      </BtnLogo>
      <BtnSeries onClick={() => {
        router.push('/series')
      }}>
        Séries
      </BtnSeries>
    </CabeçalhoComponent>
    {/* <Image
    src="/images/rengoku.gif"
    alt="Gif Rengoku"
    width={560}
    height={320}>
    </Image> */}

    </div>
  )
}
