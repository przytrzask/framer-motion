import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Accordion({ children }) {
  const [isToggled, setIsToggled] = React.useState(false)
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled((prev) => !prev)}>
        Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>
              I'm baby jianbing artisan meggings irony seitan farm-to-table
              umami bushwick messenger bag affogato blog cardigan. Portland
              ethical tousled sriracha. Kale chips shaman trust fund you
              probably haven't heard of them. Celiac lyft narwhal umami hoodie,
              copper mug kitsch keytar glossier ethical yr woke. Kinfolk echo
              park before they sold out, dreamcatcher ennui fashion axe
              taxidermy fanny pack helvetica hammock cloud bread hot chicken
              chambray succulents. Celiac readymade tumblr sartorial, twee
              truffaut meh austin you probably haven't heard of them yuccie
              authentic trust fund. Kickstarter plaid master cleanse pinterest
              af. Pug locavore marfa, franzen fingerstache meh celiac freegan
              banjo dreamcatcher mixtape cold-pressed bitters pabst iPhone.
              Everyday carry portland literally, actually normcore air plant
              bespoke squid taxidermy hoodie lumbersexual poutine. Farm-to-table
              bicycle rights marfa woke chia knausgaard typewriter, paleo hoodie
              organic 90's intelligentsia thundercats. Authentic fixie irony,
              tumblr hella jianbing franzen synth. Tousled selvage trust fund
              iPhone irony schlitz. Bicycle rights meggings gentrify, woke
              butcher ethical forage. Gluten-free schlitz small batch waistcoat
              organic.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
