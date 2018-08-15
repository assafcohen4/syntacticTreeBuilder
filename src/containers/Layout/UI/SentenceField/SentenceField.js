import React, { Component } from 'react'
import {TextField} from '@material-ui/core'
export default class SentenceField extends Component {
  render() {
    return (
         <TextField
          id="uncontrolled"
          placeholder="[[Enter text] here] and [[Use brackets] [to [denote constituents]]]"
          margin="normal"
          fullWidth
        />
    )
  }
}
