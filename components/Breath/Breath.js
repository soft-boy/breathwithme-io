import { useEffect, useRef } from 'react'
import * as Text from '../Text/Text'
import styles from './Breath.module.css'


export default function Breath(props) {
  const containerRef = useRef()
  const canvasRef = useRef()
  const instructionRef = useRef()
  const instructionRef2 = useRef()
  const instructionRef3 = useRef()

  useEffect(() => {
    let start;
    let cycle = 0; // 0-7 (8 cycles)
    let phase = 0; // 0-2 (inhale, hold, exhale)

    const phaseDurations = { // 4-7-8 seconds
      0: 4000,
      1: 7000,
      2: 8000,
    }

    function step(timestamp) {
      if (start === undefined) start = timestamp;

      const elapsed = timestamp - start;
  
      let percent;
      switch (phase) {
        case 0: percent = elapsed / phaseDurations[phase]; break;
        case 1: percent = 1; break;
        case 2: percent = 1 - (elapsed / phaseDurations[phase]); break;
      }
      percent = Math.max(0, percent)

      const pos = percent * 180 // angle from bottom
      const startAngle = (90-pos) * Math.PI/180
      const endAngle = (90+pos) * Math.PI/180
      const canvas = canvasRef.current
      const size = canvas.width
      const ctx = canvasRef.current.getContext('2d')

      ctx.clearRect(0, 0, size, size)
      ctx.beginPath();
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'white';
      ctx.arc(size/2, size/2, 0.9*size/2, startAngle, endAngle);
      ctx.stroke();

      if (phase === 1) instructionRef2.current.innerHTML = Math.ceil((phaseDurations[phase]-elapsed)/1000)

      // advance phase
      if (elapsed > phaseDurations[phase]) {
        start = timestamp

        if (phase === 2) {
          if (cycle === 7) {
            return props.setStep(3) // done
          }
          else {
            cycle = cycle + 1
            phase = 0
            instructionRef3.current.innerHTML = `Round ${cycle+1} of 8`
          }
        }
        else {
          phase = phase + 1
        }

        let instruction;
        switch (phase) {
          case 0: instruction = "Inhale"; break;
          case 1: instruction = "Hold"; break;
          case 2: instruction = "Exhale"; break;
        }

        instructionRef.current.innerHTML = instruction
        instructionRef2.current.innerHTML = null
      }

      window.requestAnimationFrame(step);
    }

    const size = containerRef.current.clientWidth
    canvasRef.current.width = size
    canvasRef.current.height = size
    window.requestAnimationFrame(step);
  }, [containerRef.current?.clientWidth])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.circle} />
      <canvas ref={canvasRef} className={styles.center} />
      <Text.Title ref={instructionRef3} className={styles.upper} size={16} white>Round 1 of 8</Text.Title>
      <Text.H2 ref={instructionRef} className={styles.center} size={32} bold white>Inhale</Text.H2>
      <Text.Title ref={instructionRef2} className={styles.lower} size={21} bold white></Text.Title>
    </div>
  )
}