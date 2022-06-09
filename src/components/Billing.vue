<template>
	<div class="billing-container">
		<Checkout v-if="statusCheckout" @closeCheckout="statusCheckout = $event" :payment="information"></Checkout>
		<div class="billing-inner-container" v-show="!statusCheckout">
			<div class="billing-header" @click="close()">
				<i class="fas fa-chevron-left"></i>
				<h4>Proceso de pago</h4>
			</div>
			<div class="billing-information">
				<h4>Información de compra</h4>
				<input type="text" value="17/05/2022" readonly>
				<input type="text" placeholder="Ingrese la cantidad" v-model="cantidad">
			</div>
			<div class="billing-information-list">
				<h4>Banco de preferencia</h4>
				<div class="single-bank" @click="select(item,index)" v-for="(item, index) in banks" :key="index">
					<div class="bank-image">
						<img :src="item.image" alt="">
					</div>
					<div class="bank-information">
						<h4>{{item.name}}</h4>
					</div>
					<div class="bank-check" v-bind:id="'banco_'+index">
						<i class="fas fa-check"></i>
					</div>
				</div>
			</div>
			<div class="warning" v-show="statusEmpty">
				<span>Debe digitar una cantidad</span>
			</div>
			<button v-show="statusButton" @click="validate()">Continuar</button>
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

	.billing-container{
		width: 100%;
		height: auto;
		display: block;
		background: #F8F9FB;
	}

	.billing-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		padding: 30px 25px 30px 25px;
	}

	.billing-header{
		width: 100%;
		text-align: left;
		display: flex;
		justify-items: flex-start;
		align-items: center;
	}

	.billing-header i{
		margin-right: 10px;
	}

	.billing-header h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 18px;
	}

	.billing-information{
		width: 100%;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #fff;
		padding: 20px 15px;
		margin-top: 20px;
	}

	.billing-information h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.billing-information input{
		margin-top: 10px;
		width: 100%;
		border: 1px solid #ddd;
		border-radius: 6px;
		padding: 12px 8px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.billing-information-list{
		width: 100%;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #fff;
		padding: 20px 15px 10px 15px;
		margin-top: 20px;
	}

	.billing-information-list h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.single-bank{
		width: 100%;
		height: auto;
		padding-bottom: 10px;
		border-bottom: 1px solid #F7F7F7;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top: 10px;
	}

	.bank-image{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #ddd;
	}

	.bank-image img{
		width: 100%;
		height: auto;
	}

	.bank-information{
		width: 73%;
		padding: 0px 10px;
	}

	.bank-check{
		background: #002B5C;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bank-check i{
		color: #fff;
		font-size: 12px;
	}

	.billing-container button{
		margin-top: 20px;
		width: 100%;
		border-radius: 8px;
		color: #fff;
		background: #002B5C;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 17px;
		padding: 14px 0px;
		border: none;
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
	import Checkout from './Checkout.vue';
	export default{
		props: ['destino'],
		components:{
			Checkout
		},
		data(){
			return{
				statusButton: false,
				statusCheckout: false,
				cantidad: "",
				statusEmpty: false,
				bank_selected: "",
				information: "",
				banks: [
					{
						name: "Bancolombia",
						image: "/bancolombia.png"
					},
					{
						name: "Banco Bogota",
						image: "/bogota.jpg"
					},
					{
						name: "Davivienda",
						image: "/davivienda.jpg"
					},
					{
						name: "Mercado libre",
						image: "/mercado-libre.png"
					}
				]
			}
		},
		methods:{
			close(){
				this.$emit('closeBillling',false);
			},
			validate(){
				if (this.cantidad) {
					let ejemplo = {
						banco: this.bank_selected,
						cantidad: this.cantidad,
						destino: this.destino
					}
					localStorage.removeItem('checkout');
					localStorage.setItem("checkout", JSON.stringify(ejemplo));
					this.information = ejemplo;
					this.statusCheckout = true;
				}else{
					this.statusEmpty = true;
					var self = this;
					setTimeout(() =>{
						self.statusEmpty = false
					},2000)
				}
			},
			select(banco, pos){
				this.banks.forEach((item, index) =>{
					document.getElementById("banco_"+index).style.display = "none";
				})
				document.getElementById("banco_"+pos).style.display = "";
				this.bank_selected = banco;
				this.statusButton = true;
			}
		},
		mounted(){
			$(".bank-check").hide();
		}
	}
</script>