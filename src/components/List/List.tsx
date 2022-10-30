/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import colors from 'constants/colors'
import React, { ReactNode } from 'react'

function List({ children }: { children: ReactNode }) {
  return (
    <ul
      data-testid='list'
      css={css`
        padding: 15px 15px;
        display: flex;
        border: 0 solid transparent;
        background-color: ${colors.grey300};
        color: ${colors.grey900};
        font-size: 17px;
        font-weight: 600;
        flex-direction: column;
        > li:not(:first-of-type) {
          margin-top: 15px;
        }
      `}
    >
      {children}
    </ul>
  )
}

interface ListRowProps {
  left: ReactNode
  right: ReactNode
}

function Row({ left, right }: ListRowProps) {
  return (
    <li
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {left}
      {right}
    </li>
  )
}

List.Row = Row

export default List
