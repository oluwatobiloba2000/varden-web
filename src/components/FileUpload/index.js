import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './fileupload.styles';

/**
 * @param {Function} onSelectedImage: onSelectedImage(img/shoot): is a function that accepts the returned
 * value from the file onSelectedImage(img/shoot/anything)
 * @param {String} height: is a string, used the specify the height of the file upload container
 * @param {String} uploadText: is a string, it lets the user no what they are uploading
 * @param {String} imgUrlPreview: the is the url of the image that is gotten from the store
 * @param {String} label: form input label name
 */

class FileUpload extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			preview: '',
			name: '',
			imgUrlPreview: ''
		};
	}
	static propTypes = {
		onSelectedImage: PropTypes.func.isRequired,
		height: PropTypes.string.isRequired,
		uploadText: PropTypes.string.isRequired,
		imgUrlPreview: PropTypes.string,
		label: PropTypes.string.isRequired
	};
	
	onFileChange = e => {
		let reader = new FileReader();
		let shoot = e.target.files[0];
		reader.readAsDataURL(shoot);
		reader.onload = e => {
			this.setState({
				preview: e.target.result,
			});
			this.props.onSelectedImage(shoot);
		};
	};

	componentWillUpdate(nextProps, props) {
		if (this.props.success === true && nextProps !== this.props) {
			this.setState({
				preview: '',
			});
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.imgUrlPreview !== this.props.imgUrlPreview){
			this.setState({imgUrlPreview: nextProps.imgUrlPreview})
		}
	}
	render() {
		const { height, uploadText,label  } = this.props;
		const { preview,imgUrlPreview } = this.state;
		return (
			<Wrapper height={height}>
				{imgUrlPreview ? (
					<div className="preview-image">
						<img src={imgUrlPreview} id="preview" alt="previewupload" />
						<div className="close" onClick={() => this.setState({ imgUrlPreview: '' })}>
							<img src={require('../../assets/cancel.png')} alt="close" />
						</div>
					</div>
				) : (
					<React.Fragment>
						{preview ? (
							<div className="preview-image">
								<img src={preview} id="preview" alt="previewupload" />
								<div className="close" onClick={() => this.setState({ preview: '' })}>
									<img src={require('../../assets/cancel.png')} alt="close" />
								</div>
							</div>
						) : (
							<label htmlFor={label}>
								<img src={require('../../assets/plus.svg')} alt="upload" />
								<Text>{uploadText}</Text>
								<input
									type="file"
									className="up"
									name="upload"
									id={label}
									onChange={e => this.onFileChange(e)}
								/>
							</label>
						)}
					</React.Fragment>
				)}
			</Wrapper>
		);
	}
}

export default FileUpload;
