import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Articles() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    <h1 className="text-3xl">LOADING...</h1>;
    fetch(
      "https://online-json-server-api.up.railway.app/project/6676aaa81d2cd3eb1143dbaa/articles"
    )
      .then((data) => data.json())
      .then((phones) => setPhones(phones))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-4 p-8 rounded">
      {phones &&
        phones.data.map((phone) => {
          return (
            <div key={phone.id} className="rounded-xl bg-base-200 p-4">
              <img
                className="w-52 h-72 object-cover"
                src={phone.images}
                alt=""
              />
              <h1 className=" text-2xl my-3">{phone.title}</h1>
              <small className="text-[16px] font-medium text-blue-500 mb-3">
                Price: {phone.price} $
              </small>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to={`/articles/${phone.id}`}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
    </div>
    // <div key={phone.id}>
    //   <h1>Articles</h1>
    //   <h1>{phone.title}</h1>
    // </div>
  );
}

export default Articles;
