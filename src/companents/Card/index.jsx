import "./index.css";

export function Card(props) {
  const { title, author, country, language, pages, year } = props.book;
  return (
    <div className="card-wrapper">
      <h1>{title}</h1>
      <h3>{author} </h3>
      <h3>{country}</h3>
      <h3>{language}</h3>
      <p>{pages}</p>
      <p
        style={{
          backgroundColor: year > 1970 ? "green" : "orange",
          color: "white",
        }}
      >
        {year}
      </p>
    </div>
  );
}
