function LandingPage() {
    return (
     <div className="landing-container">
     <div className="landing-content">
     <h1 className="landing-title">Modern Clothing, Your Way</h1>
     <p className="landing-subtitle">
     Explore our collection of stylish, comfortable, and affordable clothes. 
     Perfect for every occasion.
                </p>
                <button className="landing-button">Shop Now</button>
            </div>
            <div className="feature-grid">
                <div className="feature-item">
                    <img src="c:\\Users\\IBM\\Pictures\\Screenshots\\download.jpg" alt="Men's Fashion" className="feature-image" />
                    <h3>Men's Fashion</h3>
                    <p>Classic and modern styles for every man.</p>
                </div>
                <div className="feature-item">
                    <img src="images/women-fashion.jpg" alt="Women's Fashion" className="feature-image" />
                    <h3>Women's Fashion</h3>
                    <p>Trendy outfits for all occasions.</p>
                </div>
                <div className="feature-item">
                    <img src="images/kids-fashion.jpg" alt="Kids' Fashion" className="feature-image" />
                    <h3>Kids' Fashion</h3>
                    <p>Comfortable and fun clothing for kids.</p>
                </div>
            </div>
            <div className="promo-banner">
                <h2>Winter Sale is Here!</h2>
                <p>Up to 50% off on selected items. Shop Now!</p>
            </div>
            <div className="form-container">
                <h2 className="form-title">Get in Touch</h2>
                <p>Fill in your details below, and we'll get back to you soon!</p>
                <form className="user-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                     <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <h3>About Us</h3>
                        <p>
                            We are a modern clothing brand bringing you stylish and comfortable apparel for all occasions.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@modernclothing.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Fashion Ave, Style City</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Modern Clothing. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;

