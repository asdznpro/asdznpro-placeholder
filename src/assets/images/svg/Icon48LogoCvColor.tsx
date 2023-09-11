import React from 'react'

import IconProps from './IconProps.interface'

const Icon48LogoCvColor: React.FC<IconProps> = props => {
	let width = props.width ? props.width : 48
	let height = props.height ? props.height : 48

	return (
		<svg
			style={{ width: width, height: height }}
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_3219_36177-705076)'>
				<path
					d='M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z'
					fill='#3D3BFF'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.7779 14.8759C20.1571 14.7618 19.5614 15.1726 19.4474 15.7934C19.3662 16.2353 18.7847 17.1721 17.164 17.1421C16.5329 17.1305 16.0119 17.6326 16.0002 18.2637C15.9885 18.8947 16.4906 19.4158 17.1217 19.4275C19.8058 19.4771 21.4023 17.8026 21.6955 16.2064C21.8095 15.5856 21.3987 14.9899 20.7779 14.8759Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M27.7319 16.0319C28.3455 15.8838 28.9629 16.2612 29.111 16.8748C29.2916 17.6233 29.5593 18.3216 29.9811 18.7931C30.3443 19.1992 30.8833 19.5135 31.8799 19.4082C32.5076 19.3419 33.0702 19.797 33.1365 20.4247C33.2028 21.0523 32.7477 21.6149 32.12 21.6812C30.4061 21.8623 29.1394 21.2807 28.2774 20.3169C27.4739 19.4185 27.097 18.2727 26.889 17.4109C26.741 16.7973 27.1184 16.1799 27.7319 16.0319Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.0789 32.5686C19.4492 32.6122 18.9034 32.137 18.8599 31.5074C18.8059 30.7266 18.6641 30.0787 18.3127 29.5206C17.9709 28.9777 17.3568 28.4042 16.1454 27.9176C15.5597 27.6823 15.2757 27.0168 15.5109 26.4311C15.7462 25.8454 16.4117 25.5613 16.9974 25.7966C18.5568 26.423 19.5971 27.2706 20.247 28.3028C20.8874 29.3199 21.0745 30.4012 21.1401 31.3496C21.1837 31.9793 20.7085 32.5251 20.0789 32.5686Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M19.4474 15.7934C19.5614 15.1726 20.1571 14.7618 20.7779 14.8759C21.3987 14.9899 21.8095 15.5856 21.6955 16.2064C21.4023 17.8026 19.8058 19.4771 17.1217 19.4275C16.4906 19.4158 15.9885 18.8947 16.0002 18.2637C16.0119 17.6326 16.5329 17.1305 17.164 17.1421C18.7847 17.1721 19.3662 16.2353 19.4474 15.7934ZM18.8599 31.5074C18.9034 32.137 19.4492 32.6122 20.0789 32.5686C20.7085 32.5251 21.1837 31.9793 21.1401 31.3496C21.0745 30.4012 20.8874 29.3199 20.247 28.3028C19.5971 27.2706 18.5568 26.423 16.9974 25.7966C16.4117 25.5613 15.7462 25.8454 15.5109 26.4311C15.2757 27.0168 15.5597 27.6823 16.1454 27.9176C17.3568 28.4042 17.9709 28.9777 18.3127 29.5206C18.6641 30.0787 18.8059 30.7266 18.8599 31.5074Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M21.2846 10.2856C18.965 10.2856 16.9811 11.6679 16.0513 13.6431C13.3431 14.4635 11.4286 17.0915 11.4286 20.1229C11.4286 21.5006 11.8216 22.7887 12.5019 23.8629C11.8963 24.6434 11.5399 25.6356 11.5399 26.7041C11.5399 28.3286 12.3693 29.7911 13.653 30.5852C13.5974 30.8509 13.5683 31.1261 13.5683 31.4074C13.5683 33.4688 15.2367 35.3055 17.348 35.2389C18.1578 36.7077 19.7042 37.7142 21.4985 37.7142C22.4211 37.7142 23.2814 37.4463 24.0084 36.9862C24.746 37.447 25.6174 37.7142 26.5504 37.7142C28.3937 37.7142 29.988 36.6761 30.8011 35.1577C32.8205 35.1315 34.3564 33.4191 34.3564 31.4299C34.3564 31.1297 34.322 30.8368 34.2566 30.5556C35.6506 29.7875 36.5714 28.2653 36.5714 26.5583C36.5714 25.4333 36.1741 24.3949 35.5078 23.5968C35.8601 22.9843 36.1241 22.3113 36.2825 21.5976C36.3525 21.2824 36.4019 20.9592 36.4292 20.6298C36.4458 20.4298 36.4543 20.2275 36.4543 20.0232C36.4543 17.0147 34.6132 14.4109 31.9833 13.4534C30.9094 11.5656 28.8872 10.2856 26.5613 10.2856C25.5969 10.2856 24.6816 10.5066 23.8647 10.901C23.0879 10.5077 22.2113 10.2856 21.2846 10.2856ZM21.2846 12.5714C19.7704 12.5714 18.4586 13.5633 17.9705 14.9834C17.8374 15.3707 17.5072 15.6572 17.1049 15.7343C15.2273 16.0943 13.7143 17.8781 13.7143 20.1229C13.7143 20.9574 13.9252 21.7328 14.2884 22.3949C14.3868 22.3402 14.4863 22.2883 14.5866 22.2393C16.0604 21.519 17.8771 21.317 19.3963 21.8401C19.9931 22.0456 20.3103 22.696 20.1048 23.2928C19.8993 23.8896 19.2489 24.2068 18.6521 24.0013C17.7931 23.7055 16.6068 23.796 15.5903 24.2929C14.6586 24.7483 13.8256 25.6139 13.8256 26.7041C13.8256 27.801 14.5336 28.6492 15.3822 28.8659C15.7309 28.955 16.0173 29.2031 16.1551 29.5356C16.293 29.8681 16.2661 30.2461 16.0826 30.5557C15.94 30.7964 15.854 31.0874 15.854 31.4074C15.854 32.3316 16.54 32.9549 17.2359 32.9549C17.3837 32.9549 17.5245 32.9293 17.6565 32.8819C17.9519 32.7758 18.2781 32.7959 18.5583 32.9375C18.8385 33.0791 19.0481 33.3297 19.1379 33.6305C19.4534 34.6873 20.4044 35.4285 21.4985 35.4285C21.9989 35.4285 22.4656 35.2754 22.8571 35.0082V30.22L22.8571 30.2122V20.0632L22.8571 20.0555V12.953C22.3836 12.7082 21.85 12.5714 21.2846 12.5714ZM26.5613 12.5714C28.1415 12.5714 29.5133 13.5089 30.1483 14.8781C30.2896 15.1829 30.5578 15.41 30.8817 15.4992C32.7399 16.0109 34.1686 17.815 34.1686 20.0232C34.1686 20.1596 34.1631 20.2945 34.1524 20.4277C34.1342 20.6468 34.1028 20.8628 34.0565 21.0777C33.8567 21.9396 33.3684 22.841 32.6701 23.5793C31.803 24.496 30.7353 25.0357 29.7143 25.0357C29.0831 25.0357 28.5714 25.5473 28.5714 26.1785C28.5714 26.8097 29.0831 27.3214 29.7143 27.3214C31.3771 27.3214 32.8826 26.5374 34.0197 25.4611C34.188 25.7827 34.2857 26.1559 34.2857 26.5583C34.2857 27.7144 33.4891 28.606 32.5405 28.7685C32.1542 28.8346 31.8287 29.0941 31.6782 29.456C31.5276 29.8178 31.573 30.2316 31.7984 30.5522C31.967 30.792 32.0707 31.094 32.0707 31.4299C32.0707 32.264 31.4509 32.8716 30.7942 32.8716C30.1376 32.8716 29.8421 32.6298 29.4112 32.2466C28.939 31.8268 28.7868 31.4184 28.7868 31.2391C28.7868 30.6079 28.2751 30.0962 27.644 30.0962C27.0128 30.0962 26.5011 30.6079 26.5011 31.2391C26.5011 32.3221 27.1581 33.3019 27.8925 33.9549C28.0909 34.1313 28.3103 34.2979 28.5466 34.4479C28.0796 35.0471 27.3562 35.4285 26.5504 35.4285C26.03 35.4285 25.5465 35.2709 25.1429 34.998V12.8357C25.5826 12.6649 26.0604 12.5714 26.5613 12.5714Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M19.4474 15.7934C19.5614 15.1726 20.1571 14.7618 20.7779 14.8759C21.3987 14.9899 21.8095 15.5856 21.6955 16.2064C21.4023 17.8026 19.8058 19.4771 17.1217 19.4275C16.4906 19.4158 15.9885 18.8947 16.0002 18.2637C16.0119 17.6326 16.5329 17.1305 17.164 17.1421C18.7847 17.1721 19.3662 16.2353 19.4474 15.7934ZM18.8599 31.5074C18.9034 32.137 19.4492 32.6122 20.0789 32.5686C20.7085 32.5251 21.1837 31.9793 21.1401 31.3496C21.0745 30.4012 20.8874 29.3199 20.247 28.3028C19.5971 27.2706 18.5568 26.423 16.9974 25.7966C16.4117 25.5613 15.7462 25.8454 15.5109 26.4311C15.2757 27.0168 15.5597 27.6823 16.1454 27.9176C17.3568 28.4042 17.9709 28.9777 18.3127 29.5206C18.6641 30.0787 18.8059 30.7266 18.8599 31.5074Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3219_36177-705076'>
					<rect width='48' height='48' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export { Icon48LogoCvColor }
