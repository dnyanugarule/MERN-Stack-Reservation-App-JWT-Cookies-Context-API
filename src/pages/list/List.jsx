import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  // Create an array of data for different SearchItems
  const searchItemsData = [
    {
      imageSrc: "/lodge 1.jpg",
      title: "Hotel 1",
      distance: "500m from center",
      taxiOp: "Free airport taxi",
      subtitle: "Description 1",
      features: "Features 1",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 1",
      rating: "8.9",
      price: "$112",
    },
    {
      imageSrc: "/lodge 2.jpg",
      title: "Hotel 2",
      distance: "700m from center",
      taxiOp: "Airport shuttle",
      subtitle: "Description 2",
      features: "Features 2",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 2",
      rating: "9.2",
      price: "$120",
    },
    {
      imageSrc: "/lodge 3.jpg",
      title: "Hotel 3",
      distance: "1km from center",
      taxiOp: "No airport shuttle",
      subtitle: "Description 3",
      features: "Features 3",
      cancelOp: "Non-refundable",
      cancelOpSubtitle: "Cancel description 3",
      rating: "7.5",
      price: "$90",
    },
    {
      imageSrc: "/lodge 4.jpg",
      title: "Hotel 4",
      distance: "300m from center",
      taxiOp: "Free airport shuttle",
      subtitle: "Description 4",
      features: "Features 4",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 4",
      rating: "8.0",
      price: "$100",
    },
    {
      imageSrc: "/lodge 5.jpg",
      title: "Hotel 5",
      distance: "900m from center",
      taxiOp: "Airport pickup available",
      subtitle: "Description 5",
      features: "Features 5",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 5",
      rating: "9.5",
      price: "$130",
    },
    {
      imageSrc: "/lodge 6s.jpg",
      title: "Hotel 6",
      distance: "400m from center",
      taxiOp: "Airport shuttle",
      subtitle: "Description 6",
      features: "Features 6",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 6",
      rating: "8.7",
      price: "$110",
    },
    {
      imageSrc: "/lodge 7.jpg",
      title: "Hotel 7",
      distance: "600m from center",
      taxiOp: "Airport transfer available",
      subtitle: "Description 7",
      features: "Features 7",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 7",
      rating: "9.0",
      price: "$125",
    },
    {
      imageSrc: "/lodge 8.jpg",
      title: "Hotel 8",
      distance: "800m from center",
      taxiOp: "Airport shuttle",
      subtitle: "Description 8",
      features: "Features 8",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 8",
      rating: "8.8",
      price: "$115",
    },
    {
      imageSrc: "lodeg.jpg",
      title: "Hotel 9",
      distance: "200m from center",
      taxiOp: "Airport pickup available",
      subtitle: "Description 9",
      features: "Features 9",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "Cancel description 9",
      rating: "9.3",
      price: "$140",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {searchItemsData.map((item, index) => (
              <SearchItem
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                distance={item.distance}
                taxiOp={item.taxiOp}
                subtitle={item.subtitle}
                features={item.features}
                cancelOp={item.cancelOp}
                cancelOpSubtitle={item.cancelOpSubtitle}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
