import Productbox from "./Productbox";
import "./ProductsStyles.css";
import img1 from "../assets/mahindrarise.png";
import img2 from "../assets/ximea.png";
import img3 from "../assets/microsoft.png";
import img4 from "../assets/coolermaster.png";
import img5 from "../assets/vector.png";
import img6 from "../assets/gigabyte.png";

function Products() {
  return (
    <div id="products">
      <h1>Our Sponsors</h1>
      <p></p>
      <div className="a-container">
        <Productbox
          boximg="https://1000logos.net/wp-content/uploads/2022/11/Continental-Logo.png"
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.continental.com/en/"
        />
        <Productbox
          boximg={img1}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.mahindra.com/rise"
        />
        <Productbox
          boximg="https://assets.themuse.com/uploaded/companies/1609/small_logo.png?v=1662576281"
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.sick.com/us/en/"
        />
        <Productbox
          boximg="https://cdn.freebiesupply.com/images/large/2x/nvidia-logo-black-and-white.png"
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.nvidia.com/en-in/"
        />
        <Productbox
          boximg="https://www.gsaglobal.org/wp-content/uploads/job-manager-uploads/company_logo/2020/02/national-instruments-logo-png-transparent.png"
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.ni.com/en-in.html"
        />
        <Productbox
          boximg={img2}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.ximea.com/"
        />
        <Productbox
          boximg={img3}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.microsoft.com/en-in"
        />
        <Productbox
          boximg={img4}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.coolermaster.com/branding/"
        />
        <Productbox
          boximg={img5}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.vector.com/in/en/products/products-a-z/software/"
        />
        <Productbox
          boximg={img6}
          boxtitle=""
          btnClass="productbox-button"
          btnText="Visit"
          url="https://www.gigabyte.com/"
        />
      </div>
    </div>
  );
}
export default Products;
