import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import * as Text from '../components/Text/Text'
import Space from '../components/Space/Space';
import Breath from '../components/Breath/Breath';
import { Follow } from 'react-twitter-widgets';
import styles from './Home.module.css'
import logo from './logo.png'
import jennifer from './jennifer.png'

export default function Home() {
  const [step, setStep] = useState(3)

  const getContent = () => {
    switch(step) {
      case 0: return <Begin setStep={setStep} />
      case 1: return <Timer setStep={setStep} />
      case 2: return <Breath setStep={setStep} />
      case 3: return <Cta setStep={setStep} />
      default: <Begin setStep={setStep} />
    }
  }

  const logoImg = <Image src={logo} alt="breathflow logo" width={32} height={32} />

  return (
    <div className={styles.container}>
      {getContent()}
      <a href="https://getbreathflow.com" target="_blank" rel="noreferrer">
        <Text.Title className={styles.love} size={14} light white>Made with ❤️ by {logoImg}</Text.Title>
      </a>
    </div>
  )
}

function Begin({ setStep }) {
  return (
    <>
      <Text.H1 bold white>Hello, 👋</Text.H1>
      <Text.H1 bold white>Let's take a few deep breaths.</Text.H1>
      <br />
      <br />
      <Button onClick={() => setStep(1)} variant="light" size="lg">🍵 Click to Start</Button>
    </>
  )
}

function Timer({ setStep }) {
  const ref = React.useRef()
  const [time, setTime] = useState(3)
  useEffect(() => {
    setTimeout(() => {
      if (time === 1) return setStep(2)
      setTime(time - 1)
    }, 1000)
  }, [time])

  return (
    <Text.H2 ref={ref} white>{time}...</Text.H2>
  )
}

function Cta({ setStep }) {
  return (
    <Space direction="vertical" size="large" alignItems="center">
      <div className={styles.card}>
        <Text.H2 heavy>Well Done 🎉</Text.H2>
        <>lalala</>
        <Button onClick={() => setStep(0)} variant="light">Do this again</Button>
      </div>
      <Follow username="BreathFlowHQ" />
    </Space>
  )
}