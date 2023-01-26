import SectionHeading from "../../BuildingBlocks/SectionHeading";
import SectionService from "../../BuildingBlocks/SectionService";
import styled from "styled-components";
// import "../../../../public/pencil-case.svg";
const Services = () => {
  return (
    <>
      <SectionHeading
        subtitle={"What I Do ?"}
        title={"Service"}
      ></SectionHeading>
      <Service className="row p-5 services">
        <div className="col-md-3 col-lg-3 services-items">
          <SectionService
            serviceimage={require("../../Assets/pencil-case.svg.jpg")}
            tittle={"Paurush"}
          ></SectionService>
        </div>
        <div className="col-md-3 col-lg-3 services-items">
          <SectionService
            serviceimage={require("../../Assets/analytics.svg.jpg")}
            tittle={"Paurush"}
          ></SectionService>
        </div>
        <div className="col-md-3 col-lg-3 services-items">
          <SectionService
            serviceimage={require("../../Assets/responsive.svg.jpg")}
            tittle={"Paurush"}
          ></SectionService>
        </div>
        <div className="col-md-3 col-lg-3 services-items">
          <SectionService
            serviceimage={require("../../Assets/analytics.svg.jpg")}
            tittle={"Paurush"}
          ></SectionService>
        </div>
      </Service>
    </>
  );
};
const Service = styled.div`
  .services-items img {
    margin-top: 40px;
    width: 55px;
    margin-bottom: 25px;
    transition: all 0.65s ease-in;
  }
  .services-items .card-body {
    text-align: center;
  }
  .services-items .card {
    position: relative;
    min-height: 230px;
    border: 1px solid #dee2e6;
    overflow: hidden;
    border-radius: 3px;
  }
  .tittle {
    font-size: 1.5em;
  }

  .service-description {
    background-color: #fff;
    position: absolute;
    bottom: -100%;
    transition: all 0.65s ease-in;
  }

  .services-items .card:hover .service-description {
    bottom: 0;
  }

  .services-items:hover img {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export default Services;
