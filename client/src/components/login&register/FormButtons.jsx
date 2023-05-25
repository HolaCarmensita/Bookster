import { Link, useNavigate } from "react-router-dom";

export default function FormButtons({ submitTxt, isHidding, navigateTo }) {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        {navigateTo === "/register" ? "No account? Sign up " : "Already have an account? Sign in "}
        <Link data-testid="hereBtn" to={navigateTo}>
          here!
        </Link>
      </p>
      <button type="submit" data-testid="submitBtn">
        {submitTxt}
      </button>
      {isHidding === true ? null : (
        <button data-testid="guestBtn" type="reset" onClick={() => navigate("/browser")}>
          Login as guest user
        </button>
      )}
    </div>
  );
}
