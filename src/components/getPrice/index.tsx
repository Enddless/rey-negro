import Button from '../../shared/button';
import video from 'public/video/video.mp4';

function GetPrice() {
  return (
    <section className='section section--get-price' id='Прайс'>
      <div className='section__body'>
        <div className='get-price container'>
          <div className='get-price__inner'>
            <div className='get-price__video'>
              <video src={video} autoPlay muted loop></video>
            </div>
            <div className='get-price__body'>
              <div className='get-price__description'>
                <p>Получите оптовый прайс прямо сейчас!</p>
                <p>Специальное предложение для корпоративных клиентов.</p>
                <p>
                  Индивидуальные условия для вашего бизнеса — идеально подходит для
                  офисов, ресторанов, кофеен и отелей!
                </p>
              </div>
              <form className='get-price__form'>
                <div className='get-price__input-wrapper'>
                  <input
                    type='text'
                    className='get-price__input get-price__input--name'
                    placeholder='Имя'
                    required
                  />
                </div>
                <div className='get-price__input-wrapper'>
                  <input
                    type='email'
                    className='get-price__input get-price__input--email'
                    placeholder='E-mail'
                    required
                  />
                </div>
                <div className='get-price__input-wrapper'>
                  <input
                    type='tel'
                    className='get-price__input get-price__input--phone'
                    placeholder='Телефон'
                    required
                  />
                </div>
                <Button
                  text='Получить оптовый прайс'
                  cls='get-price__button'
                  typeBtn='submit'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetPrice;
