import { useState, useEffect, useRef } from "react";
import TypeIt from "typeit";

const Roles = () => {
        const titles = ["Designer", "Web Developer", "C++ Developer"];
        const [index, setIndex] = useState(0);
        const typeItRef = useRef(null);
        const instanceRef = useRef(null);
        const [startTyping, setStartTyping] = useState(false);
      
        useEffect(() => {
            const initialDelay = setTimeout(() => {
              setStartTyping(true);
            }, 3000); 
        
            return () => clearTimeout(initialDelay);
          }, []);

        useEffect(() => {
            if(!startTyping) return;
          const handleComplete = () => {
            setTimeout(() => {
              setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }, 1000);
          };
      
          instanceRef.current = new TypeIt(typeItRef.current, {
            speed: 100,
            lifeLike: true,
            afterComplete: handleComplete,
          })
            .type(titles[index])
            .pause(2000)
            .delete()
            .go();
      
          return () => {
            if (instanceRef.current) {
              instanceRef.current.destroy();
            }
          };
        }, [startTyping,index]);

  return <span ref={typeItRef} className="work"></span>;
};

export default Roles;
