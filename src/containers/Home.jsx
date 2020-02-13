import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitalstate from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initalState = useInitalstate(API);

  if (initalState.length === 0) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <Header />
      <Search />

      {
        initalState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                initalState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initalState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {
            initalState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;
