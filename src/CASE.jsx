/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-06-17
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class CASE extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    test: React.PropTypes.any.isRequired
  };

  render() {
    console.error('The CASE component can not be render');
  }
}
