import React from "react"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import s from "./Forecast.module.css"

const Forecast = ({ data }) => {
	return (
		<>
			<label className={s.title}>Daily</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className={dailyItem}>
									<img className={s.icon} src={`icons/${item.weather[0].icon}.png`} alt="weather" />
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel></AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	)
}

export default Forecast