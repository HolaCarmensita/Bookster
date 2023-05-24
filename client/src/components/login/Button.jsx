export default function Button({ submitTxt, isHidding }) {
  return (
    <>
      <button type="submit">{submitTxt}</button>
      {isHidding === true ? null : <button type="reset">Login as guest user</button>}
    </>
  );
}
