import CarouselBootstrap from 'react-bootstrap/Carousel';

const Carousel = ({items}) => {

    // item = {img: "", title: "", description: ""};

    return (
        <div className='banner'>
            <CarouselBootstrap>
                {
                    items.map((value, index) => {
                        return (
                            <CarouselBootstrap.Item key={index}>
                                <img 
                                    className='w-100'
                                    src={value['img']}
                                    alt={'description'}
                                />
                                <CarouselBootstrap.Caption>
                                    <h3>{value['title']}</h3>
                                    <p>{value['description']}</p>
                                </CarouselBootstrap.Caption>
                            </CarouselBootstrap.Item>
                        )
                    })
                }
            </CarouselBootstrap>
        </div>
    )
}

export default Carousel;