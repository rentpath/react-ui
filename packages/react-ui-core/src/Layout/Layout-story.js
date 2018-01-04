import React from 'react'
import cn from 'classnames'
import {
  localizeCss as configureStylesForGrid,
  Grid,
  Row,
  Col,
} from '../Layout'

import styles from 'react-ui-core/node_modules/flexboxgrid/dist/flexboxgrid.css'
import coreStory from '../.storybook/coreStory'
import gridTheme from '../.storybook/theme/Grid.css'
// import styles form 'react-flexbox-grid/dist/flexboxgrid.css'
import responsiveTheme from '../.storybook/theme/Responsive.css'

configureStylesForGrid(styles)

// xs = phone
// sm = tablet
// md = desktop
// lg = large monitors

const result = (
        <div className={responsiveTheme.result}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in feugiat
    dolor. Nam in aliquam leo. Nullam id placerat sem. Aliquam purus erat,
    facilisis iaculis ultricies vel, mattis in enim
    </div>
)

const adUnit = <div className={responsiveTheme.adUnit}>some content</div>

coreStory('Layout', module)
  .add('Grid', () => (
    <Grid fluid>
      <h2>Grid</h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://raw.githubusercontent.com/kristoferjoseph/flexboxgrid/master/dist/flexboxgrid.css"
      >
        Flexbox Grid CSS
      </a> <br />

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/roylee0704/react-flexbox-grid"
      >
        React Flexbox-Grid
      </a>
      <code className={gridTheme.code}>
        xs = less than 768px (phones) <br />
        sm = min width of 768px (tablets portait and landscape, ipad) <br />
        md = min width of 1024px (laptops/desktops)<br />
        lg = min width of 1200px (large monitors) <br />
      </code>
      <h2>Center</h2>
      <Row className={gridTheme.row} center="xs">
        <Col className={gridTheme.col} xs={6} />
      </Row>
      <h2>Fixed Width Row</h2>
      <Row className={gridTheme.rowFixed}>
        <Col className={`${gridTheme.col}`} xs={6} />
        <Col className={`${gridTheme.col}`} xs={6} />
      </Row>
      <h2>Offsets</h2>
      <Row className={gridTheme.row}>
        <Col className={gridTheme.col} xsOffset={11} xs={1} />
        <Col className={gridTheme.col} xsOffset={10} xs={2} />
        <Col className={gridTheme.col} xsOffset={9} xs={3} />
        <Col className={gridTheme.col} xsOffset={8} xs={4} />
        <Col className={gridTheme.col} xsOffset={7} xs={5} />
        <Col className={gridTheme.col} xsOffset={6} xs={6} />
        <Col className={gridTheme.col} xsOffset={5} xs={7} />
        <Col className={gridTheme.col} xsOffset={4} xs={8} />
        <Col className={gridTheme.col} xsOffset={3} xs={9} />
        <Col className={gridTheme.col} xsOffset={2} xs={10} />
        <Col className={gridTheme.col} xsOffset={1} xs={11} />
        <Col className={gridTheme.col} xs={12} />
      </Row>

      <h2>Auto Width</h2>
      <Row className={gridTheme.row}>
        <Col className={gridTheme.col} xs />
        <Col className={gridTheme.col} xs />
      </Row>
      <Row className={gridTheme.row}>
        <Col className={gridTheme.col} xs />
        <Col className={gridTheme.col} xs />
        <Col className={gridTheme.col} xs />
      </Row>

      <h2>Alignment / Distribution</h2>

      <Row className={gridTheme.row} start="xs">
        <Col className={gridTheme.col} xs={6} />
      </Row>

      <Row className={gridTheme.row} center="xs">
        <Col className={gridTheme.col} xs={6} />
      </Row>

      <Row className={gridTheme.row} end="xs">
        <Col className={gridTheme.col} xs={6} />
      </Row>

      {/* vertical align */}
      <Row className={gridTheme.row} top="xs">
        <Col className={cn(gridTheme.col, gridTheme.tall)} xs={6} />
        <Col className={gridTheme.col} xs={6} />
      </Row>
      <Row className={gridTheme.row} middle="xs">
        <Col className={cn(gridTheme.col, gridTheme.tall)} xs={6} />
        <Col className={gridTheme.col} xs={6} />
      </Row>
      <Row className={gridTheme.row} bottom="xs">
        <Col className={cn(gridTheme.col, gridTheme.tall)} xs={6} />
        <Col className={gridTheme.col} xs={6} />
      </Row>
      {/* vertical align */}

      <Row className={gridTheme.row} around="xs">
        <Col className={gridTheme.col} xs={2} />
        <Col className={gridTheme.col} xs={2} />
        <Col className={gridTheme.col} xs={2} />
      </Row>

      <Row className={gridTheme.row} between="xs">
        <Col className={gridTheme.col} xs={2} />
        <Col className={gridTheme.col} xs={2} />
        <Col className={gridTheme.col} xs={2} />
      </Row>
    </Grid>
  ))
  .add('ResponsiveTemplate', () => (
    <div>
      <h1>Responsive Layout Example</h1>
      <Grid fluid>
        <Row className={responsiveTheme.row}>
          <Col className={responsiveTheme.col} xs={10} sm={2}>
            LOGO
          </Col>
          <Col className={responsiveTheme.col} xs={0} sm={10}>
            <ul className={responsiveTheme.menu}>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
              <li>link 4</li>
            </ul>
          </Col>

          <Col className={responsiveTheme.col} xs={2} sm={0}>
            <img
              className={responsiveTheme.hamburger}
              alt="icon"
              src="https://image.flaticon.com/icons/png/128/56/56763.png"
            />
          </Col>
        </Row>

        <Row className={responsiveTheme.row}>
          <Col className={responsiveTheme.col} xs={0} sm={12}>
            this col display on desktop and tablet only
          </Col>

          <Col className={responsiveTheme.col} xs={12} sm={0}>
            this col display on phones only
          </Col>
        </Row>

        <Row className={responsiveTheme.row}>
          <Col className={responsiveTheme.col} xs={12} sm={8}>
            {result}
            {result}
            {result}
            {result}
            {result}
          </Col>

          <Col className={responsiveTheme.col} xs={12} sm={4}>
            {adUnit}
            {adUnit}
          </Col>
        </Row>
      </Grid>
    </div>
  ))
