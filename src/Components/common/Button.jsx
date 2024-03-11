import React from 'react'

function Button({ className, textContent, variant, style }) {
	return (
		<button className={className} style={style}>
			{variant === 'OAuth' && (
				<img
					src="/images/Googlelogo1.svg"
					alt="logo"
					className="logo1"
				/>
			)}
			{textContent}
		</button>
	)
}
export default Button
