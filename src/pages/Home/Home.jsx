
import birthday1 from '../../assets/birthday1.jpg';
import birthday2 from '../../assets/birthday2.jpg';
import birthday3 from '../../assets/birthday3.jpg';
import birthday4 from '../../assets/birthday4.jpg';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';


const Home = () => {
    
    
    return (
        <div>
            
            <div>
            
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={birthday1} className="w-full brightness-50" />
                        <div className='absolute left-32 right-32 text-center mt-26 ml-28 top-96'>
                            <h1 className='text-4xl text-white font-bold'>May your birthday be filled with joy, laughter, and cherished moments that light up your life! Happy Birthday!</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={birthday2} className="w-full brightness-50" />
                        <div className='absolute left-32 right-32 text-center mt-26 ml-28 top-96'>
                            <h1 className='text-4xl text-white font-bold'>Wishing you a day filled with smiles, laughter, and unforgettable moments. Happy Birthday! May this year bring you endless joy and success.</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={birthday3} className="w-full brightness-50" />
                        <div className='absolute left-32 right-32 text-center mt-26 ml-28 top-96'>
                            <h1 className='text-4xl text-white font-bold'>Wishing you a day filled with happiness, a year filled with love, and a lifetime filled with success. Happy Birthday!</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={birthday4} className="w-full brightness-50" />
                        <div className='absolute left-32 right-32 text-center mt-26 ml-28 top-96'>
                            <h1 className='text-4xl text-white font-bold'>Happy Birthday! May your day be filled with love, laughter, and all the things that make you smile. Heres to another year of joy and amazing adventures!</h1>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                </div>
                
                
            </div>
            <Service></Service>
            
            <div>
                <h2 className='text-6xl text-center font-bold my-10'>Some shocking images <br /> of our previous work</h2>
                <div className='max-w-6xl mx-auto flex justify-between gap-8'>
                    <div className=''>
                        <h1 className='text-4xl mb-10 ml-28 font-semibold'>venues and catering</h1>
                        <div>
                            <div className="h-96 carousel carousel-vertical rounded-box mb-96">
                                <div className="carousel-item h-full ">
                                    <img src="https://i.ibb.co/QM45HLR/birthday-party-places-okc-Altitude-1291.jpg" />
                                </div> 
                                <div className="carousel-item h-full w-full">
                                    <img className='w-full' src="https://i.ibb.co/xG4ndw7/orlando-birthday-party-venue.webp" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/1QX9mxL/1810-tower-of-london-white-tower-web1.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/sR076FZ/birthday-exitic-catering-table-with-modern-desserts-cupcakes-sweets-with-flamingo-delicious-candy-ba.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/yNg1y9C/53c2f0-94716829e7884080861bf142ef6636c5-mv2.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full h-full' src="https://i.ibb.co/YpxX5cj/birthday-photoshoot-ideas-34.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/bm5ScCS/f3557a64835a7520f3c3de82ebab1b88.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl mb-10 ml-28 font-semibold'>venues and catering</h1>
                        <div>
                            <div className="h-96 carousel carousel-vertical rounded-box">
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/37Kmd12/nye-wine-pairing.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/WgPgcnR/animation-soiree-anniversaire-burddy.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/86d2QPG/2022-9-Via-Kai-Birthday-Party-2-e1664568066648.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/gznM5vY/fc98a72dd575583ebc02c666ff75a58e.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/6yC2BmT/8c9a40e5c5ec4c81a4c85289b2a99d5e.jpg" />
                                </div> 
                                <div className="carousel-item h-full">
                                    <img className='w-full' src="https://i.ibb.co/jwyxLwX/birthdays-malibu-palm-spring-3.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <div>

            </div>
        </div>
    );
};

export default Home;