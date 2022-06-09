<template>
	<div class="afiliate-container">
		<Billing v-show="statusBilling" @closeBillling="statusBilling = $event" :destino="destiny"></Billing>
		<div class="afiliate-inner-container" v-show="!statusBilling">
			<div class="afiliate-header-content" @click="close()">
				<i class="fas fa-chevron-left"></i>
				<h4>Comercios afiliados</h4>
			</div>
			<div class="afiliate-search">
				<i class="fas fa-search"></i>
				<input type="text" id="buscar" placeholder="Buscar comercios" @keyup="search()">
			</div>
			<div class="all-afiliates-container">
				<div class="single-afiliate-container" v-for="(item, index) in afiliates" :key="index" v-bind:id="'comercio_'+index" @click="openBilling(item)">
					<div class="image-afiliate">
						<img :src="item.image">
					</div>
					<div class="afiliate-information">
						<h4>{{item.name}}</h4>
						<h5>Disponible las 24h</h5>
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

	*:focus{
		outline: none;
		box-shadow: none;
	}

	.bn{
		border: none !important;
	}

	.afiliate-container{
		width: 100%;
		height: auto;
		display: block;
		background: #F8F9FB;
	}

	.afiliate-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		padding: 30px 25px 30px 25px;
	}

	.afiliate-header-content{
		width: 100%;
		height: auto;
		padding: 5px 0px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.afiliate-header-content i{
		margin-right: 10px;
	}

	.afiliate-header-content h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 18px;
	}

	.afiliate-search{
		width: 100%;
		height: auto;
		background: #fff;
		border-radius: 7px;
		padding: 12px 15px;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		margin-top: 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.afiliate-search i{
		font-size: 17px;
		color: #AB9194;
	}

	.afiliate-search input{
		width: 95%;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		border: none;
		padding: 7px 10px;
	}

	.all-afiliates-container{
		width: 100%;
		height: auto;
		background: #fff;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		border-radius: 7px;
		padding: 10px 15px 10px 15px;
		margin-top: 25px;
		display: block;
	}

	.single-afiliate-container{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-bottom: 10px;
		margin-top: 10px;
		border-bottom: 1px solid #F7F7F7;
	}

	.image-afiliate{
		width: 55px;
		height: 55px;
		border-radius: 50%;
		border: 1px solid #ddd;
		overflow: hidden;
	}

	.image-afiliate img{
		width: 100%;
		height: auto;
	}

	.afiliate-information{
		text-align: left;
		padding: 0px 10px;
	}

	.afiliate-information h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.afiliate-information h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 13px;
	}

</style>

<script>
	import Billing from './Billing.vue';
	export default{
		components:{
			Billing
		},
		data(){
			return{
				destiny: "",
				statusBilling: false,
				afiliates:[
					{
						name: "Almacenes Exito",
						image: "/exito.png"
					},
					{
						name: "Mercado libre",
						image: "/mercado-libre.png"
					},
					{
						name: "Linio",
						image: "/linio.png"
					},
					{
						name: "Sodimac",
						image: "/sodimac.png"
					},
					{
						name: "Davivienda",
						image: "/davivienda.jpg"
					}
				]
			}
		},
		methods:{
			close(){
				this.$emit('closeAfiliate',false);
			},
			openBilling(item){
				this.destiny = item;
				this.statusBilling = true;
			},
			search(){
				var texto = document.getElementById('buscar').value;
				if(texto.trim() != ""){
				 	this.afiliates.forEach((item, index) =>{
				 		if(!item.name.trim().toUpperCase().includes(texto.trim().toUpperCase())){
				 			document.getElementById("comercio_"+index).style.display = "none";
				 		}else{
				 			document.getElementById("comercio_"+index).style.display = "";
				 		}
				 	});
				}else{
					this.afiliates.forEach((item, index) =>{
				 		document.getElementById("comercio_"+index).style.display = "";
				 	});
				}
			}
		},
		mounted(){

		}
	}
</script>