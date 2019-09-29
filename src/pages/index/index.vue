<style lang="less" scoped>
	.login-msg {
		padding: 50px;
		text-align: center;
	}
	.msg {
		padding: 50px;
		text-align: center;
		font-size: 20px;
		color: red;
	}
</style>
<template>
	<div>
		<h1>{{title}}</h1>
		<v-header title="首页">
			<router-link slot="left" to="/home">home</router-link>
			<router-link slot="left" to="/upload">upload</router-link>
			<router-link slot="left" to="/dad-to-child">dad-to-child</router-link>
		</v-header>

		
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
		data() {
			return {
				title:'vue2-components'
			}
		},
        computed: mapState({ user: state => state.user }),
    }
</script>