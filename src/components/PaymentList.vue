<template>
	<div class="pay-list-container">
		<div class="pay-list-inner-container">
			<div class="pay-list-header" @click="close()">
				<i class="fas fa-chevron-left"></i>
				<h4>Consulta de pagos</h4>
			</div>
			<div class="list-payments">
				<div class="single-payment-item">
					<div class="single-payment-header">
						<div class="single-payment-origin">
							<div class="single-image-payment">
								<img src="/bancolombia.png">
							</div>
							<div class="single-information-payment">
								<h4>Origen</h4>
								<h5>Bancolombia</h5>
							</div>
						</div>
						<div class="single-payment-destiny">
							<div class="single-image-payment">
								<img src="/bogota.jpg">
							</div>
							<div class="single-information-payment">
								<h4>Destino</h4>
								<h5>Banco bogota</h5>
							</div>
						</div>
					</div>
					<div class="single-payment-detail">
						<div class="single-payment-detail-header">
							<h4>Detalles</h4>
							<h6>10/05/2022</h6>
						</div>
						<h5><span>Monto solicitado:</span> 340.000</h5>
						<h5><span>Método de pago:</span> Credito</h5>
						<h5><span>Estado del pago:</span> Aprobado</h5>
						<h5><span>Monto aprobado:</span> 500.000</h5>
					</div>
				</div>
				<div class="single-payment-item mt">
					<div class="single-payment-header">
						<div class="single-payment-origin">
							<div class="single-image-payment">
								<img src="/bancolombia.png">
							</div>
							<div class="single-information-payment">
								<h4>Origen</h4>
								<h5>Bancolombia</h5>
							</div>
						</div>
						<div class="single-payment-destiny">
							<div class="single-image-payment">
								<img src="/davivienda.jpg">
							</div>
							<div class="single-information-payment">
								<h4>Destino</h4>
								<h5>Davivienda</h5>
							</div>
						</div>
					</div>
					<div class="single-payment-detail">
						<div class="single-payment-detail-header">
							<h4>Detalles</h4>
							<h6>10/05/2022</h6>
						</div>
						<h5><span>Monto solicitado:</span> 140.000</h5>
						<h5><span>Método de pago:</span> Credito</h5>
						<h5><span>Estado del pago:</span> Aprobado</h5>
						<h5><span>Monto aprobado:</span> 500.000</h5>
					</div>
				</div>
				<div class="single-payment-item mt">
					<div class="single-payment-header">
						<div class="single-payment-origin">
							<div class="single-image-payment">
								<img src="/bancolombia.png">
							</div>
							<div class="single-information-payment">
								<h4>Origen</h4>
								<h5>Bancolombia</h5>
							</div>
						</div>
						<div class="single-payment-destiny">
							<div class="single-image-payment">
								<img src="/sodimac.png">
							</div>
							<div class="single-information-payment">
								<h4>Destino</h4>
								<h5>Sodimac</h5>
							</div>
						</div>
					</div>
					<div class="single-payment-detail">
						<div class="single-payment-detail-header">
							<h4>Detalles</h4>
							<h6>10/05/2022</h6>
						</div>
						<h5><span>Monto solicitado:</span> 140.000</h5>
						<h5><span>Método de pago:</span> De contado</h5>
						<h5><span>Estado del pago:</span> Rechazado</h5>
					</div>
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

	.mt{
		margin-top: 15px;
	}

	.pay-list-container{
		width: 100%;
		height: auto;
		display: block;
		background: #F8F9FB;
	}

	.pay-list-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		padding: 30px 25px 30px 25px;
	}

	.pay-list-header{
		width: 100%;
		text-align: left;
		display: flex;
		justify-items: flex-start;
		align-items: center;
	}

	.pay-list-header i{
		margin-right: 10px;
	}

	.pay-list-header h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 18px;
	}

	.list-payments{
		width: 100%;
		height: auto;
		display: block;
		padding: 20px 0px;
	}

	.single-payment-item{
		width: 100%;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #fff;
		padding: 20px 15px;
	}

	.single-payment-header{
		width: 100%;
		height: auto;
		display: flex;
		justify-items: center;
		align-items: center;
		padding-bottom: 15px;
		border-bottom: 1px solid #F7F7F7;
	}

	.single-payment-origin{
		width: 50%;
		text-align: left;
		display: flex;
		justify-items: flex-start;
		align-items: center;
	}

	.single-payment-destiny{
		width: 50%;
		text-align: right;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.single-image-payment{
		width: 45px;
		height: 45px;
		border-radius: 50%;
		border: 1px solid #ddd;
		overflow: hidden;
	}

	.single-image-payment img{
		width: 100%;
		height: auto;
	}

	.single-information-payment{
		text-align: left;
		padding-left: 10px;
	}

	.single-information-payment h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.single-information-payment h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 12px;
	}

	.single-payment-detail{
		width: 100%;
		padding: 15px 0px 0px 0px;
	}

	.single-payment-detail h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
		margin-bottom: 3px;
	}

	.single-payment-detail span{
		font-weight: 600	;
	}

	.single-payment-detail-header{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 0px;
	}

	.single-payment-detail-header h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 15px;
	}

	.single-payment-detail-header h6{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 11px;
	}

</style>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			close(){
				this.$emit('closePaymentList',false);
			}
		},
		mounted(){

		}
	}
</script>