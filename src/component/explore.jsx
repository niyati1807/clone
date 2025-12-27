import React from "react";

const Explore = () => {
  return (
    <div>
      <div
        className=" text-start border px-5"
        style={{ backgroundColor: "rgb(248, 248, 248)" }}
      >
        <section className="explore1">
          <div className="explorehead" style={{marginLeft:"50px"}}>
            <h1 className="exhead" style={{marginTop:"20px"}}>Explore options near me</h1>
          </div>
          <div className="explorebody p-5">
            <div class="accordion" id="accordionExample ">
              <div class="accordion-item ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button  shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Popular cuisines near me
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Bakery near me . Beverages near me . Biryani near me .
                    Burger near me . Cafe near me . Chinese near me . Coffee
                    near me . Continental near me . Desserts near me . Gujarati
                    near me . Ice Cream near me . Italian near me . North Indian
                    near me . Pasta near me . Pizza near me . Sandwich near me .
                    Shake near me . South Indian near me . Street near me . Tea
                    near me .
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Popular restaurant types near me
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Bakeries near me . Bars near me . Beverage Shops near me .
                      Bhojanalya near me . Cafés near me . Casual Dining near me
                      . Dessert Parlors near me . Dhabas near me . Fine Dining
                      near me . Food Courts near me . Food Trucks near me .
                      Kiosks near me . Paan Shop near me . Quick Bites near me .
                      Sweet Shops near me .
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Top restaurant chains{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body d-flex flex-wrap gap-5">
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/bikanervala"
                          class="text-decoration-none text-secondary"
                        >
                          Bikanervala
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/burger-king"
                          class="text-decoration-none text-secondary"
                        >
                          Burger king
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/burger-singh-big-punjabi-burgers"
                          class="text-decoration-none text-secondary"
                        >
                          Burger Singh
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/dunkin-donuts"
                          class="text-decoration-none text-secondary"
                        >
                          Dunkin' Don
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/kfc"
                          class="text-decoration-none text-secondary"
                        >
                          KFC
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/mcdonalds"
                          class="text-decoration-none text-secondary"
                        >
                          McDonald's
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/pizza-hut"
                          class="text-decoration-none text-secondary"
                        >
                          Pizza Hut
                        </a>
                      </div>
                      <div className="restt">
                        <a
                          href="https://www.zomato.com/ahmedabad/restaurants/wow-momo"
                          class="text-decoration-none text-secondary"
                        >
                          WOW! Momo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Cities we deliver to
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="cities d-flex flex-row justify-content-evenly">
                        <div>
                          <ul type="none">
                            <li>Delhi NCR</li>
                            <li>Kolkata</li>
                            <li>Mumbai</li>
                            <li>Bengaluru</li>
                            <li>Pune</li>
                            <li>Hyderabad</li>
                            <li>Chennai</li>
                            <li>Lucknow</li>
                            <li>Kochi</li>
                            <li>Jaipur</li>
                          </ul>
                        </div>
                        <div>
                          <ul type="none">
                            <li>Ahmedabad</li>
                            <li>Chandigarh</li>
                            <li>Goa</li>
                            <li>Indore</li>
                            <li>Gangtok</li>
                            <li>Nashik</li>
                            <li>Ooty</li>
                            <li>Shimla</li>
                            <li>Ludhiana</li>
                            <li>Guwahati</li>
                          </ul>
                        </div>
                        <div>
                          <ul type="none">
                            <li>Amritsar</li>
                            <li>Kanpur</li>
                            <li>Allahabad</li>
                            <li>Aurangabad</li>
                            <li>Bhopal</li>
                            <li>Ranchi</li>
                            <li>Visakhapatnam</li>
                            <li>Bhubaneswar</li>
                            <li>Coimbatore</li>
                            <li>Mangalore</li>
                          </ul>
                        </div>
                        <div>
                          <ul type="none">
                            <li>Vadodara</li>
                            <li>Nagpur</li>
                            <li>Agra</li>
                            <li>Dehradun</li>
                            <li>Mysore</li>
                            <li>Puducherry</li>
                            <li>Surat</li>
                            <li>Varanasi</li>
                            <li>Patna</li>
                            <li>Udaipur</li>
                          </ul>
                        </div>
                        <div>
                          <ul type="none">
                            <li>Khajuraho</li>
                            <li>Srinagar</li>
                            <li>Neemrana</li>
                            <li>Cuttack</li>
                            <li>Trivandrum</li>
                            <li>Haridwar</li>
                            <li>Leh</li>
                            <li>Pushkar</li>
                            <li>Rajkot</li>
                            <li>Madurai</li>
                          </ul>
                        </div>
                        <div>
                          <ul type="none">
                            <li>Kozhikode</li>
                            <li>Alappuzha</li>
                            <li>Thrissur</li>
                            <li>Manipal</li>
                            <li>Vijayawada</li>
                            <li>Jodhpur</li>
                            <li>Kota</li>
                            <li>Ajmer</li>
                            <li>Mussoorie</li>
                            <li>Rishikesh</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Popular restaurant types near me
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Bakeries near me . Bars near me . Beverage Shops near me .
                      Bhojanalya near me . Cafés near me . Casual Dining near me
                      . Dessert Parlors near me . Dhabas near me . Fine Dining
                      near me . Food Courts near me . Food Trucks near me .
                      Kiosks near me . Paan Shop near me . Quick Bites near me .
                      Sweet Shops near me .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
