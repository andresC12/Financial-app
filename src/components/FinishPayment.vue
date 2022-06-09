<template>
	<div class="finish-container">
		<div class="finish-container-inner">
			<div class="content-notification">
				<div class="notification-image">
					<img src="/checked.png">
				</div>
				<div class="notification-message">
					<h4>¡Pago exitoso!</h4>
					<h5>Gracias por usar nuestro servicios</h5>
				</div>
				<div class="notification-detail">
					<div class="single-invoice">
						<h4>ID de transferecia</h4>
						<h5>23983948</h5>
					</div>
					<div class="single-invoice">
						<h4>Fecha</h4>
						<h5>18/05/2022</h5>
					</div>
					<div class="single-invoice">
						<h4>Estado</h4>
						<h5>Aprobada</h5>
					</div>
					<div class="single-invoice bn">
						<h4>Total</h4>
						<h5>${{Intl.NumberFormat("de-DE").format(info.cantidad)}}</h5>
					</div>
					<button @click="close()">Volver al inicio</button>
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

	.bn{
		border: none !important;
	}

	@media(min-width:1200px) {
		.notification-image img{
			width: 10% !important;
		}

		.content-notification{
			height: 80vh !important;
		}
	}
	
	.finish-container{
		width: 100%;
		height: auto;
		display: block;
		background: #002B5B;
	}

	.finish-container-inner{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content-notification{
		width: 85%;
		height: 70vh;
		background: #fff;
		border-radius: 10px;
		padding: 40px 0px;
	}

	.notification-image{
		width: 100%;
		height: auto;
		text-align: center;
	}

	.notification-image img{
		width: 35%;
		height: auto;
	}

	.notification-message{
		width: 100%;
		height: auto;
		text-align: center;
		padding: 15px 0px;
	}

	.notification-message h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 21px;
	}

	.notification-message h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.notification-detail{
		width: 100%;
		height: auto;
		padding: 10px 15px;
	}

	.single-invoice{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0px 10px 0px;
		border-bottom: 1px solid #F7F7F7;
	}

	.single-invoice h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.single-invoice h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
	}

	.notification-detail button{
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

</style>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				info: ""
			}
		},
		methods:{
			close(){
				location.reload();
			}
		},
		mounted(){
			if(localStorage.getItem('checkout')){
				var self = this;
				setTimeout(() => {
					self.info = JSON.parse(localStorage.getItem('checkout'));
				},500)
			}
		}
	}
</script>