import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="homeitem">
          <div className="headingTitle">
          <span className="heading">
           Welcome to 
           </span>
          <span className="heading">
           Admin Dashboard 
           </span>
          <span className="heading">
          Hotel Booking
           </span>
          </div>
          <img className="homeing" src="https://img.freepik.com/premium-vector/hotel-booking-concept-flat-design-man-tourist-with-luggage-choosing-apartment-using-mobile-app-traveler-goes-vacation-reserving-hostel-room-vector-illustration-with-people-scene-web_198565-1811.jpg?w=1060" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
