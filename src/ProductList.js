import React, { Component } from 'react';
import { CiHeart } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';


import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showFilters: true,
    };
  }


  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error('Error fetching products:', error));
  }


  toggleFilters = () => {
    this.setState((prevState) => ({
      showFilters: !prevState.showFilters,
    }));
  };

  render() {
    const { products, showFilters } = this.state;

    return (
      <div className="product-list-container">
        <div className='Discovercontainer'>
        <h1>Discover Our Products</h1>
        <p className='DiscoverParagraph'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.<br/> Dolor integer scelerisque nibh amet mi ut elementum</p>
        </div>
        <div className='container3'>
        <p>3425 Items</p>
        <button className="toggle-filters-btn" onClick={this.toggleFilters}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <select>
                <option>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
              </select>
        </div>
        <div className="main-content-container">  

        {showFilters && (
          <div className="filters">
            <div>
              <label>
                <input type="checkbox" /> Customizable
              </label>
            </div>

            <div className='filteroptions'>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      IDEAL FOR <br/> ALL
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <label>
                <input type="checkbox" /> Men
              </label>
              <br />
              <label>
                <input type="checkbox" /> Women
              </label>
              <br />
              <label>
                <input type="checkbox" /> Baby & Kids
              </label>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      OCCASION <br/> ALL
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      WORK <br/> ALL
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      FABRIC <br/> ALL
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      SEGMENT <br/> ALL
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      SUITABLE FOR <br/> ALL
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        RAW MATERIALS <br/> ALL
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      PATTERN <br/> ALL
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>

     
     
    </div>
  </div>  
        )}
        <div className="product-items">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img className='product-item-image' src={product.image} alt={product.title} />
              <p className="product-item-paragraph1">{product.title}</p>
              <p className="product-item-paragraph2">Sign in or Create an account to see pricing</p>
              <div className='heart'>
              <CiHeart />
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>
    );

  }
}

export default ProductList;
