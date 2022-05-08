import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export type CardProps = {
    title?: string
    autor?: string
    description?: string
    date?: string
}


export const Card: React.FC<CardProps> = ({ title, description,date, autor }) => {

    const control = useAnimation()
    const [ref, inView] = useInView()


    

    const boxVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    }

    useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

    return (
    <motion.div  ref={ref} variants={boxVariant} initial="hidden" animate={control} className="box">
       
        <div className="flex flex-col items-start relative bg-card p-6 rounded-lg border max-w-2xl bg-white shadow-md overflow-hidden">
            <p className="bg-card__date mb-2 text-base font-semibold">{date}</p>
            <h2 className="text-title text-lg font-semibold pb-1">{title}</h2>
            <p className="bg-card__description">{description}</p>
            <p className="text-autor pt-2 font-medium">{autor}</p>

        </div>
    </motion.div> 
    )
}









