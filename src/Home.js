import React from 'react'
import "./Home.css";
import Product from './Product';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
    <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/GiftGuides/HGG/finald1graphics/HGG_CozyUp-bg_GW-1x_1500x600._CB405315515_.jpg"
        alt="banner"
    />,
    <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        alt="banner"
    />,
    <img
        className="home__image "
        src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
        alt="banner"
    />,
    <img
        className="home__image "
        src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
        alt="banner"
        />,
    ];


const Home = () => {
  return (
      <div className="home__container">
         
             <AliceCarousel
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={1500}
                    animationDuration={4500}
                    animationType="slideout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                />
          <div className="home__row">
              <Product
                  id="1"
                  title="Amazon Basics High-Back Executive Swivel Office Desk Chair with Ribbed Puresoft Upholstery - Brick Red, Lumbar Support, Modern Style"
                  price={139.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71dN0dXJPWL._AC_SY355_.jpg"
              />
              <Product
                  id="2"
                  title="New Balance Men's Made in Us 990 V5 Sneaker"
                  price={166.30}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71EYGFxxNYL._AC_UX695_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="AAOBOSI 24 Inch Beverage Cooler, 164 Cans Freestanding and Built-in Beverage Refrigerator with Advanced Cooling System, Adjustable Shelf, Energy Saving, Ideal for Soda, Water, Beer, Wine"
                  price={919.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71isiTNSA3L._AC_SX679_.jpg"
              />
              <Product
                  id="4"
                  title="ZEROYAA Men's Hipster African Tribal Graphic Patchwork Design Slim Fit Long Sleeve Button up Mandarin Collar Shirts"
                  price={27.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61YXOd-g0JL._AC_UY500_.jpg"
              />
              <Product
                  id="5"
                  title="Roll over image to zoom in ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX481FL-XS74T"
                  price={1399.95}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/814LADIi8NL._AC_SX522_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Dark Blue"
                  price={169.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61KSB0XUzjL._AC_SX342_.jpg"
              />
              <Product
                  id="6"
                  title="BOHOELF Boho Duvet Cover Striped Queen Size, Light Grey Bedding Cover - Soft Breathable Textured Seersucker Duvet Cover for Men and Women, YKK Zipper Closure & Corner Ties"
                  price={54.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81TAraBXa1L._AC_SX522_.jpg"
              />
          </div>
      </div>
  )
}

export default Home