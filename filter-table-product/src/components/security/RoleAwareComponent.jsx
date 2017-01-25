import {Component} from 'react';

class RoleAwareComponent extends Component {
  constructor(props) {
    super(props);

    this.clazz = this.constructor.name;

    // List of roles that have access to this component
    this.auth = [];

    // The current user obj in the app. This should be done with a better
    // approach.
    this.user = {};
  }

  shouldBeVisible() {
    console.log(`Entry: ${this.clazz}.shouldBeVisible()`)

    const user = this.user;

    if(!user) {
      return false;
    }

    // Verify user role in this.auth
    const hasAuth = this.auth.find(role => role === user.role);
    console.log(`hasAuth: ${hasAuth} - return: ${hasAuth !== undefined}`);

    return hasAuth !== undefined;
  }

}

export default RoleAwareComponent;
