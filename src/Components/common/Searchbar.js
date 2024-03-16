import React from 'react'
import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

function Searchbar() {
	return (
		<TextField.Root radius="full">
			<TextField.Slot>
				<MagnifyingGlassIcon height="20" width="20" />
			</TextField.Slot>
			<TextField.Input
				placeholder="Search"
				style={{
					height: '3rem',
					width: '10rem',
				}}
				color="indigo"
			/>
		</TextField.Root>
	)
}

export default Searchbar
