import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import * as Text from '../components/Text/Text'
import Space from '../components/Space/Space';
import Breath from '../components/Breath/Breath';
import { Follow } from 'react-twitter-widgets';
import { init, track }  from '@amplitude/analytics-browser';
import styles from './Home.module.css'
import logo from './logo.png'
import jennifer from './jennifer.png'

export default function Home() {
  const [step, setStepUninstrumented] = useState(0)
  const setStep = (s) => {
    track(`setStep: ${s}`)
    setStepUninstrumented(s)
  }

  useEffect(() => {
    init('447ebb451644f55d70a6689816ce6986')
    track(`Page Load`)
  }, [])

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
        <Space style={{ width: '100%' }} direction="vertical" size="large" alignItems="center">
          <Text.H4>Nice! 🎉</Text.H4>
          <a onClick={() => track('Visit Meetup.com')} href="https://www.meetup.com/the-breathwork-club/" className={styles.ad}>
            <Text.H3 heavy>Want to Go Deeper?</Text.H3>
            <div></div>
            <div>
              <Text.H4 heavy>The Breathwork Club</Text.H4> 
              <Text.Title>is hosting free Zoom guided breathwork</Text.Title>
              <Text.Title>{'-->'}</Text.Title>
            </div>
            <Image fill style={{objectFit: "contain", top: -35}} src={jennifer} alt="more breathwork" />
          </a>
          <Button onClick={() => setStep(0)} variant="light">Do this again</Button>
        </Space>
      </div>
      <Follow username="BreathFlowHQ" />
    </Space>
  )
}