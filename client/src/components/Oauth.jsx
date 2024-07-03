import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const phoneNumber = resultsFromGoogle.user.phoneNumber || "";

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
          phoneNumber,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="w-full flex items-center justify-center border-2 border-orange-500 mt-5 text-orange-500 hover:bg-orange-400 dark:hover:bg-dark-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-light-secondary dark:focus:ring-dark-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 transition ease-in-out duration-300"
    >
      <svg
        className="w-4 h-4 mr-2"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8c0-16.2-1.3-32-3.8-47.2H249.5v89.5h135.6c-5.9 32-23.6 59-49.5 77.2v64.3h79.9c46.7-43.1 73.5-106.5 73.5-183.8zM249.5 503.3c65.7 0 120.7-21.8 160.9-59.3l-79.9-64.3c-22.2 15-50.4 23.9-81 23.9-62.2 0-114.8-42.3-133.7-99.1H35.8v62.4C75.5 451.5 157.6 503.3 249.5 503.3zM115.8 301.2c-7.7-22.8-7.7-47.6 0-70.4v-62.4H35.8C15.8 192.8 0 224.3 0 261.8s15.8 69 35.8 93.3l79.9-53.9zm133.7-217.7c44.8 0 81.6 15.5 108.7 40.3l79.8-77.9C370.1 24.1 310.1 0 249.5 0 157.6 0 75.5 51.8 35.8 131.7l79.9 62.4c18.9-56.8 71.5-99.1 133.7-99.1z"
        ></path>
      </svg>
      Continue with Google
    </button>
  );
}
