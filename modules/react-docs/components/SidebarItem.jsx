/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');

var { Tile } = require('react-material-design');

module.exports = class SidebarItem extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        sidebarItem: {
          fontSize: '14px',
          textDecoration: 'none',
          color: 'rgba(0, 0, 0, .57)',
          transition: 'all 200ms linear',
        },
        number: {
          fontSize: '14px',
          color: 'rgba(0, 0, 0, .27)',
          fontWeight: 'bold',
          paddingTop: '14px',
        },
        li: {
          paddingBottom: '8px',
        },
      },
      'bold': {
        sidebarItem: {
          fontWeight: 'bold',
          paddingTop: '14px',
          display: 'block',
        },
      },
      'active': {
        sidebarItem: {
          color: 'rgba(255,255,255,.87)',
        },
      },
    };
  }

  render() {
    return (
      <div is="li">
        <Tile condensed>
          <div is="number">{ this.props.sidebarNumber }</div>
          <a href={ this.props.href } is="sidebarItem">{ this.props.label }</a>
        </Tile>
      </div>
    );
  }
};
