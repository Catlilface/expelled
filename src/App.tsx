import './App.css'

function App() {
  const model = (params: Array<number>) => {
    return 0.94 +
           0.147268528 * params[0] -
           0.073886811 * params[1] -
           0.004022699 * params[2] -
           0.008932713 * params[3] +
           0.052367313 * params[4] -
           0.115455552 * params[5]
  }

  const handleExpell = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.target)
    let numbers: Array<number> = []
    for (let value of data.entries()) {
      numbers.push(Number(value[1]))
    }
    
    let result = model(numbers)
    result = result > 1 ? 1 : result 
    result = (1 - result) * 100

    alert('Вероятность отчисления: ' + result.toFixed(0) + '%')
  }
  return (
    <div className="wrapper">
      <h1>🧑‍🎓Отчислен?</h1>
      <p>На этом сайте ты можешь заполнить небольшую информацию о себе и узнать, с какой вероятностью тебя могут отчислить из Московского Политеха!</p>
      <form className="form-wrapper" onSubmit={handleExpell}>
        <div className='form-item'>
          1. Ты стипендиат? 💰
          <div>
            <label htmlFor="p-y">
              Да
              <input required type="radio" name="payment" value='1' id="p-y"   />
            </label>
            <label htmlFor="p-n">
              Нет
              <input required type="radio" name="payment" value='0' id="p-n" />
            </label>
          </div>
        </div>
        <div className='form-item'>
          2. Какой у тебя пол? 👫
          <div>
            <label htmlFor="s-m">
              Мужской
              <input required type="radio" name="sex" value='1' id="s-m"   />
            </label>
            <label htmlFor="s-f">
              Женский
              <input required type="radio" name="sex" value='0' id="s-f" />
            </label>
          </div>
        </div>
        <div className='form-item'>
          3. Сколько тебе лет? 👶
          <div>
            <input required type="number" name="age" id="age" min="1" max="100" />
          </div>
        </div>
        <div className='form-item'>
          4. Какой у тебя факультет? 📚
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
          5. Ты иностранец? 🧕🏻
          <div>
            <label htmlFor="f-y">
              Да
              <input required type="radio" name="foreigner" value='1' id="f-y" />
            </label>
            <label htmlFor="f-n">
              Нет
              <input required type="radio" name="foreigner" value='0' id="f-n"   />
            </label>
          </div>
        </div>
        <div className='form-item'>
          6. На какую форму обучения ты поступаешь? 🌔
          <div>
            <label htmlFor="day">
              Дневная
              <input required type="radio" name="type" value='1' id="day"   />
            </label>
            <label htmlFor="eve">
              Вечерняя
              <input required type="radio" name="type" value='0' id="eve" />
            </label>
          </div>
        </div>
        <button>Рассчитать!</button><br />
      </form>
    </div>
  )
}

export default App
