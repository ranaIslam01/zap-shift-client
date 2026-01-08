import React from 'react';
import Hero from './Hero';
import How_It_Works from '../../Components/Home/How It Works/How_It_Works';
import Our_Services from '../../Components/Home/Our Services/Our_Services';
import Seales_Teams from '../../Components/Home/Seales Teams/Seales_Teams';
import Merchant from '../../Components/Home/Merchant/Merchant';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import FAQ from '../../Components/Home/FAQ/FAQ';

const Home = () => {
   return (
      <div>
         <section>
            <Hero/>
         </section>
         <section>
            <How_It_Works/>
         </section>
         <section>
            <Our_Services/>
         </section>
         <section>
            <Seales_Teams/>
         </section>
         <section>
            <Merchant/>
         </section>
         <section>
            <Testimonial/>
         </section>
         <section>
            <FAQ/>
         </section>
      </div>
   );
};

export default Home;