<template>
	<div class="sing-up-container">
		<div class="sign-up-content">
			<div class="general-title">
				<i class="fas fa-chevron-left" @click="close()"></i>
				<h4>Bienvenido</h4>
				<h5></h5>
			</div>
			<div class="figure">
				
			</div>
			<div class="data-container">
				<label for="">Usuario</label>
				<input type="text" name="" v-model="user" placeholder="Ingrese su usuario" class="name">
				<label for="">Contraseña</label>
				<input type="password" name="" v-model="password" placeholder="Ingrese su contraseña" class="phone">
			</div>
			<div class="term-and-cond" @click="changeStatus()" v-show="changes = false">
				<label class="container-check">Acepto los términos y condiciones y politicas de privacidad
  					<input type="checkbox">
 					<span class="checkmark"></span>
				</label>
			</div>
			<div class="denied" v-show="statusWrong">
				<span>Acceso denegado</span>
			</div>
			<div class="acces" v-show="statusCorrect">
				<span>Credenciales correctas</span>
			</div>
			<div class="button-container">
				<button @click="registerUser()">Ingresar</button>
			</div>
			<div class="copyright">
				<h4>Powered by <span v-bind:style="{color : color_botones }">Financial App</span></h4>
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

	.sing-up-container{
		width: 100%;
		height: 100vh;
		background: url("https://back.vinapp.co/mensajeria-fondo.png");
		background-size: cover;
		background-position: center bottom;
	}

	.sign-up-content{
		width: 100%;
		height: auto;
		display: block;
	}

	.general-title{
		width: 100%;
		background: #002C5E;
		height: 13vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 25px;
	}

	.general-title h4{
		color: #252529;
		font-size: 20px;
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
	}

	.general-title i{
		color: #fff;
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
		padding: 20px 25px 0px 25px;
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
		margin-top: 6px;
		font-size: 15px;
	}

	.name{
		margin-bottom: 20px;
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

	.denied{
		width: 90%;
		margin: 0 auto;
		padding: 10px 25px 10px 25px;
		text-align: center;
		border-radius: 10px;
		background: #D93025;
		margin-top: 20px;
	}

	.denied span{
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
	}

	.acces{
		width: 90%;
		margin: 0 auto;
		padding: 10px 25px 10px 25px;
		text-align: center;
		border-radius: 10px;
		background: #00BC31;
		margin-top: 20px;
	}

	.acces span{
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
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
	export default{
		data(){
			return{
				status_politicas: false,
				user: "",
				password: "",
				statusCorrect: false,
				statusWrong: false
			}
		},
		methods:{
			close(){
				this.$emit('closeLogin',false);
			},
			changeStatus(){
				this.status_politicas = true;
			},
			registerUser(){
				if (this.user == "" && this.password == "") {
					$(".name").addClass("error");
					$(".phone").addClass("error");
				}else{
					if (localStorage.getItem('user')) {
						let user = JSON.parse(localStorage.getItem('user'));
						if (user.name == this.user && user.password == this.password) {
							this.statusCorrect = true;
							let uri = location.origin
							location.href = uri+"/home";
						}else{
							var self = this;
							this.statusWrong = true;
							setTimeout(() => {
								self.statusWrong = false;
							},2000)
						}
					}else{
						var self = this;
						this.statusWrong = true;
						setTimeout(() => {
							self.statusWrong = false;
						},2000)
					}
					
				}
			}
		},
		mounted(){

		}
	}
</script>