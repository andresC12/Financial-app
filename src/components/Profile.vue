<template>
	<div class="profile-container">
		<div class="profile-inner-container">
			<div class="profile-information">
				<img src="/perfil.png" id="perfil">
				<h4>{{name}}</h4>
			</div>
			<div class="change-photo">
				<input type="file" name="file" id="file" class="inputfile" @change="getImageBtn"/>
				<label for="file"><i class="fas fa-camera"></i> Cambiar perfil</label>
			</div>
			<div class="basic-information">
				<div class="single-personal-data">
					<div class="icon-acces">
						<i class="fas fa-user"></i>
					</div>
					<div class="personal-text">
						<input type="text" v-model="name">
					</div>
				</div>
				<div class="single-personal-data">
					<div class="icon-acces">
						<i class="fas fa-envelope"></i>
					</div>
					<div class="personal-text">
						<input type="text" v-model="email">
					</div>
				</div>
				<div class="single-personal-data">
					<div class="icon-acces">
						<i class="fas fa-phone"></i>
					</div>
					<div class="personal-text">
						<input type="text" v-model="phone">
					</div>
				</div>
				<div class="single-personal-data bn">
					<div class="icon-acces">
						<i class="fas fa-key"></i>
					</div>
					<div class="personal-text">
						<input type="password" v-model="password">
					</div>
				</div>
			</div>
			<div class="update" v-show="statusUpdate">
				<span>Datos actualizados</span>
			</div>
			<button @click="updateStorage()">Actualizar datos</button>
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

	.change-photo{
		width: 100%;
		padding: 0px 0px 20px 0px;
	}

	.inputfile {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

	.inputfile + label {
	    font-size: 15px;
	    font-weight: 500;
	    padding: 11px 25px;
	    font-family: 'Poppins', sans-serif;
	    color: #fff;
	    background: #002B5C;
	    border-radius: 6px;
	    display: inline-block;
	}

	.inputfile + label {
		cursor: pointer;
	}

	.fa-camera{
		margin-right: 10px !important;
	}

	.update{
		width: 90%;
		margin: 0 auto;
		padding: 8px;
		border-radius: 5px;
		margin-top: 15px;
		background: #00BC31;
		text-align: center;
	}

	.update span{
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 15px;
	}

	.bn{
		border: none !important;
	}

	.profile-container{
		width: 100%;
		height: auto;
		display: block;
	}

	.profile-inner-container{
		width: 100%;
		height: 90vh;
		overflow-y: auto;
		padding-bottom: 30px;
		text-align: center;
		background: #F8F9FB;
	}

	@media(min-width:1200px) {
		.profile-information img{
			width: 30% !important;
		}
	}

	.profile-information{
		width: 100%;
		height: auto;
		text-align: center;
		padding: 20px 105px;
	}

	.profile-information img{
		width: 100%;
		height: auto;
		border-radius: 50%;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		border: 2px solid #ddd;
	}

	.profile-information h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 19px;
		margin-top: 20px;
	}

	.profile-information h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
		margin-top: 5px;
	}

	.basic-information{
		width: 90%;
		background: #fff;
		border-radius: 10px;
		margin: 0 auto;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		display: block;
		padding: 20px 15px;
	}

	.single-personal-data{
		width: 100%;
		height: auto;
		border-bottom: 1px solid #F7F7F7;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.icon-acces{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EBEFF4;
	}

	.icon-acces i{
		color: #002B5C;
	}

	.personal-text {
		width: 80%;
		padding: 0px 15px;
	}

	.personal-text input{
		width: 100%;
		border: none;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 17px;
	}

	.personal-text h4{
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
	}

	.profile-inner-container button{
		width: 90%;
		background: #002B5C;
		margin-top: 20px;
		color: #fff;
		border: none;
		padding: 14px 0px;
		border-radius: 7px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
				name: "",
				email: "",
				phone: "",
				password: "",
				statusUpdate: false,
				image: ""
			}
		},
		methods:{
			updateStorage(){
				var self = this;
				let new_user = {
					name: this.name,
					password: this.password,
					phone: this.phone,
					email: this.email
				}
				localStorage.setItem("user", JSON.stringify(new_user));
				this.statusUpdate = true;
				setTimeout(()=>{
					self.statusUpdate = false;
				},2000)
			},
			getImageBtn(event){
	            //Asignamos la imagen a  nuestra data
	            this.image = event.target.files[0];
	            console.log(this.image)
	            var reader = new FileReader();
	            reader.onload = function (e) {
	              document.getElementById('perfil').src = e.target.result
	            }
	            reader.readAsDataURL(event.target.files[0])
	            
	        }
		},
		mounted(){
			if(localStorage.getItem('user')){
				let user = JSON.parse(localStorage.getItem('user'));
				this.name = user.name;
				this.email = user.email;
				this.phone = user.phone;
				this.password = user.password;
			}
		}
	}
</script>