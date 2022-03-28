import Nav from "./component/Nav";
import Card from "./component/Card";

const isiCard = [
  {
    Image:
      "https://i.pinimg.com/236x/ef/d8/56/efd8562345cfe35546e446ea3b3d590b.jpg",
    caption: "the pict ",
  },
  {
    Image:
      "https://i.pinimg.com/236x/a0/a4/77/a0a477d82658ebadb71c07e196ecd446.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/564x/7e/a3/a8/7ea3a853915bbceda7b46cada605910a.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/33/d0/fd/33d0fd960abb7f7c60103332d1d030a0.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/78/0e/e6/780ee67731a0debc7dbf2d0dbd258bc4.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/e7/97/a5/e797a5766a4e5f93cea9de1b2ee935af.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/0c/40/2c/0c402ca936288f8baba93a3982c68570.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/bb/47/c6/bb47c6e3600c3350f9fc9f511f99e3d5.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/9a/01/77/9a0177f25fd515b4ef00e3c5f28bd6b1.jpg",
    caption: "the pict",
  },
  {
    Image:
      "https://i.pinimg.com/236x/fc/02/e7/fc02e7bbc3d695d20052540d66566bf7.jpg",
    caption: "the pict",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App;
