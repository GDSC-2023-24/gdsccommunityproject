import Navbar from '../Components/common/Navbar'
import RightSide from '../Components/common/RightSide'
// import { Theme } from '@radix-ui/themes'
import * as Dialog from '@radix-ui/react-dialog'
import Modal from '../Components/authInterface/Modal'
import Button from '../Components/common/Button'

function LoginAuthHome() {
	return (
		<Dialog.Root>
			<div className="App">
				<Navbar />
				<div className="container">
					<div className="left-side">
						<div class="nowtext">
							<h2>Happening Now</h2>
							<p>Join us today</p>
						</div>
						<Button
							className={'signupbtn'}
							textContent={'Sign up using Google'}
							variant={'OAuth'}
						/>
						<div className="divider">
							<div className="divider_left"></div>
							<p>or</p>
							<div className="divider_right"></div>
						</div>
						<Button
							className={'createaccbtn'}
							textContent={'Create an account'}
						/>
						<div className="alreadyacc">
							<p>Already have an account?</p>
							<Modal />
						</div>
					</div>
					<RightSide />
				</div>
			</div>
		</Dialog.Root>
	)
}

export default LoginAuthHome
