import Title from '../../shared/title';

function Quality() {
  return (
    <section className='section section--quality'>
      <div className='section__body'>
        <div className='quality'>
          <div className='quality__inner  container'>
            <Title text='Гарантия качества' cls='quality__title' />
            <p className='quality__subtitle'>
              На нашем производстве мы используем передовые технологии обжарки зерна,
              которые обеспечивают полный контроль над ароматом, текстурой и вкусом.
              Контроль качества обжарки на каждом этапе. Мы гарантируем поставки только
              высококачественного готового продукта с равномерной степенью обжарки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
