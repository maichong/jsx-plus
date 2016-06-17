/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-06-17
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

import CASE from './CASE';
import _isArray from 'lodash/isArray';
import _forEach from 'lodash/forEach';

export default class SWITCH extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    match: React.PropTypes.any.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    tag: React.PropTypes.string
  };

  render() {
    let tag = this.props.tag || 'div';
    let children = this.props.children;
    if (children && !_isArray(children)) {
      children = [children];
    }

    let matched = null;
    let defaults = [];
    _forEach(children, item => {
      if (matched) return;
      if (item.type === CASE) {
        if (item.props.test === this.props.match) {
          matched = item.props.children;
        }
      } else {
        defaults.push(item);
      }
    });
    return React.createElement(
      tag,
      {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      },
      matched || defaults
    );
  }
}
