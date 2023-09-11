import { useEffect, useState } from 'react'

function getUserDateTime() {
	const now = new Date()
	const userTimeZoneOffset = now.getTimezoneOffset()
	const timeZoneHours = Math.abs(userTimeZoneOffset) / 60
	const timeZoneMinutes = Math.abs(userTimeZoneOffset) % 60
	const timeZoneSign = userTimeZoneOffset < 0 ? '+' : '-'
	const formattedDateTime = `${now.getDate()}.${
		now.getMonth() + 1
	}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()} (UTC ${timeZoneSign}${String(
		timeZoneHours
	).padStart(2, '0')}:${String(timeZoneMinutes).padStart(2, '0')})`
	return formattedDateTime
}

export function useUserDateTime() {
	const [userDateTime, setUserDateTime] = useState<string>(getUserDateTime())

	useEffect(() => {
		const intervalId = setInterval(() => {
			const dateTime = getUserDateTime()
			setUserDateTime(dateTime)
		}, 1000) // Обновлять каждую секунду

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return userDateTime
}
