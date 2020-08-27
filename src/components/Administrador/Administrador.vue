<template>
	<b-container v-show="is_admin">
		<h3>Panel de administrador</h3>
	</b-container>
</template>

<script>
import {router} from "../../helpers/router";
export default {
	name: "Administrador",
	data() {
		return {
			is_admin: false,
		};
	},
	methods: {
		comprobarCredenciales() {
			const admin = true;
			if (admin) {
				this.is_admin = true;
			} else {
				this.is_admin = false;
				alert("Credenciales de admin erroneos");
				router.push("/");
			}
		},
	},
	beforeMount() {
		this.comprobarCredenciales();
	},
};
</script>

<style></style>
