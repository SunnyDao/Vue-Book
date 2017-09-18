export default {
	install(Vue,options={}){
		Vue.directive('loading',{
			bind(el,binding){
				console.log('bind')
			},
			inserted(el,binding){
				console.log('inserted')
			},
			update(el,binding){
				console.log('update')
			},
			unbind(el,binding){
				console.log('update')
			}
		})
	}
}