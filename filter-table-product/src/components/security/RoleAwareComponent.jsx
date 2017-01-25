import {Component} from 'react';

class RoleAwareComponent extends Component {
  constructor(props) {
    super(props);

    // List of roles that have access to this component
    this.auth = [];

    // The current user obj in the app. This should be done with a better
    // approach.
    this.user = {};
  }

  shouldBeVisible() {
    const user = this.user;

    if(!user) {
      return false;
    }

    // Verify user role in this.auth
    const hasAuth = this.auth.find(role => role === user.role);
    return hasAuth !== undefined;
  }

}

export default RoleAwareComponent;
