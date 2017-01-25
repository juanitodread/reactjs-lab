import React from 'react';
import RoleAwareComponent from '../security/RoleAwareComponent';

class Button extends RoleAwareComponent {
  constructor(props) {
    super(props);

    this.value = props.value;

    //Auth
    this.user = props.user;
    this.auth = props.auth;
  }

  render() {
    const jsxComponent = (
      <button>{this.value}</button>
    );

    return this.shouldBeVisible() ? jsxComponent : null;
  }
}

export default Button;
