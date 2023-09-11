import { Component } from 'react'

import SpinnerProps from './Spinner.interface'

import styles from './Spinner.module.scss'

interface SpinnerState {
	currentSymbol: string
}

class Spinner extends Component<SpinnerProps, SpinnerState> {
	private interval: NodeJS.Timeout | null = null

	constructor(props: SpinnerProps) {
		super(props)
		this.state = {
			currentSymbol: '|',
		}
	}

	componentDidMount() {
		this.animateSpinner()
	}

	animateSpinner = () => {
		const symbols = ['|', '/', '—', '\\']
		let index = 0

		const animationSpeed = 100

		this.interval = setInterval(() => {
			this.setState({ currentSymbol: symbols[index] })
			index = (index + 1) % symbols.length
		}, animationSpeed)
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval)
		}
	}

	render() {
		const { color, style } = this.props

		return (
			<div className={styles.root} style={{ color, ...style }}>
				{this.state.currentSymbol}
			</div>
		)
	}
}

export { Spinner }
