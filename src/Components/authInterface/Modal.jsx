import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import './Modal.css'
import '../common/Buttons.css'
import Button from '../common/Button'

const DialogDemo = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="signinbtn">Sign In</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
				<Dialog.Title className="DialogTitle">
					<img src="/images/gdsclogo1.png" alt="GDSC Logo" />
					Sign In
				</Dialog.Title>
				<Button
					className={'signupbtn'}
					textContent={'Sign in using Google'}
					variant={'OAuth'}
					style={{ backgroundColor: 'white', width: '24rem' }}
				/>
				<div className="divider" style={{ color: 'white' }}>
					<div className="divider_left"></div>
					<p>or</p>
					<div className="divider_right"></div>
				</div>
				<div style={{ paddingTop: '1rem' }}>
					<fieldset className="Fieldset">
						<input
							className="Input"
							id="email"
							defaultValue="Email Address"
						/>
					</fieldset>
					<fieldset className="Fieldset">
						<input
							className="Input"
							id="password"
							defaultValue="Password"
						/>
					</fieldset>
				</div>
				<div
					style={{
						display: 'flex',
						marginTop: 25,
						justifyContent: 'center',
					}}
				>
					<Dialog.Close asChild>
						<button className="signinbtn" style={{ width: '100%' }}>
							Sign In
						</button>
					</Dialog.Close>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
)

export default DialogDemo
