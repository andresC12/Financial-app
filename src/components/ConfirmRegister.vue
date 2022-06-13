<template>
	<div class="confirm-main-container">
		<Home v-show="statusHome"></Home>
		<div class="confirm-inner-container" v-show="!statusHome">
			<div class="confirmation-message">
				<div class="circle-icon">
					<i class="fas fa-check"></i>
				</div>
				<h4>¡Registro exitoso!</h4>
			</div>
			<div class="confirmation-code-container">
				<h4>Te enviamos un codigo</h4>
				<h5>Revisa tu bandeja de entrada e ingresa el codigo de 4 digitos</h5>
				<div class="code-number">
					<input type="tel" v-model="code1" id="code1">
					<input type="tel" v-model="code2" id="code2">
					<input type="tel" v-model="code3" id="code3">
					<input type="tel" v-model="code4" id="code4">
				</div>
				<div class="warning" v-show="statusCode">
					<span>Ingresa el codigo</span>
				</div>
				<button @click="open()">Confirmar</button>
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
		outline: none;
		box-shadow: none;
	}

	.confirm-main-container{
		width: 100%;
		height: 100vh;
		display: block;
		background: #fff;
	}

	.confirm-inner-container{
		width: 100%;
		height: auto;
	}

	.confirmation-message{
		width: 100%;
		height: 25vh;
		background: #002C5E;
		text-align: center;
		padding: 40px 0px;
	}

	.circle-icon{
		background: #00BC31;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}

	.circle-icon i{
		color: #fff;
		font-size: 18px;
	}

	.confirmation-message h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 24px;
		color: #fff;
		margin-top: 10px;
	}

	@media(min-width:1200px) {
		.confirmation-code-container{
			margin-top: 0 !important;
		}

		.confirmation-message{
			height: 30vh !important;
		}
	}

	.confirmation-code-container{
		width: 100%;
		height: 60vh;
		background: #fff;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		margin-top: -30px;
		padding: 40px 20px;
	}

	.confirmation-code-container{
		width: 100%;
		text-align: left;
	}

	.confirmation-code-container h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 20px;
		margin-bottom: 10px;
	}

	.confirmation-code-container h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
	}

	.code-number{
		width: 100%;
		height: auto;
		padding: 20px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.code-number input{
		width: 20%;
		padding: 20px 0px 20px 25px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-family: 'Poppins', sans-serif;
		font-size: 25px;
	}

	.code-number input:focus{
		border: 1px solid #002C5E;
	}

	.confirmation-code-container button{
		background: #002C5E;
		border: none;
		border-radius: 5px;
		width: 100%;
		padding: 14px 0px;
		font-family: 'Poppins', sans-serif;
		font-size: 19px;
		font-weight: 500;
		color: #fff;
		margin-top: 50px;
	}

	.confirm-main-container span{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 17px;
		color: red;
	}

	.warning{
		text-align: center;
	}
</style>

<script>
	import Home from './Home.vue';
	export default{
		components:{
			Home
		},
		data(){
			return{
				statusHome: false,
				statusCode: false,
				code1: "",
				code2: "",
				code3: "",
				code4: "",
			}
		},
		watch:{
			code1: function(){
				document.getElementById("code2").focus();
			},
			code2: function(){
				document.getElementById("code3").focus();
			},
			code3: function(){
				document.getElementById("code4").focus();
			}
		},
		methods:{
			open(){
				if(this.code1 == "" && this.code2 == "" && this.code3 == "" && this.code4 == ""){
					this.statusCode = true
				}else{
					location.href = location.origin+"/home";
				}
			}
		},
		mounted(){

		}
	}
</script>