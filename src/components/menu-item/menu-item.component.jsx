import React from 'react'
// import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

// const Content = styled.div`
//   background-image: url("${(props) => props.img}");
// `

const MenuItem = ({ size, size1, img, title, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl} `)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={`${size1} content`}>
          <h1 className="title"> {title.toUpperCase()} </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
