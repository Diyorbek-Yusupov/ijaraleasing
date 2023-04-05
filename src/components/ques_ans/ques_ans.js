import { useState } from "react";
import scss from "./ques_ans.module.scss";
import { Ques_ansData } from "./ques_ansData";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
const Ques_ans = () => {
	const [selected, setSelected] = useState(0);
	const tLength = Ques_ansData.length;
	const transition = { type: "spring", duration: 2 };
	return (
		<div className={scss.ques_ansDiv}>
			<div className="container">
				<div className={scss.testimonials}>
					<div className={scss.right_t}>
						<div data-aos="fade-right" className={scss.right_t_div2}></div>
						<div data-aos="fade-left" className={scss.right_t_div1}></div>
						<motion.img
							key={selected}
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ ...transition, duration: 2 }}
							src={Ques_ansData[selected].img}
							alt=""
						/>
					</div>
					<div className={scss.left_t}>
						<h1
							data-aos="fade-up"
							className={scss.stroke_text}
						>
							Вопросы и ответы
						</h1>
						<div className={scss.left_t_textsDiv}>
							<h2>
								<motion.span
									key={selected}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ ...transition, duration: 2 }}
								>
									{Ques_ansData[selected].title}
								</motion.span>
							</h2>
							<motion.span
								key={selected}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ ...transition, duration: 2 }}
							>
								{Ques_ansData[selected].text}
							</motion.span>
							<div className={scss.arrows}>
								<div
									className={scss.arrows_left}
									onClick={() => {
										selected === 0
											? setSelected(tLength - 1)
											: setSelected((prev) => prev - 1);
									}}
								>
									<HiArrowLongLeft />
								</div>
								<div
									className={scss.arrows_right}
									onClick={() => {
										selected === tLength - 1
											? setSelected(0)
											: setSelected((prev) => prev + 1);
									}}
								>
									<HiArrowLongRight />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ques_ans;
