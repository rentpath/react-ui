import { Grid, Row, Col } from "react-ui-core/src"
import React from "react"
import cn from "classnames"
import { ResponsiveTheme as theme } from "../theme"

// xs = phone
// sm = tablet
// md = desktop
// lg = large monitors
const result = (
  <div className={theme.result}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in feugiat
    dolor. Nam in aliquam leo. Nullam id placerat sem. Aliquam purus erat,
    facilisis iaculis ultricies vel, mattis in enim
  </div>
)

const adUnit = <div className={theme.adUnit}>some content</div>

export default (
  <div>
    <h1>Responsive Layout Example</h1>
    <Grid fluid>
      <Row className={theme.row}>
        <Col className={theme.col} small={10} large={2}>
          LOGO
        </Col>
        <Col className={theme.col} small={0} large={10}>
          <ul className={theme.menu}>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
            <li>link 4</li>
          </ul>
        </Col>

        <Col className={theme.col} small={2} large={0}>
          <img
            className={theme.hamburger}
            src="https://image.flaticon.com/icons/png/128/56/56763.png"
          />
        </Col>
      </Row>

      <Row className={theme.row}>
        <Col className={theme.col} small={0} large={12}>
          this col display on desktop and tablet only
        </Col>

        <Col className={theme.col} small={12} large={0}>
          this col display on phones only
        </Col>
      </Row>

      <Row className={theme.row}>
        <Col className={theme.col} small={12} large={8}>
          {result}
          {result}
          {result}
          {result}
          {result}
        </Col>

      <Col className={theme.col} small={12} large={4}>
          {adUnit}
          {adUnit}
        </Col>
      </Row>
    </Grid>
  </div>
)
