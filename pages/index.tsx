import { Button, Link, TextField, Typography } from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const title = "市松模様で歌うときのマスク無し距離を計算するやつ"

const Main = styled.main`
  padding: 0.5rem;
`

const CanvasWrapper = styled.div`
  padding-bottom: 1rem;
`

const FormWrapper = styled.div`
  width: 170px;
  padding: 1rem 0 0 70px;
`

const TweetButtonWrapper = styled.div`
  text-align: center;
`

const Paragraph = styled.p`
  padding-bottom: 1rem;
  font-size: 0.9rem;
`

export default function () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>(null)
  const [distanceMeter, setDistanceMeter] = useState("1.0")

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }
    const canvas = canvasRef.current
    setContext(canvas.getContext("2d"))
  })

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }
    const canvas = canvasRef.current
    if (context === null) {
      return
    }
    const theContext = context

    theContext.clearRect(0, 0, canvas.width, canvas.height)

    theContext.beginPath()
    theContext.arc(50, 50, 10, 0, 2 * Math.PI)
    theContext.stroke()

    theContext.beginPath()
    theContext.arc(200, 50, 10, 0, 2 * Math.PI)
    theContext.stroke()

    theContext.beginPath()
    theContext.arc(125, 200, 10, 0, 2 * Math.PI)
    theContext.stroke()

    theContext.beginPath()
    theContext.moveTo(50, 50)
    theContext.lineTo(200, 50)
    theContext.stroke()

    theContext.beginPath()
    theContext.moveTo(50, 50)
    theContext.lineTo(125, 200)
    theContext.stroke()

    theContext.beginPath()
    theContext.moveTo(125, 50)
    theContext.lineTo(125, 200)
    theContext.moveTo(125, 50)
    theContext.lineTo(133, 70)
    theContext.moveTo(125, 200)
    theContext.lineTo(133, 180)
    theContext.stroke()

    const halfDistance = isNaN(Number(distanceMeter))
      ? 0.5
      : Number(distanceMeter) / 2
    const diagonal =
      halfDistance ** 2 > 1.5 ** 2
        ? 0
        : Math.round(100 * Math.sqrt(1.5 ** 2 - halfDistance ** 2)) / 100

    theContext.font = "12px Robot"
    theContext.fillText(`${distanceMeter}m`, 115, 40)
    theContext.fillText("1.5m", 50, 130)
    theContext.fillText(`${diagonal}m`, 130, 130)
  })

  return (
    <Layout title={title}>
      <Main>
        <Typography component="h1" variant="h4">
          #{title}
        </Typography>

        <FormWrapper>
          <TextField
            label="横の距離[m]"
            value={distanceMeter}
            onChange={(evt) => setDistanceMeter(evt.currentTarget.value)}
          ></TextField>
        </FormWrapper>

        <CanvasWrapper>
          <canvas ref={canvasRef} width="250" height="250" />
        </CanvasWrapper>

        <Paragraph>
          参考：
          <Link href="https://jcanet.or.jp/news/COVID-19.htm">
            合唱活動における新型コロナウイルス感染症拡大防止のガイドライン 第 3
            版
          </Link>
        </Paragraph>

        <Paragraph>
          PR：
          <Link href="https://music.羽川翼.com/">
            浪白公園音樂團は合唱奏者を募集しています。
          </Link>
        </Paragraph>

        <TweetButtonWrapper>
          <Link href="https://twitter.com/intent/tweet?text=test">
            <Button variant="contained" color="primary">
              ツイートする
            </Button>
          </Link>
        </TweetButtonWrapper>
      </Main>
    </Layout>
  )
}
