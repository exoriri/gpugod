import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const scroller = document.querySelector('.scroller');
export const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, thumbMinSize: 0, alwaysShowTracks: false });

export const scrollBarInit = () => {
  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    }
  });
  bodyScrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scroller });
};
