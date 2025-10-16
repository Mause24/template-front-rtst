import React from "react"
import { WorkInProgressProps } from "./WorkInProgress.types"
import { useWorkInProgress } from "./useWorkInProgress"
import styles from "./_styles.module.scss"

export const WorkInProgress: React.FC<WorkInProgressProps> = ({
	title = "Work in Progress",
	isOpen,
}) => {
	const { frame } = useWorkInProgress(isOpen)

	if (!isOpen) return null

	return (
		<div className={styles.wpBackdrop}>
			<div className={styles.wpModal}>
				<h2 className={styles.wpTitle}>{title}</h2>

				<div className={styles.wpContent}>
					<span className={styles.wpText}>WORK IN PROGRESS</span>
					<img
						src="./src/assets/images/gear.png"
						alt="Gear"
						className={`${styles.wpGearImage} ${styles[`frame${frame}`]}`}
					/>
				</div>
			</div>
		</div>
	)
}
