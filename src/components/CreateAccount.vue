<template>
	<div class="sing-up-container">
		<ConfirmRegister v-show="statusConfirm"></ConfirmRegister>
		<div class="sign-up-content" v-show="!statusConfirm">
			<div class="general-title">
				<h4>Crear cuenta</h4>
			</div>
			<div class="figure">
				
			</div>
			<div class="data-container">
				<input type="text" v-model="email" placeholder="Correo electrónico" class="name">
				<div class="two-inputs">
					<input type="text" placeholder="+57" class="code">
					<input type="text" v-model="phone" placeholder="Celular" class="celphone">
				</div>				
				<input type="text" v-model="username" placeholder="Nombre de usuario" class="name">
				<input type="password" v-model="password" placeholder="Ingrese su contraseña" class="phone">
				<input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" class="phone">
			</div>
			<div class="password-tips">
				<h4>Password tips</h4>
				<h5>- Minimo 8 caracteres</h5>
				<h5>- Minimo 2 numeros</h5>
				<h5>- Minimo 8 caracter especial</h5>
				<h5>- Minimo 1 letra mayuscula</h5>
			</div>
			<div class="term-and-cond" @click="changeStatus()">
				<label class="container-check">Acepto los términos y condiciones y politicas de privacidad
  					<input type="checkbox">
 					<span class="checkmark"></span>
				</label>
			</div>
			<div class="button-container">
				<button @click="registerUser()">Registrarme</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	*:focus{
		outline: none !important;
	}

	.error{
		border: 1px solid red !important;
	}

	.password-tips{
		width: 100%;
		padding: 20px 25px 0px 25px;
		text-align: left;
	}

	.password-tips h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
	}

	.password-tips h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 12px;
		margin-top: 3px;
	}

	.two-inputs{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.two-inputs .code{
		width: 20%;
	}

	.two-inputs .celphone{
		width: 78%;
	}

	.sing-up-container{
		width: 100%;
		height: 100vh;
		background: url("https://back.vinapp.co/mensajeria-fondo.png");
		background-size: cover;
		background-position: center bottom;
	}

	.sign-up-content{
		width: 100%;
		padding: 0px 0px 20px 0px;
		height: auto;
		display: block;
	}

	.general-title{
		width: 100%;
		background: #002C5E;
		height: 13vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.general-title h4{
		color: #252529;
		font-size: 20px;
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
	}

	.figure{
		background: #fff;
		border-radius: 20px;
		margin-top: -15px;
		padding: 20px;
		width: 100%;
	}

	.data-container{
		width: 100%;
		padding: 5px 25px 0px 25px;
		display: block;
		text-align: left;
	}

	.data-container label{
		color: #1B1B1D;
		font-weight: 600;
		font-size: 15px;
		font-family: 'Poppins', sans-serif;
	}

	.data-container input{
		width: 100%;
		border: none;
		padding: 18px 12px;
		border-radius: 7px;
		background: #F0F5FE;
		font-family: 'Poppins', sans-serif;
		margin-top: 15px;
		font-size: 15px;
	}

	.term-and-cond{
		width: 100%;
		padding: 35px 25px 0px 25px;
		text-align: left;
	}

	.term-and-cond label{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
		text-align: left;
	}

	.container-check {
	  	display: block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 22px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.container-check input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: #F0F5FE;
		border-radius: 5px;
	}

	/* On mouse-over, add a grey background color */
	.container-check:hover input ~ .checkmark {
	  background-color:#F0F5FE;
	}

	.container-check input:checked ~ .checkmark {
	  background-color: #0A58ED;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
	  content: "";
	  position: absolute;
	  display: none;
	}

	/* Show the checkmark when checked */
	.container-check input:checked ~ .checkmark:after {
	  display: block;
	}

	/* Style the checkmark/indicator */
	.container-check .checkmark:after {
	  left: 9px;
	  top: 5px;
	  width: 5px;
	  height: 10px;
	  border: solid white;
	  border-width: 0 3px 3px 0;
	  -webkit-transform: rotate(45deg);
	  -ms-transform: rotate(45deg);
	  transform: rotate(45deg);
	}

	.button-container{
		width: 100%;
		padding: 20px 25px 0px 25px;
	}

	.button-container button{
		width: 100%;
		border: none;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		border-radius: 7px;
		background: #002C5E;
		color: #fff;
		padding: 14px 10px;
	}

	.copyright{
		width: 100%;
		text-align: center;
		padding-top: 45px;
	}

	.copyright h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
	}

	.copyright span{
		color: #002C5E;
	}
</style>

<script>
	import ConfirmRegister from './ConfirmRegister.vue';
	export default{
		components:{
			ConfirmRegister
		},
		data(){
			return{
				status_politicas: false,
				email: "",
				phone: "",
				username: "",
				password: "",
				confirmPassword: "",
				statusConfirm: false
			}
		},
		methods:{
			changeStatus(){
				this.status_politicas = true;
			},
			registerUser(){
				if ((this.email == "" && this.phone == "" && this.username == "" && this.password == "" && this.confirmPassword == "") || !this.status_politicas) {
					$(".name").addClass("error");
					$(".phone").addClass("error");
					$(".code").addClass("error");
					$(".celphone").addClass("error");
				}else{
					let user = {
						name: this.username,
						email: this.email,
						phone: this.phone,
						password: this.password,
						confirmPassword: this.confirmPassword
					}
					localStorage.setItem('user', JSON.stringify(user));
					this.statusConfirm = true
				}
			}
		},
		mounted(){

		}
	}
</script>