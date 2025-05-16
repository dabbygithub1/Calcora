import './RegistrationPage.css';


const RegistrationPage = () => {
  	return (
    		<div className="w-light">
      			<div className="footer">
        				<div className="container">
          					<div className="heading-3">Calcora</div>
          					<div className="div">
            						<p className="p">Современный сервис для расчёта зарплаты с учетом</p>
            						<p className="p">больничных и других факторов.</p>
          					</div>
          					<div className="heading-31">Контакты</div>
          					<div className="list">
            						<div className="link">
              							<img className="svg-icon" alt="" src="SVG.svg" />
              							<div className="vladpashkevich88gmailcom">vladpashkevich88@gmail.com</div>
            						</div>
            						<div className="link1">
              							<img className="svg-icon" alt="" src="SVG.svg" />
              							<div className="div1">+375 (29) 237-19-27</div>
            						</div>
          					</div>
          					<div className="calcora">© 2025 Calcora. Все права защищены.</div>
        				</div>
      			</div>
      			<div className="nav">
        				<b className="link-calcora">Calcora</b>
        				<div className="link2">
          					<div className="div2">Главная</div>
        				</div>
        				<div className="link3">
          					<img className="svg-icon2" alt="" src="/assets/icons/calculatorshapka.svg" />
          					<div className="div3">Калькулятор</div>
        				</div>
        				<div className="link4">
          					<img className="svg-icon2" alt="" src="/assets/icons/chemodanshapka.svg" />
          					<div className="div4">Профессии</div>
        				</div>
        				<div className="link5">
          					<img className="svg-icon2" alt="" src="/assets/icons/phoneshapka.svg" />
          					<div className="div5">Контакты</div>
        				</div>
        				<div className="link6">
          					<img className="svg-icon2" alt="" src="/assets/icons/infoshapka.svg" />
          					<div className="div6">О нас</div>
        				</div>
        				<div className="link7">
          					<div className="div7">Войти</div>
        				</div>
        				<div className="link8">
          					<div className="div8">Зарегистрироваться</div>
        				</div>
      			</div>
      			<div className="main">
        				<div className="heading-2">Создать аккаунт</div>
        				<div className="div9">{`Уже есть аккаунт? `}</div>
        				<div className="link9">
          					<div className="div10">Войдите</div>
        				</div>
        				<div className="form">
          					<div className="label">Имя</div>
          					<div className="input">
            						<div className="container1">
              							<div className="div11">Ваше имя</div>
            						</div>
          					</div>
          					<div className="label-email">Email</div>
          					<div className="input1">
            						<div className="container1">
              							<div className="emailexamplecom">email@example.com</div>
            						</div>
          					</div>
          					<div className="label1">Пароль</div>
          					<div className="input2">
            						<div className="container1">
              							<div className="div12">••••••••</div>
            						</div>
          					</div>
          					<img className="button-icon" alt="" src="Button.svg" />
          					<div className="label2">Подтверждение пароля</div>
          					<div className="input3">
            						<div className="container1">
              							<div className="div12">••••••••</div>
            						</div>
          					</div>
          					<img className="button-icon1" alt="" src="Button.svg" />
          					<div className="input4" />
          					<div className="label3">
            						<div className="div14">{`Я соглашаюсь с `}</div>
            						<div className="link10">
              							<div className="div15">правилами пользования</div>
            						</div>
            						<div className="div16">{` и `}</div>
            						<div className="link11">
              							<div className="div17">политикой</div>
              							<div className="div18">конфиденциальности</div>
            						</div>
          					</div>
          					<div className="button">
            						<div className="div19">Зарегистрироваться</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default RegistrationPage;
