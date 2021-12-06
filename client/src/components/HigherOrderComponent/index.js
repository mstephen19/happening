import React, {Component} from 'react';

const NewHOC = (PassedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default NewHOC;
