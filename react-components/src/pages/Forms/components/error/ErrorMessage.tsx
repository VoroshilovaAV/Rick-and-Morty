export default function ErrorMessage(props: { validateData: Array<string>; input: string }) {
  return props.validateData.includes(props.input) ? (
    <p className="forms__name_error">
      {props.input == 'agree' ? 'click here' : `enter a valid ${props.input}`}
    </p>
  ) : (
    <p className="forms__name_hide">hide</p>
  );
}
