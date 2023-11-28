import './App.css'

function App() {
  interface Model {
    payment: number,
    sex: number,
    age: number,
    speciality: number,
    foreigner: number,
    type: number
  }

  const model = () => {
    return 
  }

  const handleExpell = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.target)

    for (const pair of data.entries()) {
      console.log(pair[0], pair[1])
    }
  }

  return (
    <div className="wrapper">
      <h1>Отчислен?</h1>
      <p>На этом сайте ты можешь заполнить небольшую информацию о себе и узнать, с какой вероятностью тебя могут отчислить из Московского Политеха!</p>
      <form className="form-wrapper" onSubmit={handleExpell}>
        <div className='form-item'>
          Ты стипендиат?
          <div>
            <label htmlFor="p-y">
              Да
              <input required type="radio" name="payment" value='1' id="p-y" checked readOnly />
            </label>
            <label htmlFor="p-n">
              Нет
              <input required type="radio" name="payment" value='0' id="p-n" />
            </label>
          </div>
        </div>
        <div className='form-item'>
          Какой у тебя пол?
          <div>
            <label htmlFor="s-m">
              Мужской
              <input required type="radio" name="sex" value='1' id="s-m" checked readOnly />
            </label>
            <label htmlFor="s-f">
              Женский
              <input required type="radio" name="sex" value='0' id="s-f" />
            </label>
          </div>
        </div>
        <div className='form-item'>
          Сколько тебе лет?
          <div>
            <input required type="number" name="age" id="age" min="1" max="100" value="18" readOnly />
          </div>
        </div>
        <div className='form-item'>
          Какой у тебя факультет?
          <div>
            <select name="speciality" id="speciality">
              <option value="12">Факультет информационных технологий</option>
              <option value="9">Транспортный факультет</option>
              <option value="8">Факультет машиностроения</option>
              <option value="7">Факультет химической технологии и биотехнологии</option>
              <option value="5">Факультет урбанистики и городского хозяйства</option>
              <option value="4">Факультет экономики и управления</option>
              <option value="1">Институт графики и искусства книги имени В. А. Фаворского (Высшая школа печати и медиаиндустрии)</option>
              <option value="3">Институт издательского дела и журналистики (Высшая школа печати и медиаиндустрии)</option>
              <option value="2">Полиграфический институт (Высшая школа печати и медиаиндустрии)</option>
              <option value="6">Факультет базовых компетенций</option>
              <option value="11">Передовая инженерная школа электротранспорта</option>
            </select>
          </div>
        </div>
        <div className='form-item'>
          Ты иностранец?
          <div>
            <label htmlFor="f-y">
              Да
              <input required type="radio" name="foreigner" value='1' id="f-y" />
            </label>
            <label htmlFor="f-n">
              Нет
              <input required type="radio" name="foreigner" value='0' id="f-n" checked readOnly />
            </label>
          </div>
        </div>
        <div className='form-item'>
          На какую форму обучения ты поступаешь?
          <div>
            <label htmlFor="day">
              Дневная
              <input required type="radio" name="type" value='1' id="day" checked readOnly />
            </label>
            <label htmlFor="eve">
              Вечерняя
              <input required type="radio" name="type" value='0' id="eve" />
            </label>
          </div>
        </div>
        <div className='form-item'>
          <button>Рассчитать!</button>
        </div>
      </form>
    </div>
  )
}

export default App
