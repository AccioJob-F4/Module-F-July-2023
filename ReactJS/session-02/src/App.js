// import React from "react";
// import { withDataFetchingHOC } from "./withFetchingDataHOC";

// const App = ({ data, isLoading = false, error }) => {
//   if (isLoading) return <div>LOADING...</div>;

//   if (error) return <div>ERROR : {error.message}</div>;

//   return (
//     <div>
//       <ul>
//         {data?.map((item) => (
//           <li key={item.id}>
//             {item.name.title + " " + item.name.first + " " + item.name.last}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const UpgradedAppComponent = withDataFetchingHOC(
//   App,
//   "https://randomuser.me/api/"
// );

// export default UpgradedAppComponent;

// COOKIES
import React from "react";

const App = () => {
  const setCookie = (key, value, daysToExpire) => {
    const expirationDate = new Date();

    expirationDate.setTime(
      expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 100
    );

    const expires = `expires=${expirationDate.toUTCString()}`;

    document.cookie = `${key}=${value};${expires};path=/`;
  };

  const getCookie = (key) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieVal] = cookie.trim().split("=");
      if (cookieName === key) return decodeURIComponent(cookieVal);
    }

    return null;
  };

  return (
    <div>
      <button
        onClick={() => {
          setCookie("username", "Divyansh Singh", 7);
        }}
      >
        Set Cookie
      </button>
      <br />
      Name from Cookie Data : {getCookie("username")}
    </div>
  );
};

export default App;
