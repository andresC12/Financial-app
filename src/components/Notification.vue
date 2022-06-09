<template>
	<div class="notification-container">
		<div class="notification-inner-container">
			<div class="notification-header">
				<i class="fas fa-left-long"></i>
				<h4>Notificaciones</h4>
			</div>
			<div class="yer-notification-container">
				<div class="single-recent-payment">
					<div class="recent-image">
						<img src="bancolombia.png">
					</div>
					<div class="recent-info">
						<h4>Bancolombia</h4>
						<h5>Solicitud en revisión</h5>
					</div>
					<div class="recent-status">
						<span>14:02</span>
					</div>
				</div>
				<div class="single-recent-payment">
					<div class="recent-image">
						<img src="davivienda.jpg">
					</div>
					<div class="recent-info">
						<h4>Davivienda</h4>
						<h5>Pago de rembolso</h5>
					</div>
					<div class="recent-status">
						<span>16:42</span>
					</div>
				</div>
				<div class="single-recent-payment">
					<div class="recent-image">
						<img src="exito.png">
					</div>
					<div class="recent-info">
						<h4>Exito</h4>
						<h5>Compra recibida</h5>
					</div>
					<div class="recent-status">
						<span>9:22</span>
					</div>
				</div>
				<div class="single-recent-payment">
					<div class="recent-image">
						<img src="linio.png">
					</div>
					<div class="recent-info">
						<h4>Linio</h4>
						<h5>Consignación</h5>
					</div>
					<div class="recent-status">
						<span>18:22</span>
					</div>
				</div>
			</div>
			<div class="today-nofitication-container">
				<h4>Hoy</h4>
				<div class="single-recent-payment">
					<div class="recent-image">
						<img src="bogota.jpg">
					</div>
					<div class="recent-info">
						<h4>Banco bogota</h4>
						<h5>Solicitud de prestamo</h5>
					</div>
					<div class="recent-status">
						<span>14:02</span>
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

	@media(min-width:1200px) {
		.recent-image img{
			width: 60% !important;
		}
	}

	.notification-container{
		width: 100%;
		background: #F8F9FB;
	}

	.notification-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		padding: 30px 25px 30px 25px;
	}

	.notification-header{
		width: 100%;
		text-align: left;
	}

	.notification-header h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 19px;
	}

	.yer-notification-container{
		width: 100%;
		display: block;
		height: auto;
		padding: 15px 0px;
	}

	.single-recent-payment{
		width: 100%;
		height: auto;
		border-bottom: 1px solid #F7F7F7;
		padding: 10px 10px;
		display: flex;
		border-radius: 7px;
		justify-content: flex-start;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #fff;
		margin-top: 14px;
	}

	.recent-image{
		width: 17%;
		text-align: center;
	}

	.recent-image img{
		width: 100%;
		height: auto;
		border-radius: 50%;
		border: 1px solid #ddd;
	}

	.recent-info{
		width: 68%;
		text-align: left;
		padding: 0px 10px;
	}

	.recent-info h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 17px;
	}

	.recent-info h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
	}

	.today-nofitication-container{
		width: 100%;
		text-align: center;
		padding: 15px 0px;
	}

	.today-nofitication-container h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.recent-status span{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
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
			
		},
		mounted(){

		}
	}
</script>