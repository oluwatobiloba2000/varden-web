import styled from 'styled-components';
import colors from '../../colors';

export const Wrapper = styled.div`
	width:100%;
	img{
		width:100px;
		object-fit:cover;
		margin:50px 0 100px 0;
	}
`

export const Content = styled.div`
	width:100%;
	padding:20px;
	background-color:#fff;
	box-shadow:2px 2px 4px #f3f3f3;
	border-top:5px solid ${colors.mainColor};
	text-align:center;
	border-radius:3px;
`