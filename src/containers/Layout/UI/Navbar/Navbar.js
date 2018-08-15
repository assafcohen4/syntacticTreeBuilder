import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'

export default class Navbar extends React.Component {
  render() {
    return (
      <AppBar title="My App">
        <Tabs fullWidth>
          <Tab label="Tree Builder" />
          <Tab label="My Trees" />
          <Tab label="Instructions" />
          <Tab label="Authentication" />
        </Tabs>
      </AppBar>
    )
  }
}