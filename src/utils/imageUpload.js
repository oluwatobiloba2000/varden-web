import API from '../services/withoutHeader';
import * as Endpoints from '../services/Endpoints';



const imageUpload = file => {
  //upload the file and return a url
  console.log('from the image upload function', file)
		API({
			url: `${Endpoints.api.baseUrl}/api/upload`,
			method: `POST`,
			data: {
        image: file,
      }
		}).then(({ data }) => {
			return data
		}).catch(err => {
      return err
    })
}

export default imageUpload;