import Button from '../../shared/button';

function Hero() {
  return (
    <section className='section section--hero'>
      <div className='section__body'>
        <div className='hero'>
          <div className='hero__inner  container'>
            <Button text='Получить оптовый прайс' cls='hero__button' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
