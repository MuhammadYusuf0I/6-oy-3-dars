import { Card } from "../Card";

import "./index.css";

function Books(props) {
  const { data } = props;

  return (
    <div className="container">
      {data.map((book, index) => {
        return <Card key={index} book={book}></Card>;
      })}
    </div>
  );
}

export default Books;
