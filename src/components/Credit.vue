<template>
	<div class="credit-container">
		<FinishPayment v-if="finish"></FinishPayment>
		<Debito v-if="statusDebito"></Debito>
		<div class="credit-inner-container" v-show="!finish && !statusDebito">
			<div class="credit-header">
				<div class="back-to" @click="close()">
					<i class="fas fa-chevron-left"></i>
					<h4>Volver</h4>
				</div>
				<div class="title-credit">
					<h4>Solicitud de crédito</h4>
				</div>
			</div>
			<div class="container-fields">
				<div class="change-modality">
					<button class="data" @click="changeView(1)">Datos personales</button>
					<button class="credit" @click="changeView(2)">Datos crediticios</button>
				</div>
				<div class="personal-data" v-show="statusPersonal" >
					<select name="select" class="phone">
					 	<option value="0" disabled selected>Tipo de documento</option>
					 	<option value="1">Tarjeta de identidad</option>
					 	<option value="2">Cédula de ciudadania</option>
					 	<option value="3">Cédula extranjera</option>
					 	<option value="4">Pasaporte</option>
					</select>
					<input type="text"  placeholder="No. de documento" class="phone" v-model="form.documentNumber">
					<input type="text"  placeholder="Nombres" class="phone" v-model="form.name">
					<input type="text"  placeholder="Apellidos" class="phone" v-model="form.last_name">
					<select name="select" class="phone mt">
					 	<option value="0" disabled selected>Género</option>
					 	<option value="1">Masculino</option>
					 	<option value="2">Femenino</option>
					</select>
					<input type="date"  placeholder="Fecha de nacimiento" class="phone" v-model="form.born_date">
					<input type="text"  placeholder="Dirección residencial" class="phone" v-model="form.address">
					<input type="text"  placeholder="Correo eléctronico" class="phone" v-model="form.email">
					<input type="text"  placeholder="Celular" class="phone" v-model="form.phone">
					<div class="warning" v-show="statusEmpty">
						<span>Los campos son obligatorios</span>
					</div>
					<button @click="changeView(2)">Continuar</button>
				</div>
				<div class="personal-data-credit" v-show="statusCredit">
					<input type="text"  placeholder="Monto de la solicitud" class="phone" v-model="form.amount">
					<select name="select" class="phone mt">
					 	<option value="0" disabled selected>Estado Civil</option>
					 	<option value="1">Soltero</option>
					 	<option value="2">Casado</option>
					 	<option value="3">Divorciado</option>
					</select>
					<input type="text"  placeholder="Número de personas a cargo" class="phone" v-model="form.personNumber">
					<select name="select" class="phone mt">
					 	<option value="0" disabled selected>Nivel de estudio</option>
					 	<option value="1">Basico primaria</option>
					 	<option value="2">Bachiller</option>
					 	<option value="3">Profesional</option>
					 	<option value="4">Especialista</option>
					</select>
					<select name="select" class="phone mt">
					 	<option value="0" disabled selected>Tipo de persona</option>
					 	<option value="1">Persona natural</option>
					 	<option value="2">Persona juridica</option>
					</select>
					<select name="select" class="phone mt">
					 	<option value="0" disabled selected>Tipo de residencia</option>
					 	<option value="1">Arrendada</option>
					 	<option value="2">Vivienda propia</option>
					</select>
					<div class="warning" v-show="statusEmpty2">
						<span>Los campos son obligatorios</span>
					</div>
					<button @click="changeView(1)">Finalizar solititud</button>
				</div>
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

	.mt{
		margin-top: 15px;
	}

	.error{
		border: 1px solid red !important;
	}

	.credit-container{
		width: 100%;
		height: auto;
		display: block;
		background: #fff;
	}

	.credit-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
	}

	.credit-header{
		width: 100%;
		height: auto;
		padding: 20px 0px 30px 0px;
		background: #002B5C;
	}

	.back-to{
		width: 100%;
		height: auto;
		padding: 0px 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.back-to h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 17px;
		color: #fff;
	}

	.back-to i{
		font-size: 15px;
		color: #fff;
		margin-right: 10px;
	}

	.title-credit{
		width: 100%;
		height: auto;
		text-align: center;
		padding: 15px 0px;
	}

	.title-credit h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 21px;
		color: #fff;
	}

	.container-fields{
		width: 100%;
		height: auto;
		padding: 30px 15px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		margin-top: -15px;
		background: #fff;
	}

	.change-modality{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.change-modality button{
		width: 46%;
		border: none;
		background: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		padding: 0px 0px 8px 0px;
	}

	.custom-border{
		border-bottom: 2px solid #002B5C !important;
	}

	.personal-data{
		width: 100%;
		padding: 15px 0px;
	}

	.personal-data input{
		width: 100%;
		border: none;
		padding: 18px 12px;
		border-radius: 7px;
		background: #F0F5FE;
		font-family: 'Poppins', sans-serif;
		margin-top: 15px;
		font-size: 15px;
	}

	input[type="date"]{
		-webkit-appearance: none !important;
	}

	.credit-container select{
		width: 100%;
		padding-top: 18px;
		padding-bottom: 18px;
		padding-left: 8px;
		padding-right: 15px;
		color: #51565A;
		background-color: #EAF0FD;
		cursor: pointer;
		border: none;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		border-radius: 7px;
		appearance: none;
		-webkit-appearance: none;
		background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
		background-repeat: no-repeat;
		background-size: 28px;
		background-position-x: 97%;
	  	background-position-y: 12px;
	}

	.personal-data button{
		width: 100%;
		height: auto;
		margin-top: 20px;
		background: #002B5C;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 13px 0px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.personal-data-credit{
		width: 100%;
		padding: 15px 0px;
	}

	.personal-data-credit input{
		width: 100%;
		border: none;
		padding: 18px 12px;
		border-radius: 7px;
		background: #F0F5FE;
		font-family: 'Poppins', sans-serif;
		margin-top: 15px;
		font-size: 15px;
	}

	.personal-data-credit button{
		width: 100%;
		height: auto;
		margin-top: 20px;
		background: #002B5C;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 13px 0px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.warning{
		width: 100%;
		text-align: center;
		padding: 15px 0px;
	}

	.warning span{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		color: red;
	}

</style>

<script>
	import Debito from './Debito.vue';
	import FinishPayment from './FinishPayment.vue';
	export default{
		components:{
			FinishPayment,
			Debito
		},
		data(){
			return{
				statusDebito: false,
				statusEmpty: false,
				statusEmpty2: false,
				finish: false,
				statusPersonal: true,
				statusCredit: false,
				form:{
					documentType: "",
					documentNumber: "1065842122",
					name: "Juan felipe",
					last_name: "Maldonado",
					genre: "",
					born_date: "27/05/1998",
					address: "Calle 26#23-23",
					email: "JFelipe@gmail.com",
					phone: "3218192314",
					amount: "250000",
					civil: "",
					personNumber: "2",
					study: "",
					personType: "",
					residence: ""
				}
			}
		},
		methods:{
			close(){
				this.$emit('closeCredit',false);
			},
			finishView(){
				this.finish = true;
			},
			changeView(numero){
				if (numero == 1) {
					if(!this.form.amount && !this.form.civil && !this.form.personNumber && !this.form.study && !this.form.personType && !this.form.residence){
						this.statusEmpty2 = true;
					}else{
						$(".data").addClass("custom-border");
						$(".credit").removeClass("custom-border");
						this.statusCredit = false;
						this.statusPersonal= true;
						localStorage.setItem("amount", this.form.amount);
						//this.finish = true;
						this.statusDebito = true;
					}
						
				}
				if (numero == 2) {
					if(!this.form.documentType && !this.form.documentNumber && !this.form.name && !this.form.last_name && !this.form.genre && !this.born_date && !this.form.address && !this.form.email && !this.form.phone){
						this.statusEmpty = true;
					}else{
						$(".data").removeClass("custom-border");
						$(".credit").addClass("custom-border");
						this.statusCredit = true;
						this.statusPersonal= false;
					}
					
				}
			}
		},
		mounted(){
			$(".data").addClass("custom-border");
		}
	}
</script>