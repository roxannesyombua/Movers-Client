import React from "react";
import "./Services.css"; 

const Services = () => {
    return (
        <div className="package-deals">
            <header>
                <h2>Our Services</h2>
                <p>More than 100 moves delivered and committed <br /> to our work to make sure it lasts.</p>
            </header>

            <section className="residential">
                <h3>Residential</h3>
                <h4>Our package deals</h4>
            </section>

            <section className="included-services">
                <h4>Included Services</h4>
                <ol>
                    <li>
                        <strong>Packing and Unpacking:</strong>
                        <ul>
                            <li>Professional packing of all household items, including fragile items.</li>
                            <li>Unpacking and placement of items at the new location.</li>
                            <li><strong>Cost:</strong> 4500 KSh</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Assembly and Disassembly of Furniture:</strong>
                        <ul>
                            <li>Disassembly of large furniture items (i.e., beds, wardrobes) before moving.</li>
                            <li>Assembly of these items at the new location.</li>
                            <li><strong>Cost:</strong> 5000 KSh</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Transportation:</strong>
                        <ul>
                            <li><strong>Base Fee:</strong> 3500 KSh (per unit - 5 km)</li>
                            <li><strong>Distance:</strong> 700 KSh per 5 km</li>
                            <li>
                                <strong>Calculated Cost:</strong> Base Fee + Distance Fee + Additional Unit Fee
                                <ul>
                                    <li>Cost = (Base Unit + Distance) * 700 KSh/unit - Transportation fees</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Basic Insurance Coverage:</strong>
                        <ul>
                            <li>Coverage for potential damages during the move, up to a certain limit.</li>
                            <li><strong>Cost:</strong> 500 KSh</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section className="room-types">
                <h4>Room Types:</h4>
                <ul>
                    <li>Studio: 4500 KSh</li>
                    <li>Bedsitter: 5000 KSh</li>
                    <li>One Bedroom: 6500 KSh</li>
                    <li>Two Bedroom: 8000 KSh</li>
                </ul>
            </section>
            <button className="book-now-btn">
                <a href="/Booking"> Book Now </a>
            </button>

            <footer>
                <div className="contact-info">
                    <p>Contact Us:</p>
                    <p>Phone: +254 707 987 543</p>
                    <p>Email: movershub@gmail.com</p>
                </div>
                <div className="address">
                    <p>Wood Avenue, Wood Towers 10th Floor</p>
                </div>
            </footer>
        </div>
    );
};

export default Services;
