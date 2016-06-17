# jsx-plus
if/else/switch/case for jsx

## Usage

```jsx

import React from 'react';

import { IF, ELSE, SWITCH, CASE } from 'react';

class Component extends React.Component {

  render(){
  
    let value = 2;
    
    return (
      <div>
      
        <IF test={value > 0}>
          value is greater than 0
          <ELSE/>
          value is equal or lesser than 0
        </IF>

        <SWITCH match={value}>
          <CASE test={0}>value is equal 0</CASE>
          <CASE test={1}>value is equal 1</CASE>
          <CASE test={2}>value is equal 2</CASE>
          {/* other children components without CASE is default */}
          unknown value
        </SWITCH>
        
      </div>
    );
  }

}

```

## Components

### IF

   Property |   Type   | Description
:-----------|----------|--------------
  test      | any      | condition for test
  tag       | string   | default 'div'
  id        | string   |
  className | string   |
  style     | object   |

### ELSE

no props

### SWITCH

   Property |   Type   | Description
:-----------|----------|--------------
  match     | any      | value to match
  tag       | string   | default 'div'
  id        | string   |
  className | string   |
  style     | object   |


### CASE

   Property |   Type   | Description
:-----------|----------|--------------
  test      | any      | value to match

