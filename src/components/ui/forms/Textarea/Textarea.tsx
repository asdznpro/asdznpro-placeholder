import React, { useState, useRef, useEffect } from 'react'

import styles from './Textarea.module.scss'

const Textarea = () => {
	const [text, setText] = useState<string>('$ ')
	const [textareaHeight, setTextareaHeight] = useState<number>(29)

	const textareaRef = useRef<HTMLTextAreaElement | null>(null)

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value

		if (newText.startsWith('$ ')) {
			setText(newText)
		} else if (newText.startsWith('$')) {
			setText('$ ' + newText.substring(1))
		} else {
			setText('$ ' + newText)
		}

		updateTextareaHeight()
	}

	const updateTextareaHeight = () => {
		if (textareaRef.current) {
			if (textareaRef.current.value === '') {
				setTextareaHeight(29)
			} else {
				setTextareaHeight(textareaRef.current.scrollHeight)
			}
		}
	}

	useEffect(() => {
		if (textareaRef.current) {
			setTextareaHeight(textareaRef.current.scrollHeight)
		}
	}, [])

	return (
		<div className={styles.root}>
			<textarea
				ref={textareaRef}
				value={text}
				onChange={handleChange}
				style={{
					minHeight: `${textareaHeight}px`,
					height: `${textareaHeight}px`,
				}}
			/>
		</div>
	)
}

export { Textarea }
