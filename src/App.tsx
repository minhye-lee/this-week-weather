/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import normalize from 'emotion-normalize'
import Routes from 'pages/Routes'
import React, { ReactNode } from 'react'

function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          ${normalize}
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 10px 0;
          }
          p {
            margin: 10px 0;
          }
        `}
      />
      <Layout>
        <Routes />
      </Layout>
    </React.Fragment>
  )
}

export default App

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        padding: 24px;
      `}
    >
      {children}
    </div>
  )
}
