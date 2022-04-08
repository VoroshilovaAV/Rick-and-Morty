export default function ErrorMessage(props: { validateData: Array<string>; input: string }) {
  if (props.input == 'agree') {
    return (
      <>
        {props.validateData.includes(props.input) ? (
          <p className="forms__name_error">click here</p>
        ) : (
          <p className="forms__name_hide">hide</p>
        )}
      </>
    );
  } else {
    return (
      <>
        {props.validateData.includes(props.input) ? (
          <p className="forms__name_error">enter a valid {props.input}</p>
        ) : (
          <p className="forms__name_hide">hide</p>
        )}
      </>
    );
  }
}
