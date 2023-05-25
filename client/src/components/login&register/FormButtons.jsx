import { Link, useNavigate } from "react-router-dom";

export default function FormButtons({ submitTxt, isHidding, navigateTo }) {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        {navigateTo === "/register" ? "No account? Sign up " : "Already have an account? Sign in "}
        <Link to={navigateTo}>here!</Link>
      </p>
      <button data-testid="submitBtn" type="submit">
        {submitTxt}
      </button>
      {isHidding === true ? null : (
        <button type="reset" onClick={() => navigate("/browser")}>
          Login as guest user
        </button>
      )}
    </div>
  );
}
