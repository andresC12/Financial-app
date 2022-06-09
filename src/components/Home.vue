<template>
	<div class="home-container">
		<Notification v-show="statusNotification"></Notification>
		<Profile v-show="statusProfile"></Profile>
		<PaymentList v-show="statusPaymentList" @closePaymentList="statusPaymentList = $event"></PaymentList>
		<Afiliate v-show="statusAfiliate" @closeAfiliate="statusAfiliate = $event"></Afiliate>
		<Billing v-show="statusBilling" @closeBillling="statusBilling = $event"></Billing>
		<div class="home-inner-container" v-show="!statusProfile && statusHome 
		&& !statusNotification && !statusPaymentList && !statusAfiliate && !statusBilling">
			<div class="home-header-container">
				<div class="header-image">
					<img src="perfil.png">
				</div>
				<div class="header-text">
					<h4>{{profile_name}}</h4>
					<h5>Mis finanzas</h5>
				</div>
				<div class="header-icon">
					<img src="logout.png" @click="logout()">
				</div>
			</div>
			<div class="home-content">
				<div class="subheader">
					<h4>Solicitudes recientes</h4>
					<h5 @click="statusPaymentList = true">Ver todo</h5>
				</div>
				<div class="recent-payments">
					<div class="single-recent-payment">
						<div class="recent-image">
							<img src="bancolombia.png">
						</div>
						<div class="recent-info">
							<h4>Bancolombia</h4>
							<h5>25/03/2022</h5>
						</div>
						<div class="recent-status">
							<span class="aprobed">Aprobado</span>
						</div>
					</div>
					<div class="single-recent-payment">
						<div class="recent-image">
							<img src="davivienda.jpg">
						</div>
						<div class="recent-info">
							<h4>Davivienda</h4>
							<h5>15/04/2022</h5>
						</div>
						<div class="recent-status">
							<span class="denied">Rechazado</span>
						</div>
					</div>
					<div class="single-recent-payment bn">
						<div class="recent-image">
							<img src="bogota.jpg">
						</div>
						<div class="recent-info">
							<h4>Banco bogota</h4>
							<h5>02/01/2022</h5>
						</div>
						<div class="recent-status">
							<span class="proces">Proceso</span>
						</div>
					</div>
				</div>
				<div class="subheader mt">
					<h4>Marcas afiliadas</h4>
					<h5 @click="statusAfiliate = true">Ver todo</h5>
				</div>
				<div class="afiliate">
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/exito.png">
					</div>
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/linio.png">
					</div>
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/mercado-libre.png">
					</div>
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/sodimac.png">
					</div>
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/alkosto.png">
					</div>
					<div class="single-afiliate" @click="statusBilling = true">
						<img src="/bogota.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="under-menu-container">
			<div class="item-menu" @click="changeToHome(1)">
				<img src="/home.png"/>
			</div>
			<div class="item-menu" @click="changeToHome(2)">
				<img src="/user.png"/>
			</div>
			<div class="item-menu" @click="changeToHome(3)">
				<img src="/bell.png"/>
			</div>
			<div class="item-menu">
				<img src="/setting.png"/>
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

	.bn{
		border: none !important;
	}

	.mt{
		margin-top: 25px;
	}

	@media(min-width:1200px) {
		.home-container{
			width: 60% !important;
			margin: 0 auto;
			height: auto;
		}

		.item-menu img{
			width: 20% !important;
			height: auto;
			cursor: pointer;
		}

		.header-image{
			width: 10% !important;
		}

		.header-image img{
			width: 80% !important; 
		}

		.header-icon{
			width: 7%;
			height: auto;
			text-align: center;
		}

		.header-icon img{
			width: 50% !important;
		}

		.home-content{
			margin-top: -10px !important;
		}

		.home-header-container{
			height: 17vh !important;
		}

		.recent-image img{
			width: 50% !important;
		}
	}

	.home-container{
		width: 100%;
		height: auto;
	}

	.home-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		background: #F8F9FB;
	}

	.under-menu-container{
		width: 100%;
		height: 10vh;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.item-menu{
		width: 20%;
		text-align: center;
	}

	.item-menu img{
		width: 40%;
		height: auto;
	}

	.home-header-container{
		width: 100%;
		height: 14vh;
		background: #002B5C;
		padding: 25px 15px 0px 15px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: nowrap;
	}

	.header-image{
		width: 15%;
		text-align: center;
	}

	.header-image img{
		width: 100%;
		height: auto;
	}

	.header-text{
		width: 78%;
		text-align: left;
		height: auto;
		padding: 0px 0px 0px 16px;
	}

	.header-text h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 19px;
		color: #fff;
		margin-bottom: 0;
		margin-top: 0;
	}

	.header-text h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
		color: #fff;
	}

	.header-icon{
		width: 7%;
		height: auto;
		text-align: center;
	}

	.header-icon img{
		width: 100%;
		height: auto;
		opacity: 1;
		margin-top: 12px;
	}

	.home-content{
		width: 100%;
		height: auto;
		padding: 30px 20px 30px 20px;
		display: block;
		background: #F8F9FB;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-top: -20px;
	}

	.home-content h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 18px;
	}

	.recent-payments{
		width: 100%;
		height: auto;
		display: block;
		background: #fff;
		border-radius: 10px;
		margin-top: 15px;
		padding: 15px 15px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	}

	.single-recent-payment{
		width: 100%;
		height: auto;
		border-bottom: 1px solid #F7F7F7;
		padding: 10px 0px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
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
		width: 60%;
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

	.recent-status .aprobed{
		background: #00BC31;
		border-radius: 15px;
		font-size: 11px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		color: #fff;
		padding: 5px 11px;
	}

	.denied{
		background: #D93025;
		border-radius: 15px;
		font-size: 11px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		color: #fff;
		padding: 5px 11px;
	}

	.proces{
		background: #EF8903;
		border-radius: 15px;
		font-size: 11px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		color: #fff;
		padding: 5px 11px;
	}

	.afiliate{
		width: 100%;
		height: auto;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.single-afiliate{
		width: 31%;
		height: 90px;
		background: #fff;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		border-radius: 10px;
		text-align: center;
		margin-bottom: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.single-afiliate img{
		width: 70%;
		height: auto;
	}

	.subheader{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.subheader h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
		color: #002B5C;
		cursor: pointer;
	}
</style>

<script>
	import Profile from './Profile.vue';
	import Notification from './Notification.vue';
	import PaymentList from './PaymentList.vue';
	import Afiliate from './Afiliate.vue';
	import Billing from './Billing.vue';
	export default{
		components:{
			Profile,
			Notification,
			PaymentList,
			Afiliate,
			Billing
		},
		data(){
			return{
				statusProfile: false,
				statusHome: true,
				statusNotification: false,
				statusPaymentList: false,
				statusAfiliate: false,
				statusBilling: false,
				profile_name: ""
			}
		},
		methods:{
			changeToHome(numero){
				if (numero == 1) {
					this.statusHome = true;
					this.statusProfile = false;
					this.statusNotification = false;
					this.statusPaymentList = false;
					this.statusAfiliate = false;
				}
				if (numero == 2) {
					this.statusHome = false;
					this.statusProfile = true;
					this.statusNotification = false;
					this.statusPaymentList = false;
					this.statusAfiliate = false;
				}
				if (numero == 3) {
					this.statusHome = false;
					this.statusProfile = false;
					this.statusNotification = true;
					this.statusPaymentList = false;
					this.statusAfiliate = false;
				}

			},
			logout(){
				location.href = "/";
			}
		},
		mounted(){
			if (localStorage.getItem('user')) {
				let user = JSON.parse(localStorage.getItem('user'));
				this.profile_name = user.name;
			}
		}
	}
</script>