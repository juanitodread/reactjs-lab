import React from 'react';
import Button from '../common/Button';
import RoleAwareComponent from '../security/RoleAwareComponent';

class NavBar extends RoleAwareComponent {
  constructor(props) {
    super(props);

    this.user = props.user;
  }

  handleChange() {
  }

  render() {
    const jsxComponent = (
      <div>
        <Button value='Create Bot' user={this.user} auth={['admin', 'service']} />
        <Button value='Modify Bot' user={this.user} auth={['admin', 'service']}/>
        <Button value='Delete Bot' user={this.user} auth={['admin']}/>
        <Button value='Make me root button :D' user={this.user} auth={['root']}/>
      </div>
    );

    return jsxComponent;
  }
}

export default NavBar;
