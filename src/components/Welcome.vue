<template>
	<div class="welcome-main-container">
		<MobileLogin v-show="statusLogin" @closeLogin="statusLogin = $event"></MobileLogin>
		<CreateAccount v-show="statusAccount" @closeAccount="statusAccount = $event"></CreateAccount>
		<div class="welcome-inner-container" v-show="!statusLogin && !statusAccount">
			<div class="container-img w-100">
				<img src="/login.png">
			</div>
			<div class="container-copy w-100">
				<h4>Financial App</h4>
				<h5>Realizar tus pagos y solicitudes de credito nunca habia sido tan facil.</h5>
			</div>
			<div class="container-button w-100">
				<button class="account" @click="statusAccount = true">Crear cuenta</button>
				<button class="login" @click="login()">Iniciar sesión</button>
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

	.w-100{
		width: 100%;
	}

	.w-100 img{
		width: 100%;
		height: auto;
		padding: 40px;
	}

	.container-img{
		width: 100%;
		height: auto;
	}

	.container-copy{
		width: 100%;
		height: auto;
		text-align: left;
		padding: 50px 20px 15px 20px;
	}

	.container-copy h4{
		font-size: 27px;
		color:#fff;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
	}

	.container-copy h5{
		padding-top: 10px;
		font-size: 16px;
		color:#fff;
		font-weight: 400;
		font-family: 'Poppins', sans-serif;
	}

	.container-button{
		width: 100%;
		height: auto;
		padding: 30px 20px 15px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.login{
		width: 48%;
		background: #fff;
		color: #002855;
		border: none;
		border-radius: 10px;
		font-family: 'Poppins', sans-serif;
		font-size: 19px;
		padding: 10px 0px;
	}

	.account{
		width: 48%;
		background: #002855;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 10px;
		font-family: 'Poppins', sans-serif;
		font-size: 19px;
		padding: 10px 0px;
	}


	.welcome-main-container{
		width: 100%;
		height: auto;
		display: block;
	}

	.welcome-inner-container{
		width: 100%;
		height: 100vh;
		background-image: linear-gradient(320deg, #002855 0%, #00346f 100%);
	}

</style>


<script>
	import MobileLogin from "./MobileLogin.vue";
	import CreateAccount from "./CreateAccount.vue";
	export default{
		components: {
		  MobileLogin,
		  CreateAccount
		},
		data(){
			return{
				statusLogin: false,
				statusAccount: false,
			}
		},
		methods:{
			login(){
				this.statusLogin = true;
			}
		},
		mounted(){

		}

	}
</script>