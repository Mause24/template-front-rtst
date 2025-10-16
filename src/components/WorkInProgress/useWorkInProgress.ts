import { useEffect, useState } from "react"

export const useWorkInProgress = (isOpen: boolean): { frame: number } => {
	const [frame, setFrame] = useState(0)

	useEffect(() => {
		if (!isOpen) return

		const interval = setInterval(() => {
			setFrame(prev => (prev === 0 ? 1 : 0))
		}, 500)

		return (): void => clearInterval(interval)
	}, [isOpen])

	return { frame }
}
