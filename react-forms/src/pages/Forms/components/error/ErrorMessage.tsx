import React from 'react';

type Props = {
  validateData: Array<string>;
  input: string;
};

class ErrorMessage extends React.Component<Props> {
  render() {
    if (this.props.input == 'agree') {
      return (
        <>
          {this.props.validateData.includes(this.props.input) ? (
            <p className="forms__name_error">click here</p>
          ) : (
            <p className="forms__name_hide">hide</p>
          )}
        </>
      );
    } else {
      return (
        <>
          {this.props.validateData.includes(this.props.input) ? (
            <p className="forms__name_error">enter a valid {this.props.input}</p>
          ) : (
            <p className="forms__name_hide">hide</p>
          )}
        </>
      );
    }
  }
}

export default ErrorMessage;
