import React, { Component } from "react";
import "./App.css";

const people = [
  {
    id: 1,
    name: "Sarah",
    phone: 923125492300,
    email: "sarah@gmail.com",
    image: "/images/sarah-dp.png"
  },
  {
    id: 2,
    name: "Shebi",
    phone: 9233220425355,
    email: "Shebi@gmail.com",
    image: "/images/shebii-dp.jpg"
  },
  {
    id: 3,
    name: "Kamran",
    phone: 923342122558,
    email: "kamran@gmail.com",
    image: "/images/kamran-dp.jpg"
  },
  {
    id: 4,
    name: "Zahid",
    phone: 923302012536,
    email: "zahid@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 5,
    name: "Ayesha",
    phone: 923332002536,
    email: "ayesha@gmail.com",
    image: "/images/ayesha-dp.jpg"
  },
  {
    id: 6,
    name: "Nimra",
    phone: 923331202536,
    email: "nimra@gmail.com",
    image: "/images/ayesha-dp.jpg"
  },
  {
    id: 7,
    name: "Saim",
    phone: 923132152537,
    email: "saim@gmail.com",
    image: "/images/kamran-dp.jpg"
  },
  {
    id: 8,
    name: "Bilal",
    phone: 923234082531,
    email: "bilal@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 9,
    name: "Atif",
    phone: 923132909538,
    email: "atif@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 10,
    name: "Hamza",
    phone: 923332102730,
    email: "hamza@gmail.com",
    image: "/images/shebii-dp.jpg"
  },
  {
    id: 11,
    name: "Dawood",
    phone: 923331007506,
    email: "dawood@gmail.com",
    image: "/images/kamran-dp.jpg"
  },
  {
    id: 12,
    name: "Aleena",
    phone: 923309002856,
    email: "aleena@gmail.com",
    image: "/images/sarah-dp.png"
  },
  {
    id: 13,
    name: "Badar",
    phone: 923234480521,
    email: "badar@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 14,
    name: "Bushra",
    phone: 923235082430,
    email: "bushra@gmail.com",
    image: "/images/ayesha-dp.jpg"
  },
  {
    id: 15,
    name: "Tariq",
    phone: 923205082931,
    email: "tariq@gmail.com",
    image: "/images/shebii-dp.jpg"
  },
  {
    id: 16,
    name: "Wahid",
    phone: 923205082981,
    email: "wahid@gmail.com",
    image: "/images/kamran-dp.jpg"
  },
  {
    id: 17,
    name: "Qamar",
    phone: 923295382730,
    email: "qamar@gmail.com",
    image: "/images/zahid-dp.jpg"
  },
  {
    id: 18,
    name: "Zainab",
    phone: 923105581961,
    email: "zainab@gmail.com",
    image: "/images/ayesha-dp.jpg"
  },
  {
    id: 19,
    name: "Maryam",
    phone: 923217082330,
    email: "maryam@gmail.com",
    image: "/images/sarah-dp.png"
  },
  {
    id: 20,
    name: "Zain",
    phone: 923104582031,
    email: "zain@gmail.com",
    image: "/images/shebii-dp.jpg"
  },
];

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;

  };
}
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, people } = this.state;
    return (
      <div className="main">
          <div className="App">
            <form>
            <i className="fas fa-search"></i>

              <input 
              type="text" 
              placeholder="Search Contacts"
              onChange={this.searchHandler} 
              value={term} />
            </form>
            {people.filter(searchingFor(term)).map((data) => (
              <div  className="contact" key={data.id}>
                <div className="image">
                    <img src = {process.env.PUBLIC_URL + data.image}/>
                </div>
                <div className="name-email">
                    <h1>{data.name}</h1>
                    <h3>{data.phone}</h3>
                </div>
                
              </div>
            ))}
          </div>
          <div className="home-btn"></div>
      </div>
    );
  }
}
