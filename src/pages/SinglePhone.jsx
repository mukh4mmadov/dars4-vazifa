import { useParams, Link } from "react-router-dom";

function SinglePhone() {
  const { id } = useParams();

  const [phone, setphone] = useState([]);

  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/6676aaa81d2cd3eb1143dbaa/articles/" +
        id
    )
      .then((data) => data.json())
      .then((phones) => setphone(phones))
      .catch((error) => console.log(error));
  }, []);
  console.log(phone);
  return (
    <div>
      {phone &&
        phone.map((phone) => {
          return (
            <div>
              <h1>{phone.title}</h1>
              <p>{phone.rating}</p>
              <Link to="/">Go home</Link>
              <Link>Buy now</Link>
            </div>
          );
        })}
    </div>
  );
}

export default SinglePhone;
