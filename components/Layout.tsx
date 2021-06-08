import React, { ReactNode } from "react"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/css/destyle.css" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://jca-checkered.vercel.app/" />
      <meta
        property="og:title"
        content="市松模様で歌うときのマスク無し距離を計算するだけのやつ"
      />
      <meta
        property="og:image"
        content="https://jca-checkered.vercel.app/img/ogp.png"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root { font-size: 16px; }
            * { box-sizing: border-box; }
            body { background-color: #fafafa; }
          `,
        }}
      ></style>
    </Head>
    {children}
  </div>
)

export default Layout
