import Button from '../../shared/button';
import Title from '../../shared/title';

function Approach() {
  return (
    <section className='section section--approach'>
      <div className='section__body'>
        <div className='approach container'>
          <div className='approach__inner'>
            <Title text='Индивидуальный подход' cls='approach__title' />
            <p className='approach__description'>
              В центре нашей философии лежит индивидуальность. Мы приглашаем вас в мир
              гибкого и индивидуального партнерства. Наша компания с готовностью
              предоставляет уникальные условия сотрудничества для предприятий малого и
              среднего бизнеса, а также для сферы HoReCa. Мы тщательно учитываем
              уникальные потребности каждого клиента и создаем наилучшие возможности
              сотрудничества, гарантируя вам доступ к продукту высочайшего качества
            </p>
            <Button text='Связаться с нами' cls='approach__button' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
