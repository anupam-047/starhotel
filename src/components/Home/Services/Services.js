import React from 'react';
import { FormControl, InputGroup, Button, Row } from "react-bootstrap";
import { toast } from 'react-toastify';
import Service from '../Service/Service';
import { Spinner } from "react-bootstrap";
// import bg from '../../../logos/website-background-texture-10-920x518.jpg'
toast.configure();
const Services = () => {

  const [services, setServices] = React.useState([]);
  const [SearchText, setSearchText] = React.useState("");
  const [searchValue, setSearchValue] = React.useState([]);
  const [isSpinner, setIsSpinner] = React.useState(true);
  React.useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      fetch("https://serene-tor-46581.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setServices(data);
          setSearchValue(data);
          setIsSpinner(false);
        });
    });

  }, [])
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    // console.log(e);
  }
  const handleToSearchButton = () => {
    // console.log(SearchText);
    if (SearchText) {
      const s = services.filter((service) =>
        service.serviceName.toLowerCase().includes(SearchText.toLowerCase())
      );
      setSearchValue(s);
    } else {
      toast.error("Type event name to search")
    }

  };
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   ObjectFit: "cover",
      // }}
    >
      <div className="container">
        <section className="mt-5">
          <h2 className="fw-bold text-uppercase">
            Find Your Room
          </h2>
          <InputGroup className="mb-3 w-75 py-4 mx-auto">
            <FormControl
              placeholder="Search...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleSearch}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleToSearchButton();
                }
              }}
            />
            <Button
              variant="secondary"
              id="button-addon2"
              onClick={handleToSearchButton}
            >
              Search
            </Button>
          </InputGroup>
        </section>
        <section

        >
          {isSpinner ? (
            <Spinner animation="grow" variant="danger" />
          ) : (
            <Row xs={1} md={2} lg={3} xl={3} className="g-4 py-5">
              {searchValue?.map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </Row>
          )}
        </section>
      </div>
    </div>
  );
};

export default Services;
