import { https } from './config'

export default	{

	salvar:(produtos)=>{
		return https.post('produtos',produtos);
  },
    
	atualizar:(produtos)=>{
		return https.put('produtos',produtos);
  },

  listar:()=>{
		return https.get('produtos')
  },
    
	apagar:(produtos)=>{
		return https.delete('produtos', { data: produtos })
	}
}