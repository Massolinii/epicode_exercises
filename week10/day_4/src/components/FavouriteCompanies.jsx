import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const FavouriteCompanies = () => {
  const dispatch = useDispatch();
  const favContent = useSelector((state) => state.favourite.content);

  return (
    <div>
      <h2>Your Favourite Companies :D</h2>
      <ul>
        {favContent.map((company, i) => {
          return (
            <li key={favContent[i]}>
              <Link to={`/${company}`}>{company}</Link>
              <Button
                className="m-2"
                color="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAV",
                    payload: company,
                  });
                }}
              >
                remove from fav 💔
              </Button>
            </li>
          );
        })}
      </ul>
      {console.log(favContent)}
      <Link to="/" id="home-link">
        <Button className="m-4">Home</Button>
      </Link>
    </div>
  );
};

export default FavouriteCompanies;
