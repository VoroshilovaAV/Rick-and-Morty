export function ErrorMessage(props: { validateData: string; input: string }) {
  return props.validateData !== undefined ? (
    <p className="forms__name_error">
      {props.input == 'agree' ? 'click here' : `enter a valid ${props.input}`}
    </p>
  ) : (
    <p className="forms__name_hide">hide</p>
  );
}
