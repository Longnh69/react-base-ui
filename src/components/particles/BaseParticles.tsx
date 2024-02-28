import Particles, { type IParticlesProps, initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadFull } from 'tsparticles'

interface BaseParticlesProps extends IParticlesProps {}

export default function BaseParticles(props: BaseParticlesProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return <>{init && <Particles id='tsparticles' {...props} />}</>
}
