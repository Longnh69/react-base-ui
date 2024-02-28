import BaseParticles from './BaseParticles'

export default function BaseBallonPariticles() {
  return (
    <BaseParticles
      options={{
        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
            },
          },
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 180,
              sync: true,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 10, max: 50 },
            animation: {
              enable: true,
              speed: 5,
              sync: true,
              startValue: 'random',
              destroy: 'max',
            },
          },
          move: {
            enable: true,
            speed: { min: 5, max: 10 },
            direction: 'none',
            outModes: 'destroy',
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'trail',
            },
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 1,
            },
          },
        },
        background: {
          color: '#E8E8E8',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundMask: {
          enable: true,
          cover: {
            opacity: 1,
            color: '#000000',
          },
        },
      }}
    />
  )
}
