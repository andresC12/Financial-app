<template>
	<div class="checkout-container">
		<Credit v-show="statusCredit" @closeCredit="statusCredit = $event"></Credit>
		<FinishPayment v-show="statusPayment"></FinishPayment>
		<div class="checkout-inner-container" v-show="!statusCredit && !statusPayment">
			<div class="checkout-header">
				<div class="back-to" @click="close()">
					<i class="fas fa-chevron-left"></i>
					<h4>Volver</h4>
				</div>
				<div class="amount-total">
					<h4>${{Intl.NumberFormat("de-DE").format(info.cantidad)}}</h4>
					<h5>Monto a transferir</h5>
				</div>
				<div class="security">
					<h4>Tranferencias 100% seguras</h4>	
				</div>
			</div>
			<div class="checkout-detail">
				<div class="detail-header">
					<h4>Informacion de la transferencia</h4>
				</div>
				<div class="origin-destiny">
					<h4>Origen</h4>
					<div class="movement-detail">
						<h4 v-if="info">{{info.banco.name}}</h4>
						<h5 class="wrong">${{Intl.NumberFormat("de-DE").format(info.cantidad)}}</h5>
					</div>
					<h4 class="mt">Destino</h4>
					<div class="movement-detail">
						<h4 v-if="info">{{info.destino.name}}</h4>
						<h5 class="success">${{Intl.NumberFormat("de-DE").format(info.cantidad)}}</h5>
					</div>
				</div>
				<div class="options-payment">
					<h4>Método de pago</h4>
					<div class="payment-methods">
						<button @click="openPayment(1)">Solicitar credito</button>
						<button @click="openPayment(2)">Pago directo</button>
					</div>
				</div>
				<div class="payment-gateway" v-show="statusGateway">
					<h4>Pasarelas de pago</h4>
					<div class="payment-colletion">
						<div class="single-collection otem payu" @click="openButton(1)">
							<img src="/payu.png">
						</div>
						<div class="single-collection efecty" @click="openButton(2)">
							<img src="/efecty.png">
						</div>
						<div class="single-collection pse" @click="openButton(3)">
							<img src="/pse.webp">
						</div>
					</div>
				</div>
				<div class="credit-request" v-show="statusCredito">
					<h4>Solicitud de credito</h4>
					<button @click="statusCredit = true">Continuar</button>
				</div>
				<div class="finish-transfer" v-show="statusTranfer">
					<button @click="statusPayment = true">Realizar transferencia</button>
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
		margin-top: 10px;
	}

	.success{
		color: #0DC143;
	}

	.wrong{
		color: #FF0101;
	}

	.checkout-container{
		width: 100%;
		height: auto;
		display: block;
		background: #fff;
	}

	.checkout-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
	}

	.checkout-header{
		width: 100%;
		height: auto;
		padding: 20px 0px 0px 0px;
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

	.amount-total{
		width: 100%;
		text-align: center;
		padding: 30px 0px;
	}

	.amount-total h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 35px;
		color: #fff;
	}

	.amount-total h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
		color: #fff;
	}

	.security{
		width: 100%;
		height: auto;
		padding: 25px 20px 45px 20px; 
		background: #2699FB;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.security h4{
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.checkout-detail{
		background: #fff;
		width: 100%;
		height: auto;
		padding: 20px 25px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		margin-top: -20px;
	}

	.detail-header{
		width: 100%;
		height: auto;
		padding: 0px 0px 10px 0px;
	}

	.detail-header h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 17px;
	}

	.origin-destiny{
		width: 100%;
		height: auto;
		display: block;
		text-align: left;
		padding: 10px 0px;
	}

	.origin-destiny h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 18px;
	}

	.movement-detail{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0px;
		border-bottom: 1px solid #F7F7F7;
	}

	.movement-detail h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 16px;
	}

	.movement-detail h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 15px;
	}

	.options-payment{
		width: 100%;
		height: auto;
		padding: 10px 0px;
	}

	.options-payment h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 17px;
	}

	.payment-methods{
		width: 100%;
		height: auto;
		padding: 10px 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.payment-methods button{
		width: 48%;
		background: #fff;
		border: 2px solid #002B5C;
		color: #002B5C;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
		padding: 8px 0px;
		border-radius: 8px;
	}

	.payment-methods button:focus{
		background: #002B5C;
		color: #fff;
	}

	.payment-gateway{
		width: 100%;
		height: auto;
		padding: 10px 0px;
	}

	.payment-gateway h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 17px;
	}

	.payment-colletion{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 10px 0px;
	}

	.single-collection{
		width: 28%;
		text-align: center;
		border: 1px solid #ddd;
		border-radius: 8px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	.single-collection img{
		width: 100%;
		height: auto;
	}

	.otem{
		padding: 15px;
	}

	.border{
		border: 2px solid #002B5C;
	}

	.credit-request{
		width: 100%;
		height: auto;
		padding: 10px 0px;
	}

	.credit-request h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 17px;
	}

	.credit-request button{
		width: 100%;
		height: auto;
		margin-top: 10px;
		background: #2699FB;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 13px 0px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.finish-transfer{
		width: 100%;
		height: auto;
		padding: 10px 0px;
	}

	.finish-transfer button{
		width: 100%;
		height: auto;
		margin-top: 10px;
		background: #002B5C;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 13px 0px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

</style>

<script>
	import Credit from './Credit.vue';
	import FinishPayment from './FinishPayment.vue';
	export default{
		props: ['payment'],
		components:{
			Credit,
			FinishPayment
		},
		data(){
			return{
				info: "",
				statusPayment: false,
				statusGateway: false,
				statusCredito: false,
				statusTranfer: false,
				statusCredit: false
			}
		},
		methods:{
			close(){
				this.$emit('closeCheckout',false);
			},
			openPayment(codigo){
				if (codigo == 1) {
					this.statusCredito = true;
					this.statusGateway= false;
					this.statusTranfer = false;
				}
				if (codigo == 2) {
					this.statusCredito = false;
					this.statusGateway= true;
				}
			},
			openButton(numero){
				if(numero == 1){
					$(".payu").addClass("border");
					$(".efecty").removeClass("border");
					$(".pse").removeClass("border");
					this.statusTranfer = true
				}
				if(numero == 2){
					$(".payu").removeClass("border");
					$(".efecty").addClass("border");
					$(".pse").removeClass("border");
					this.statusTranfer = true
				}
				if(numero == 3){
					$(".payu").removeClass("border");
					$(".efecty").removeClass("border");
					$(".pse").addClass("border");
					this.statusTranfer = true
				}
			}
		},
		mounted(){
			if(localStorage.getItem('checkout')){
				var self = this;
				setTimeout(() => {
					self.info = JSON.parse(localStorage.getItem('checkout'));
					console.log(self.info);
				},500)
			}
		}
	}
</script>