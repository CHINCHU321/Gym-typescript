import { SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image1.png";
import image3 from "@/assets/image1.png";
import image4 from "@/assets/image1.png";
import image5 from "@/assets/image1.png";
import image6 from "@/assets/image1.png";
type Props = {
  setSelectedPage:(value: SelectedPage) =>void;
}

const OurClasses = ( { setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40' >
      <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
        className='mx-auto w-5/6'
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}
         >

        </motion.div>
      </motion.div>
      </section>
  )
}

export default OurClasses