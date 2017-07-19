import styles from "react-ui-core/node_modules/flexboxgrid/dist/flexboxgrid.css"
import {
  localizeCss as configureStylesForGrid,
  Grid,
  Row,
  Col
} from "react-ui-core/src"
import React from "react"
import cn from "classnames"
import { GridTheme as theme } from "../theme"

configureStylesForGrid(styles)

export default (
  <Grid fluid>
    <h2>Grid</h2>
    <a
      target="_blank"
      href="https://raw.githubusercontent.com/kristoferjoseph/flexboxgrid/master/dist/flexboxgrid.css"
    >
      Flexbox Grid CSS
    </a> <br />

    <a
      target="_blank"
      href="https://github.com/roylee0704/react-flexbox-grid"
    >
      React Flexbox-Grid
    </a>
    <code className={theme.code}>
      xs = less than 768px (phones) <br />
      sm = min width of 768px (tablets portait and landscape, ipad) <br />
      md = min width of 1024px (laptops/desktops)<br />
      lg = min width of 1200px (large monitors) <br />
    </code>
    <h2>Center</h2>
    <Row className={theme.row} center="xs">
      <Col className={theme.col} xs={6} />
    </Row>
    <h2>Fixed Width Row</h2>
    <Row className={theme.rowFixed}>
      <Col className={`${theme.col}`} xs={6} />
      <Col className={`${theme.col}`} xs={6} />
    </Row>
    <h2>Offsets</h2>
    <Row className={theme.row}>
      <Col className={theme.col} xsOffset={11} xs={1} />
      <Col className={theme.col} xsOffset={10} xs={2} />
      <Col className={theme.col} xsOffset={9} xs={3} />
      <Col className={theme.col} xsOffset={8} xs={4} />
      <Col className={theme.col} xsOffset={7} xs={5} />
      <Col className={theme.col} xsOffset={6} xs={6} />
      <Col className={theme.col} xsOffset={5} xs={7} />
      <Col className={theme.col} xsOffset={4} xs={8} />
      <Col className={theme.col} xsOffset={3} xs={9} />
      <Col className={theme.col} xsOffset={2} xs={10} />
      <Col className={theme.col} xsOffset={1} xs={11} />
      <Col className={theme.col} xs={12} />
    </Row>

    <h2>Auto Width</h2>
    <Row className={theme.row}>
      <Col className={theme.col} xs />
      <Col className={theme.col} xs />
    </Row>
    <Row className={theme.row}>
      <Col className={theme.col} xs />
      <Col className={theme.col} xs />
      <Col className={theme.col} xs />
    </Row>

    <h2>Alignment / Distribution</h2>

    <Row className={theme.row} start="xs">
      <Col className={theme.col} xs={6} />
    </Row>

    <Row className={theme.row} center="xs">
      <Col className={theme.col} xs={6} />
    </Row>

    <Row className={theme.row} end="xs">
      <Col className={theme.col} xs={6} />
    </Row>

    {/* vertical align */}
    <Row className={theme.row} top="xs">
      <Col className={cn(theme.col, theme.tall)} xs={6} />
      <Col className={theme.col} xs={6} />
    </Row>
    <Row className={theme.row} middle="xs">
      <Col className={cn(theme.col, theme.tall)} xs={6} />
      <Col className={theme.col} xs={6} />
    </Row>
    <Row className={theme.row} bottom="xs">
      <Col className={cn(theme.col, theme.tall)} xs={6} />
      <Col className={theme.col} xs={6} />
    </Row>
    {/* vertical align */}

    <Row className={theme.row} around="xs">
      <Col className={theme.col} xs={2} />
      <Col className={theme.col} xs={2} />
      <Col className={theme.col} xs={2} />
    </Row>

    <Row className={theme.row} between="xs">
      <Col className={theme.col} xs={2} />
      <Col className={theme.col} xs={2} />
      <Col className={theme.col} xs={2} />
    </Row>
  </Grid>
)
