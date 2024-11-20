import Title from '../../shared/title';
function Price() {
  return (
    <section className='section section--price'>
      <div className='section__body'>
        <div className='price container'>
          <div className='price__inner'>
            <Title text='Выгодная цена' cls='price__title' />
            <p className='price__description'>
              Собственное производство и прямые поставки сырья от надежных производителей
              создают основу для наших преимущественных цен как в розницу, так и оптом.
              Наша способность контролировать каждый этап производства и обеспечивать
              значительные объемы дает нам возможность предлагать вам выгодные тарифы,
              сочетая исключительное качество с доступностью.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
