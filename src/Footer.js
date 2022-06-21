import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="first-div">
          <h3 class="smart-home">Vegan</h3>
          <p class="testimonial-words-footers">
            Lorem lorem13 ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati nesciunt voluptate beatae nihil perspiciatis iusto commodi
            reiciendis tempora doloremque quos!
          </p>
          <div class="input-mail">
            <input
              type="text"
              class="email-subscribe"
              placeholder="Email Address"
            />
            <button class="register">Subscribe</button>
          </div>
        </div>
        <div class="second-div">
          <h3>CATEGORIES</h3>
          <li class="lists">Fast Foods</li>
          <li class="lists">Outdoor Meal</li>
          <li class="lists">Pasta</li>
          <li class="lists">African Dishes</li>
        </div>
        <div class="second-div">
          <h3>ABOUT</h3>
          <li class="lists">About Us</li>
          <li class="lists">Partnerships</li>
          <li class="lists">Finance Experts</li>
          <li class="lists">The Chefs</li>
        </div>
        <div class="third-div">
          <h3>Follow Us</h3>
          <li class="lists">Facebook</li>
          <li class="lists">Twitter</li>
          <li class="lists">Instagram</li>
          <li class="lists">Linkedin</li>
        </div>
      </div>
      <div class="footer-end">
        Copyright &copy; 2022 all rights reserved Vegan
      </div>
    </footer>
  );
}
