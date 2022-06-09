<template>
	<div class="login-main-container">
		<Welcome v-show="statusWelcome"></Welcome>
		<CreateAccount v-show="statusCreate"></CreateAccount>
		<div class="login-inner-container" v-show="!statusWelcome && !statusCreate">
			<div class="overlay"></div>
			<div class="login-main">
				<h4>Financial App</h4>
				<h5>Ingresa tus datos</h5>
				<input type="text" placeholder="Usuario" v-model="user" class="phone">
				<input type="password" placeholder="Contraseña" v-model="password" class="phone">
				<button class="login" @click="logIn()">Iniciar sesión</button>
				<button class="account" @click="statusCreate = true">Crear cuenta</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	*:focus{
		outline: none;
		box-shadow: none;
	}

	.overlay{
		position: fixed;
		width: 100%; 
		height: 100%; 
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 40, 85,0.7); 
		z-index: 2;
	}


	.login-inner-container{
		width: 100%;
		height: 100vh;
		background-image: url("/login-back.jpg");
		background-size: cover;
		background-position: center center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-main{
		width: 35%;
		background: #fff;
		padding: 40px 30px 40px 30px;
		border-radius: 20px;
		margin: 0 auto;
		z-index: 3;
	}

	.login-main h4{
		font-family: 'Poppins', sans-serif;
		color: #002B5C;
		font-weight: 600;
		font-size: 30px;
		margin-bottom: 1px;
	}

	.login-main h5{
		font-family: 'Poppins', sans-serif;
		color: #4F4F4F;
		font-weight: 500;
		font-size: 15px;
	}

	.login-inner-container input{
		width: 100%;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 400;
		background: transparent;
		border: 1px solid #ddd;
		border-radius: 7px;
		padding: 13px 15px;
		margin-top: 15px;
	}

	.login-inner-container input:focus{
		border: 2px solid #002B5C !important;
	}

	.login-inner-container .login{
		width: 100%;
		background: #002B5C;
		color: #fff;
		padding: 15px 0px;
		border-radius: 7px;
		border: none;
		cursor: pointer;
		font-size: 17px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
		margin-top: 20px;
	}

	.login-inner-container .account{
		width: 100%;
		background: #fff;
		color: #002B5C;
		padding: 15px 0px;
		border-radius: 7px;
		border: 2px solid #002B5C;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
		margin-top: 10px;
	}

	.error{
		border: 1px solid red !important;
	}
</style>


<script>
	import Welcome from './Welcome.vue';
	import CreateAccount from './CreateAccount.vue';
	export default{
		components: {
		  Welcome,
		  CreateAccount
		},
		data(){
			return{
				statusCreate: false,
				statusWelcome: true,
				user: "",
				password: ""
			}
		},
		methods:{
			validateView(){
		        if (window.matchMedia("(min-width: 1000px)").matches){
		          this.statusWelcome = false;
		        }
		    },
		    logIn(){
		    	if(!this.user && !this.password){
		    		$(".phone").addClass("error");
		    	}else{
		    		location.href = location.origin+"/home";
		    	}
		    }
		},
		mounted(){
			this.validateView();
		}

	}
</script>