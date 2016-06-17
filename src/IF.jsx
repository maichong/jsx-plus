/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-06-17
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

import ELSE from './ELSE';
import _isArray from 'lodash/isArray';
import _forEach from 'lodash/forEach';

export default class IF extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    test: React.PropTypes.any.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    tag: React.PropTypes.string
  };

  render() {
    let tag = this.props.tag || 'div';
    let children = this.props.children;
    let other = null;
    if (_isArray(this.props.children)) {
      children = [];
      _forEach(this.props.children, el => {
        if (el.type === ELSE) {
          other = [];
        } else if (other) {
          other.push(el);
        } else {
          children.push(el);
        }
      })
    }
    return React.createElement(
      tag,
      {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      },
      this.props.test ? children : other
    );
  }
}
