export const reduceSize = (size) => {
	if( size === '1000' ) {
		return {
			borderRadius: '50%',
			height: '80px',
			width: '80px',
			display: 'inline-block',
			background: '#0000fc',
			fontSize: '10px',
			color: '#fff'
		}
	}

	else if( size === 'unknown' ) {
		return {
			borderRadius: '50%',
			height: '60px',
			width: '60px',
			display: 'inline-block',
			background: '#ff00ff',
			fontSize: '10px'
		}
	}

	else{
		const sizeValue = parseInt( size );
		const resultantSize = Math.floor( Math.cbrt(sizeValue/500) )
		if( resultantSize < 50 && resultantSize > 0 ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize }px`,
				width: `${ resultantSize }px`,
				display: 'inline-block',
				background: '#214421',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '16px'
			}
		}

		if( resultantSize < 100 && resultantSize > 50 ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize }px`,
				width: `${ resultantSize }px`,
				display: 'inline-block',
				background: '#00ff00',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '16px'
			}
		}

		else if( resultantSize < 200 && resultantSize > 100 ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize }px`,
				width: `${ resultantSize }px`,
				display: 'inline-block',
				background: '#0000ff',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '20px'
			}
		}

		else if( resultantSize < 400 && resultantSize > 200 ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize*3 }px`,
				width: `${ resultantSize*3 }px`,
				display: 'inline-block',
				background: 'url(http://paperlief.com/images/universe-stars-background-wallpaper-3.jpg)',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '25px'
			}
		}

		else if( resultantSize < 800 && resultantSize > 400 ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize }px`,
				width: `${ resultantSize }px`,
				display: 'inline-block',
				background: '#1c1c54',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '30px'
			}
		}

		else if( resultantSize >= 800  ) {
			return {
				borderRadius: '50%',
				height: `${ resultantSize }px`,
				width: `${ resultantSize }px`,
				display: 'inline-block',
				background: 'url(https://cosmos-images2.imgix.net/file/spina/photo/13465/180105-stars-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835)',
				lineHeight: `${ resultantSize }px`,
				border: '4px solid #ddd',
				fontSize: '40px',
				backgroundSize: 'cover'
			}
		}

		
	}
}