import Banner from './Banner';
import NewsLetter from './NewsLetter';
import TopFoods from './TopFoods';
import Feedback from './Feedback';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return(
        <div>
          <Helmet>
            <title>Bite | Home</title>
          </Helmet>
          <Banner></Banner>
          <TopFoods></TopFoods>
          <Feedback></Feedback>
          <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;